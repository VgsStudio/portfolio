import * as path from 'node:path';
import { Stack, type StackProps, RemovalPolicy, Duration, CfnOutput } from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

export interface SiteStackProps extends StackProps {
  domainName: string;
  hostedZoneId: string;
  certificate: acm.ICertificate;
}

export class SiteStack extends Stack {
  public readonly siteBucket: s3.Bucket;
  public readonly distribution: cloudfront.Distribution;

  constructor(scope: Construct, id: string, props: SiteStackProps) {
    super(scope, id, props);

    const { domainName, hostedZoneId, certificate } = props;
    const wwwDomainName = `www.${domainName}`;

    const hostedZone = route53.HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
      hostedZoneId,
      zoneName: domainName,
    });

    const siteBucket = new s3.Bucket(this, 'SiteBucket', {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      removalPolicy: RemovalPolicy.RETAIN,
    });
    this.siteBucket = siteBucket;

    // S3 (via OAC) doesn't auto-resolve "index.html" for sub-paths like a website
    // endpoint would — needed so /materiais/<slug>/ resolves to its index.html.
    const directoryIndexFn = new cloudfront.Function(this, 'DirectoryIndexFn', {
      code: cloudfront.FunctionCode.fromInline(`
function handler(event) {
  var request = event.request;
  var uri = request.uri;
  if (uri.endsWith('/')) {
    request.uri += 'index.html';
  } else if (!uri.includes('.')) {
    request.uri += '/index.html';
  }
  return request;
}
`),
    });

    const s3Origin = origins.S3BucketOrigin.withOriginAccessControl(siteBucket);

    // The hosted slide editor (deck.vsoller.com.br, renamed from
    // slides.vsoller.com.br) reads talks.json and each talk's HTML/images
    // straight from here via fetch() — a cross-origin browser request, so
    // it needs CORS headers on the response. Scoped to materiais/* only:
    // that content is already fully public/unauthenticated, everything
    // else on the site is untouched.
    const materiaisCorsPolicy = new cloudfront.ResponseHeadersPolicy(this, 'MateriaisCorsPolicy', {
      responseHeadersPolicyName: 'materiais-cors',
      corsBehavior: {
        accessControlAllowOrigins: ['https://deck.vsoller.com.br'],
        accessControlAllowMethods: ['GET', 'HEAD'],
        accessControlAllowHeaders: ['*'],
        accessControlAllowCredentials: false,
        originOverride: true,
      },
    });

    // Same defaults as the CACHING_OPTIMIZED managed policy, except the
    // cache key also includes Origin — so a CORS response cached for one
    // origin (or none) can never be replayed to a different one.
    const materiaisCachePolicy = new cloudfront.CachePolicy(this, 'MateriaisCachePolicy', {
      cachePolicyName: 'materiais-cors-aware',
      defaultTtl: Duration.days(1),
      minTtl: Duration.seconds(0),
      maxTtl: Duration.days(365),
      enableAcceptEncodingGzip: true,
      enableAcceptEncodingBrotli: true,
      headerBehavior: cloudfront.CacheHeaderBehavior.allowList('Origin'),
    });

    const distribution = new cloudfront.Distribution(this, 'Distribution', {
      defaultRootObject: 'index.html',
      domainNames: [domainName, wwwDomainName],
      certificate,
      defaultBehavior: {
        origin: s3Origin,
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        functionAssociations: [
          { function: directoryIndexFn, eventType: cloudfront.FunctionEventType.VIEWER_REQUEST },
        ],
      },
      additionalBehaviors: {
        'materiais/*': {
          origin: s3Origin,
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          // CACHING_OPTIMIZED doesn't vary its cache key by Origin, but
          // the response DOES vary by Origin (that's what the CORS
          // policy's dynamic Access-Control-Allow-Origin header does) —
          // without this, a cache hit can replay one origin's CORS
          // header to a request from a different origin. Everything
          // else matches CACHING_OPTIMIZED's defaults (gzip/brotli, long
          // TTL) — just the cache key changes.
          cachePolicy: materiaisCachePolicy,
          functionAssociations: [
            { function: directoryIndexFn, eventType: cloudfront.FunctionEventType.VIEWER_REQUEST },
          ],
          responseHeadersPolicy: materiaisCorsPolicy,
        },
      },
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: Duration.seconds(0),
        },
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: Duration.seconds(0),
        },
      ],
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
    });
    this.distribution = distribution;

    new s3deploy.BucketDeployment(this, 'DeploySite', {
      sources: [s3deploy.Source.asset(path.join(__dirname, '../../web/dist'))],
      destinationBucket: siteBucket,
      // materiais/ is synced independently by the palestras repo's own
      // deploy — exclude filters apply to prune too, so without this any
      // portfolio deploy silently wipes every published talk (happened
      // once already; see palestras/CENTRAL.md's infra notes).
      exclude: ['materiais/*'],
      distribution,
      distributionPaths: ['/*'],
    });

    // Palestras/materiais: publicadas pelo repo VgsStudio/palestras (sync
    // direto pro prefixo "materiais/" deste bucket via a role restrita em
    // TalksOidcStack) — não fazem mais parte do deploy do portfólio.

    const cfTarget = route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution));

    new route53.ARecord(this, 'ApexAliasA', {
      zone: hostedZone,
      recordName: domainName,
      target: cfTarget,
    });
    new route53.AaaaRecord(this, 'ApexAliasAAAA', {
      zone: hostedZone,
      recordName: domainName,
      target: cfTarget,
    });
    new route53.ARecord(this, 'WwwAliasA', {
      zone: hostedZone,
      recordName: wwwDomainName,
      target: cfTarget,
    });
    new route53.AaaaRecord(this, 'WwwAliasAAAA', {
      zone: hostedZone,
      recordName: wwwDomainName,
      target: cfTarget,
    });

    new CfnOutput(this, 'DistributionDomainName', { value: distribution.distributionDomainName });
    new CfnOutput(this, 'DistributionId', { value: distribution.distributionId });
    new CfnOutput(this, 'SiteUrl', { value: `https://${domainName}` });
    new CfnOutput(this, 'BucketName', { value: siteBucket.bucketName });
  }
}

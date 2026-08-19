import { Stack, type StackProps, Duration } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import type * as s3 from 'aws-cdk-lib/aws-s3';
import type * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import { Construct } from 'constructs';

export interface TalksOidcStackProps extends StackProps {
  /** Same "owner@ownerId/repo@repoId" format as GithubOidcStack — see that file's note. */
  githubRepo: string;
  siteBucket: s3.IBucket;
  distribution: cloudfront.IDistribution;
}

/**
 * Deliberately narrower than GithubOidcStack: this role never runs `cdk
 * deploy` and can't touch anything outside the `materiais/` prefix. The
 * palestras repo's own CI assumes it to `aws s3 sync` talk content and
 * invalidate CloudFront — no CloudFormation, no bootstrap roles.
 */
export class TalksOidcStack extends Stack {
  constructor(scope: Construct, id: string, props: TalksOidcStackProps) {
    super(scope, id, props);

    const providerArn = `arn:aws:iam::${this.account}:oidc-provider/token.actions.githubusercontent.com`;

    const deployRole = new iam.Role(this, 'GithubActionsTalksDeployRole', {
      roleName: 'github-actions-talks-deploy',
      description: 'Assumed by GitHub Actions (OIDC) in the palestras repo to sync web/materials/ content to S3',
      maxSessionDuration: Duration.hours(1),
      assumedBy: new iam.WebIdentityPrincipal(providerArn, {
        StringEquals: {
          'token.actions.githubusercontent.com:aud': 'sts.amazonaws.com',
        },
        StringLike: {
          'token.actions.githubusercontent.com:sub': `repo:${props.githubRepo}:ref:refs/heads/main`,
        },
      }),
    });

    deployRole.addToPolicy(
      new iam.PolicyStatement({
        sid: 'ListMateriaisPrefix',
        actions: ['s3:ListBucket'],
        resources: [props.siteBucket.bucketArn],
        conditions: {
          StringLike: { 's3:prefix': ['materiais/*'] },
        },
      }),
    );

    deployRole.addToPolicy(
      new iam.PolicyStatement({
        sid: 'WriteMateriaisPrefix',
        actions: ['s3:PutObject', 's3:DeleteObject'],
        resources: [`${props.siteBucket.bucketArn}/materiais/*`],
      }),
    );

    deployRole.addToPolicy(
      new iam.PolicyStatement({
        sid: 'InvalidateMateriaisPaths',
        actions: ['cloudfront:CreateInvalidation'],
        resources: [
          `arn:aws:cloudfront::${this.account}:distribution/${props.distribution.distributionId}`,
        ],
      }),
    );
  }
}

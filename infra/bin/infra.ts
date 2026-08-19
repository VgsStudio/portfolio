#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CertStack } from '../lib/cert-stack';
import { SiteStack } from '../lib/site-stack';
import { GithubOidcStack } from '../lib/github-oidc-stack';
import { TalksOidcStack } from '../lib/talks-oidc-stack';

const DOMAIN_NAME = 'vsoller.com.br';
const HOSTED_ZONE_ID = 'Z02751983QMG471PEMGX6';

const app = new cdk.App();

const env = {
  account: '605914448173',
  region: 'us-east-1',
};

const certStack = new CertStack(app, 'VitorPortfolio-Cert', {
  env,
  domainName: DOMAIN_NAME,
  hostedZoneId: HOSTED_ZONE_ID,
});

const siteStack = new SiteStack(app, 'VitorPortfolio-Site', {
  env,
  domainName: DOMAIN_NAME,
  hostedZoneId: HOSTED_ZONE_ID,
  certificate: certStack.certificate,
});

new GithubOidcStack(app, 'VitorPortfolio-GithubOidc', {
  env,
  githubRepo: 'VgsStudio@81604963/portfolio@1324538764',
});

new TalksOidcStack(app, 'VitorPortfolio-TalksOidc', {
  env,
  githubRepo: 'VgsStudio@81604963/palestras@1339632061',
  siteBucket: siteStack.siteBucket,
  distribution: siteStack.distribution,
});

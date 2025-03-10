import * as core from '@actions/core';
import { CloudFrontClient, CreateInvalidationCommand } from '@aws-sdk/client-cloudfront';

const run = async (): Promise<void> => {
  try {
    // The distribution's id
    const distributionId = core.getInput('distribution-id', {
      required: true,
    });
    // A value to uniquely identify an invalidation request
    // CloudFront uses the value to prevent from accidentally resubmitting an identical request
    const callerReference = core.getInput('caller-reference', {
      required: false,
    });
    // A list of the paths that you want to invalidate
    const paths = core
      .getInput('paths', { required: false })
      .trim()
      .split(/\r?[\n,]/);

    const params = {
      DistributionId: distributionId,
      InvalidationBatch: {
        CallerReference: callerReference,
        Paths: {
          Quantity: paths.length,
          Items: paths,
        },
      },
    };

    const cloudfront = new CloudFrontClient({
      apiVersion: '2019-03-26',
      customUserAgent: 'aws-github-actions-cloudfront',
    });

    const invalidation = await cloudfront.send(new CreateInvalidationCommand(params));
    const invalidationId = invalidation.Invalidation.Id;
    core.setOutput('invalidation-id', invalidationId);
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();

export default run;

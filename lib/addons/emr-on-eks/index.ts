import { ClusterAddOn, ClusterInfo } from "../../spi";
import { Stack } from "aws-cdk-lib";
import { CfnServiceLinkedRole, IRole, Role } from "aws-cdk-lib/aws-iam";

export class EmrEksAddOn implements ClusterAddOn {
  deploy(clusterInfo: ClusterInfo): void {
    const cluster = clusterInfo.cluster;

    new CfnServiceLinkedRole(cluster.stack, 'EmrServiceRole', {
      awsServiceName: 'emr-containers.am`azonaws.com',
    });

    const emrEksServiceRole: IRole = Role.fromRoleArn(
      cluster.stack,
      'ServiceRoleForAmazonEMRContainers',
      `arn:aws:iam::${Stack.of(cluster.stack).account
      }:role/AWSServiceRoleForAmazonEMRContainers`,
    );

    cluster.awsAuth.addRoleMapping(
      emrEksServiceRole,
      {
        username: 'emr-containers',
        groups: ['']
      }
    );

  }
}
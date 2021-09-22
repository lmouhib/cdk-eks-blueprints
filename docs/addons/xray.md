# AWS X-Ray add-on

[AWS X-Ray](https://aws.amazon.com/xray/) helps developers analyze and debug production, distributed applications, such as those built using a microservices architecture. The X-Ray add-on provisions the X-Ray daemon into an Amazon EKS cluster. This daemon exposes an internal endpoint `xray-service.xray-system.svc.cluster.local:2000` that can be used to aggregate and post traces to the AWS X-Ray service. For more information, see [EKS Workshop X-Ray Section](https://www.eksworkshop.com/intermediate/245_x-ray/).

## Usage

```typescript
import { XrayAddOn, ClusterAddOn, EksBlueprint }  from '@shapirov/cdk-eks-blueprint';

const xrayAddOn = new XrayAddOn();
const addOns: Array<ClusterAddOn> = [ xrayAddOn ];

const app = new cdk.App();
new EksBlueprint(app, 'my-stack-name', addOns, [], {
  env: {    
      account: <AWS_ACCOUNT_ID>,
      region: <AWS_REGION>,
  },
});
```

Once deployed, your applications can integrate with X-Ray through the X-Ray SDK. For examples of integrations, see [aws-xray-kubernetes](https://github.com/aws-samples/aws-xray-kubernetes).

## Functionality

1. Creates the `xray-system` namespace.
2. Deploys the [`xray-daemon`](https://www.eksworkshop.com/intermediate/245_x-ray/x-ray-daemon/) manifests into the cluster.
3. Configures a Kubernetes service account with IRSA (`AWSXRayDaemonWriteAccess`) for communication between the cluster and the AWS X-Ray service.

import { Construct } from "constructs";
import merge from "ts-deepmerge";
import { ClusterInfo } from "../../spi";
import { HelmAddOn, HelmAddOnUserProps } from "../helm-addon";
import { ValuesSchema } from "./values";
import { createNamespace } from "../../utils/namespace-utils";

export interface CrossplaneAddOnProps extends HelmAddOnUserProps {
    values?: ValuesSchema
}

const defaultProps = {
    name: "crossplane",
    release: "crossplane",
    namespace: "crossplane-system",
    chart: "crossplane",
    version: "1.9.0-rc.0.9.g243f1f47",
    repository: "https://charts.crossplane.io/master/"
};

export class CrossplaneAddOn extends HelmAddOn {

    constructor(props?: CrossplaneAddOnProps) {
        super({ ...defaultProps, ...props });
    }

    deploy(clusterInfo: ClusterInfo): Promise<Construct> {

        const cluster = clusterInfo.cluster;

        // Crossplane Namespace
        createNamespace('crossplane-system', cluster);

        let values: ValuesSchema = {
            awsRegion: cluster.stack.region,
        };

        values = merge(values, this.props.values ?? {});

        const chart = this.addHelmChart(clusterInfo, values);
        return Promise.resolve(chart);
    }
}


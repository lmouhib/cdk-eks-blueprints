export interface ValuesSchema {
    replicas?: number
    deploymentStrategy?: string
    image?: {
      repository?: string
      tag?: string
      pullPolicy?: string
      [k: string]: unknown
    }
    nodeSelector?: {
      [k: string]: unknown
    }
    tolerations?: {
      [k: string]: unknown
    }
    affinity?: {
      [k: string]: unknown
    }
    customLabels?: {
      [k: string]: unknown
    }
    customAnnotations?: {
      [k: string]: unknown
    }
    serviceAccount?: {
      customAnnotations?: {
        [k: string]: unknown
      }
      [k: string]: unknown
    }
    leaderElection?: boolean
    args?: {
      [k: string]: unknown
    }
    provider?: {
      packages?: unknown[]
      [k: string]: unknown
    }
    configuration?: {
      packages?: unknown[]
      [k: string]: unknown
    }
    imagePullSecrets?: [] | [string]
    registryCaBundleConfig?: {
      [k: string]: unknown
    }
    webhooks?: {
      enabled?: boolean
      [k: string]: unknown
    }
    rbacManager?: {
      deploy?: boolean
      skipAggregatedClusterRoles?: boolean
      replicas?: number
      managementPolicy?: string
      leaderElection?: boolean
      args?: {
        [k: string]: unknown
      }
      nodeSelector?: {
        [k: string]: unknown
      }
      tolerations?: {
        [k: string]: unknown
      }
      affinity?: {
        [k: string]: unknown
      }
      [k: string]: unknown
    }
    priorityClassName?: string
    resourcesCrossplane?: {
      limits?: {
        cpu?: string
        memory?: string
        [k: string]: unknown
      }
      requests?: {
        cpu?: string
        memory?: string
        [k: string]: unknown
      }
      [k: string]: unknown
    }
    securityContextCrossplane?: {
      runAsUser?: number
      runAsGroup?: number
      allowPrivilegeEscalation?: boolean
      readOnlyRootFilesystem?: boolean
      [k: string]: unknown
    }
    packageCache?: {
      medium?: string
      sizeLimit?: string
      pvc?: string
      [k: string]: unknown
    }
    resourcesRBACManager?: {
      limits?: {
        cpu?: string
        memory?: string
        [k: string]: unknown
      }
      requests?: {
        cpu?: string
        memory?: string
        [k: string]: unknown
      }
      [k: string]: unknown
    }
    securityContextRBACManager?: {
      runAsUser?: number
      runAsGroup?: number
      allowPrivilegeEscalation?: boolean
      readOnlyRootFilesystem?: boolean
      [k: string]: unknown
    }
    metrics?: {
      enabled?: boolean
      [k: string]: unknown
    }
    extraEnvVarsCrossplane?: {
      [k: string]: unknown
    }
    extraEnvVarsRBACManager?: {
      [k: string]: unknown
    }
    podSecurityContextCrossplane?: {
      [k: string]: unknown
    }
    podSecurityContextRBACManager?: {
      [k: string]: unknown
    }
    [k: string]: unknown
  }
  
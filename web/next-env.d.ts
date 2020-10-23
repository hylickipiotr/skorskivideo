/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_GRAPHQL_URL: string;
    readonly NEXT_PUBLIC_CMS_URL: string;
    readonly GA_TRACKING_ID: string;
  }
}

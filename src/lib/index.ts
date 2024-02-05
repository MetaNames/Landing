import { Enviroment, MetaNamesSdk } from "@metanames/sdk";

export const metaNamesAppUrl = `${import.meta.env.VITE_META_NAMES_APP_URL}`
export const websiteUrl = `${import.meta.env.VITE_WEBSITE_URL}`

export const environment = import.meta.env.VITE_ENV ?? 'test';
export const sdkEnvironment = environment === 'test' ? Enviroment.testnet : Enviroment.mainnet;
export const metaNamesSdk = new MetaNamesSdk(sdkEnvironment);

import { environment } from "$lib";
import { Enviroment, MetaNamesSdk } from "@metanames/sdk";

export const sdkEnvironment = environment === 'test' ? Enviroment.testnet : Enviroment.mainnet;
export const metaNamesSdk = new MetaNamesSdk(sdkEnvironment);

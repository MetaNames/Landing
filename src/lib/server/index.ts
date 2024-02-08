import { environment } from "$lib";
import { Enviroment, MetaNamesSdk } from "@metanames/sdk";
import Cache from 'timed-cache';

export const sdkEnvironment = environment === 'test' ? Enviroment.testnet : Enviroment.mainnet;
export const metaNamesSdk = new MetaNamesSdk(sdkEnvironment);
export const cache = new Cache({ defaultTtl: 20 * 60 * 1000 }); // 20 minutes TTL

import { environment, metaNamesAppUrl } from "$lib";
import { Enviroment, MetaNamesSdk } from "@metanames/sdk";

export const sdkEnvironment = environment === 'test' ? Enviroment.testnet : Enviroment.mainnet;
export const metaNamesSdk = new MetaNamesSdk(sdkEnvironment);

export interface DomainProjection {
  name: string
  createdAt: string
}

export interface DomainStats {
  domainCount: number
  ownerCount: number
  recentDomains: DomainProjection[]
}

export const getMetaNamesStats = async () => {
  return fetch(`${metaNamesAppUrl}/api/domains/stats`).then((res) => res.json()) as Promise<DomainStats>
}

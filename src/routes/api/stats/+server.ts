import { metaNamesSdk } from "$lib/server";
import { json } from "@sveltejs/kit";

export async function GET() {
  const domainCount = await metaNamesSdk.domainRepository.count()
  const ownerCount = await metaNamesSdk.domainRepository.getOwners().then(owners => owners.length)
  const recentDomains = await metaNamesSdk.domainRepository.getAll()
    .then((domains) => domains.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(0, 10)
      .map((domain) => ({ name: domain.name, createdAt: domain.createdAt })));

  const stats = {
    ownerCount,
    domainCount,
    recentDomains
  };

  return json(stats, { headers: { 'Cache-Control': 'max-age=600' } });
}

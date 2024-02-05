import { metaNamesSdk } from "$lib";

export async function load() {
	const ownerCount = await metaNamesSdk.domainRepository.getOwners().then(owners => owners.length)
	const domainCount = await metaNamesSdk.domainRepository.count()

	return {
		stats: {
			ownerCount,
			domainCount
		}
	};
}
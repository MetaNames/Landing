import { cache, metaNamesSdk } from "$lib/server";

type RecentDomain = {
	name: string;
	createdAt: Date;
};

export async function load() {
	const domainCount = await metaNamesSdk.domainRepository.count()
	const ownerCount = await metaNamesSdk.domainRepository.getOwners().then(owners => owners.length)
	const recentDomains = await fetchRecentDomains()

	return {
		ownerCount,
		domainCount,
		recentDomains
	};
}

const fetchRecentDomains = async () => {
	const cacheKey = 'recentDomains'

	let recentDomains = cache.get(cacheKey) as RecentDomain[] | undefined
	if (!recentDomains) {
		recentDomains = await metaNamesSdk.domainRepository.getAll()
			.then((domains) => domains.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(0, 10)
				.map((domain) => ({ name: domain.name, createdAt: domain.createdAt })));
		cache.put(cacheKey, recentDomains);
	}

	return recentDomains
};

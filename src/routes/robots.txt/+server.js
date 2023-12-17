import { websiteUrl } from "$lib";

export async function GET() {
	return new Response(
		`
    User-agent: Googlebot
    User-agent: *
    Allow: /

    Sitemap: ${websiteUrl}sitemap.xml
		`.trim(),
		{
			headers: {
				'Content-Type': 'text/plain'
			}
		}
	);
}


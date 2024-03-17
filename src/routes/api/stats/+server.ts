import { getMetaNamesStats } from "$lib/server";
import { json } from "@sveltejs/kit";

export async function GET() {
  const stats = await getMetaNamesStats();

  return json(stats, { headers: { 'Cache-Control': 'max-age=600' } });
}

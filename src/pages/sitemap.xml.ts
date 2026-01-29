import { getCollection } from "astro:content";
import { siteConfig } from "@/lib/site";

export async function GET() {
  const { url } = siteConfig.site;
  const staticPages = [
    "",
    "about/",
    "finance/",
    "art/",
    "music/",
    "updates/",
    "tags/",
    "portfolio/"
  ];

  const collections = [
    await getCollection("finance"),
    await getCollection("art"),
    await getCollection("music"),
    await getCollection("updates")
  ];

  const posts = collections.flat();

  const tags = new Set();
  posts.forEach((post) => post.data.tags.forEach((tag) => tags.add(tag)));

  const urls = [
    ...staticPages.map((path) => ({
      loc: `${url}/${path}`.replace(/\/+/g, "/"),
      lastmod: new Date().toISOString()
    })),
    ...posts.map((post) => ({
      loc: `${url}/${post.collection}/${post.slug}/`,
      lastmod: post.data.date.toISOString()
    })),
    ...Array.from(tags).map((tag) => ({
      loc: `${url}/tags/${tag}/`,
      lastmod: new Date().toISOString()
    }))
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls.map((entry) => `\n  <url><loc>${entry.loc}</loc><lastmod>${entry.lastmod}</lastmod></url>`).join("") +
    "\n</urlset>";

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}

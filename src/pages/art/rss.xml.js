import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "@/lib/site";
import { sortByDate } from "@/lib/content";

export async function GET(context) {
  const { title } = siteConfig.site;
  const posts = sortByDate(await getCollection("art"));
  return rss({
    title: `${title} - Art`,
    description: "Art feed",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/art/${post.slug}/`
    }))
  });
}

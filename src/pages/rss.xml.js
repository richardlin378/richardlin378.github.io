import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "@/lib/site";
import { sortByDate } from "@/lib/content";

export async function GET(context) {
  const { title, description } = siteConfig.site;
  const allPosts = (
    await Promise.all([
      getCollection("finance"),
      getCollection("art"),
      getCollection("music"),
      getCollection("updates")
    ])
  ).flat();

  const items = sortByDate(allPosts).map((post) => ({
    title: post.data.title,
    pubDate: post.data.date,
    description: post.data.description,
    link: `/${post.collection}/${post.slug}/`
  }));

  return rss({
    title,
    description,
    site: context.site,
    items
  });
}

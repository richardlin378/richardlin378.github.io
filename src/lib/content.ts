import type { CollectionEntry } from "astro:content";

export const sortByDate = <T extends CollectionEntry<"finance" | "art" | "music" | "updates">>(
  items: T[]
) => [...items].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);

import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  date: z.date(),
  description: z.string(),
  tags: z.array(z.string()).default([])
});

const finance = defineCollection({
  type: "content",
  schema: baseSchema
});

const art = defineCollection({
  type: "content",
  schema: baseSchema
});

const music = defineCollection({
  type: "content",
  schema: baseSchema
});

const updates = defineCollection({
  type: "content",
  schema: baseSchema
});

export const collections = { finance, art, music, updates };

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Define the schema for the 'thoughts' collection
const thoughtsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/thoughts" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  thoughts: thoughtsCollection,
};

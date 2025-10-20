import { defineCollection, z } from 'astro:content';

// Define the schema for the 'thoughts' collection
const thoughtsCollection = defineCollection({
    type: 'content',
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
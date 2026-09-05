import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const CATEGORIES = [
  'sabah',
  'southeast-asia',
  'war-and-conflict',
  'dark-history',
] as const;

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Free text period label (e.g. "1957-1963") rather than a strict date,
    // since most articles here span years rather than a single point in time.
    period: z.string(),
    location: z.array(z.string()).default([]),
    categories: z.array(z.enum(CATEGORIES)).min(1),
    tags: z.array(z.string()).default([]),
    people: z.array(z.string()).default([]),
    status: z.enum(['notes', 'draft', 'fact-check', 'reviewed', 'published']),
    sensitivity: z.string().optional(),
    lastFactChecked: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    // Placeholder content that must never be mistaken for a researched article.
    sample: z.boolean().default(false),
    sources: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
          note: z.string().optional(),
        })
      )
      .default([]),
    publishDate: z.coerce.date().default(() => new Date()),
  }),
});

export const collections = { articles };
export { CATEGORIES };

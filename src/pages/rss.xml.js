import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = await getCollection('articles');
  const published = articles
    .filter((a) => a.data.status === 'published' || a.data.status === 'reviewed')
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());

  return rss({
    title: 'Chronicles Uncovered',
    description: 'A personal history archive focused on Sabah, North Borneo and Southeast Asia.',
    site: context.site,
    items: published.map((article) => ({
      title: article.data.title,
      description: article.data.summary,
      pubDate: article.data.publishDate,
      link: `/articles/${article.id}/`,
      categories: article.data.categories,
    })),
  });
}

import matter from 'gray-matter';
import { marked } from 'marked';
import { base } from '$app/paths';
import type { Article } from '$lib/types';

// All article markdown files, read as raw strings at build time.
// This replaces the former Newt CDN fetch (src/lib/newt/client.ts).
const modules = import.meta.glob('/src/content/articles/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

// Local assets live under static/ and are served below `paths.base` (e.g. on
// GitHub Pages project sites). Prefix root-relative paths with base; leave
// absolute URLs (http(s):// or //) untouched.
const withBase = (src?: string): string | undefined => {
	if (!src) return src;
	if (/^([a-z][a-z0-9+.-]*:)?\/\//i.test(src)) return src;
	if (src.startsWith('/')) return `${base}${src}`;
	return src;
};

const renderMarkdown = (md: string): string => {
	const html = marked.parse(md, { async: false }) as string;
	return (
		html
			// Give every <img> the article-img class, matching the previous Newt pipeline.
			.replace(/<img/g, '<img class="article-img"')
			// Prefix root-relative image sources with base.
			.replace(
				/(<img[^>]*?\ssrc=")(\/[^"]*)(")/g,
				(_m, pre, path, post) => `${pre}${base}${path}${post}`
			)
	);
};

const slugFromPath = (path: string): string => (path.split('/').pop() ?? '').replace(/\.md$/, '');

// YAML may parse unquoted dates into Date objects; normalise to an ISO string
// so the page components can safely do `new Date(article._sys.createdAt)`.
const toIso = (value: unknown): string => {
	if (value instanceof Date) return value.toISOString();
	return value ? String(value) : '';
};

const toArticle = (path: string, raw: string): Article => {
	const { data, content } = matter(raw);
	const slug = (data.slug as string) || slugFromPath(path);
	const createdAt = toIso(data.createdAt);
	const body = renderMarkdown(content);
	const ogImageSrc = withBase(data.ogImage);
	const coverImageSrc = withBase(data.coverImage);
	return {
		_id: slug,
		slug,
		title: data.title ?? '',
		body,
		meta: {
			title: data.title,
			description: data.description,
			ogImage: ogImageSrc ? { src: ogImageSrc } : undefined
		},
		coverImage: coverImageSrc ? { id: slug, src: coverImageSrc } : undefined,
		author: data.author ?? '',
		categories: data.categories ?? '',
		_sys: {
			model: 'article',
			owner: data.author ?? '',
			createdAt,
			updatedAt: toIso(data.updatedAt) || createdAt
		}
	};
};

// Newest first, by createdAt.
const allArticles: Article[] = Object.entries(modules)
	.map(([path, raw]) => toArticle(path, raw))
	.sort((a, b) => (a._sys.createdAt < b._sys.createdAt ? 1 : -1));

export const getArticles = async ({ limit, skip }: { limit?: number; skip?: number } = {}) => {
	let items = allArticles;
	if (skip) items = items.slice(skip);
	if (limit) items = items.slice(0, limit);
	return items;
};

export const getArticle = async (slug: string): Promise<Article> => {
	const article = allArticles.find((a) => a.slug === slug);
	if (!article) {
		throw new Error(`Article not found: ${slug}`);
	}
	return article;
};

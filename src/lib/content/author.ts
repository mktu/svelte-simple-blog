import matter from 'gray-matter';
import { marked } from 'marked';
import { base } from '$app/paths';
import type { Auther } from '$lib/types';

// The author profile, read from a single markdown file at build time.
// This replaces the former Newt CDN fetch (src/lib/newt/client.ts).
const modules = import.meta.glob('/src/content/author.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

// Local assets live under static/ and are served below `paths.base`.
const withBase = (src?: string): string | undefined => {
	if (!src) return src;
	if (/^([a-z][a-z0-9+.-]*:)?\/\//i.test(src)) return src;
	if (src.startsWith('/')) return `${base}${src}`;
	return src;
};

const raw = Object.values(modules)[0] ?? '';
const { data, content } = matter(raw);
const biography = (marked.parse(content, { async: false }) as string).replace(
	/(<img[^>]*?\ssrc=")(\/[^"]*)(")/g,
	(_m, pre, path, post) => `${pre}${base}${path}${post}`
);

export const getAuther = async (): Promise<Auther> => ({
	fullName: data.fullName ?? '',
	profileImage: withBase(data.profileImage),
	biography,
	description: data.description
});

import { createClient } from 'newt-client-js';
import type { Auther, Article } from '$lib/types';

const client = createClient({
	spaceUid: import.meta.env.VITE_SPACE_UID as string,
	token: import.meta.env.VITE_CDN_API_TOKEN as string,
	apiType: 'cdn' // You can specify "cdn" or "api".
});

const AppId = 'blog';
const AutherId = 'author';
const ArticleId = 'article';

export const getAuther = async () => {
	const auther = await client.getContents<Auther>({
		appUid: AppId,
		modelUid: AutherId
	});
	return auther.items[0];
};

export const getArticles = async ({ limit, skip }: { limit?: number; skip?: number }) => {
	const params: Parameters<typeof client.getContents>[0] = {
		appUid: AppId,
		modelUid: ArticleId,
		query: {
			body: {
				fmt: 'text'
			}
		}
	};
	if (limit) {
		params['query'].limit = limit;
	}
	if (skip) {
		params['query'].skip = skip;
	}
	const articles = await client.getContents<Article>(params);
	return articles.items;
};

export const getArticle = async (slug: string) => {
	const article = await client.getContent<Article>({
		appUid: AppId,
		modelUid: ArticleId,
		contentId: slug
	});
	return article;
};

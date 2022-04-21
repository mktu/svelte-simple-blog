import { getArticle } from '$lib/newt/client';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	try {
		const article = await getArticle(params.slug);
		if (article.body) {
			article.body = article.body.replace(/<img/g, '<img class="article-img"');
		}
		return {
			body: {
				article
			}
		};
	} catch (e) {
		//console.error(e)
		return {};
	}
};

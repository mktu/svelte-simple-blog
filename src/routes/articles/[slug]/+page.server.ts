import { getArticle } from '$lib/content/articles';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const article = await getArticle(params.slug);
		if (article.body) {
			article.body = article.body.replace(/<img/g, '<img class="article-img"');
		}
		return {
			article
		};
	} catch {
		return;
	}
};

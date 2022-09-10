import { getArticles } from '$lib/newt/client';
import type { PageServerLoad } from './$types';

const PAGE_LIMIT = 2;

export const load: PageServerLoad = async ({ params }) => {
	try {
		const page = params['page'] ? Number(params['page']) : 0;
		const articles = await getArticles({ limit: PAGE_LIMIT + 1, skip: page * PAGE_LIMIT });
		const hasMore = articles.length > PAGE_LIMIT;
		if (hasMore) {
			articles.pop();
		}
		return {
			articles,
			hasMore,
			page
		};
	} catch (e) {
		return;
	}
};

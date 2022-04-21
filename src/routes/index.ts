import { getAuther } from '$lib/newt/client';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	// locals.userid comes from src/hooks.js
	try {
		const auther = await getAuther();
		return {
			body: {
				auther
			}
		};
	} catch (e) {
		return {};
	}
};

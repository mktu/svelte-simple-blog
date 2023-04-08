// https://github.com/sveltejs/kit/issues/9404
export const trailingSlash = 'always';
import { getAuther } from '$lib/newt/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// locals.userid comes from src/hooks.js
	try {
		const auther = await getAuther();
		return {
			auther
		};
	} catch (e) {
		return;
	}
};

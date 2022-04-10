import preprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@import 'src/styles.scss';`
		},
	}),

	kit: {
		adapter: static_adapter(),
		paths: {
			base: dev ? '' : '/svelte-simple-blog',
		},
		trailingSlash : 'never',
		prerender : {
			default : true
		}
		
	}
};

export default config;

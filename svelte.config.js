import preprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';

const production = process.env.MODE !=='test' && process.env.NODE_ENV === 'production';

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
			base: production ? '/svelte-simple-blog' : '/',
		},
		trailingSlash : 'never',
		prerender : {
			default : true
		}
		
	}
};

export default config;

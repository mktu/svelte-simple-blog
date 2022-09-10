import preprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';

// when build with "--mode test", process.env.NODE_ENV will be undefined at this moment
// and sveltekit.config cannnot recognize vite's environment variable 
// -> https://stackoverflow.com/questions/72956324/how-can-i-use-vite-env-variables-in-svelte-config-js
const production = process.env.NODE_ENV === 'production'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@import 'src/styles.scss';`
		}
	}),

	kit: {
		adapter: static_adapter(),
		paths: {
			base: production ? '/svelte-simple-blog' : ''
		},
		trailingSlash: 'never',
	}
};

export default config;

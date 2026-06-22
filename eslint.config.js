import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import svelteConfig from './svelte.config.js';

export default ts.config(
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				// Let the Svelte parser hand <script lang="ts"> blocks to typescript-eslint,
				// and resolve preprocessors (scss) from the shared svelte.config.js.
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		},
		rules: {
			// Internal links are plain static hrefs (with the configured `base` where needed).
			// Migrating every link to resolve() from $app/paths is out of scope for this tooling pass.
			'svelte/no-navigation-without-resolve': 'off'
		}
	},
	{
		ignores: [
			'build/',
			'.svelte-kit/',
			'package/',
			'node_modules/',
			'test-results/',
			'playwright-report/',
			'.DS_Store',
			'.env',
			'.env.*'
		]
	}
);

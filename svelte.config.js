import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import { config as mdsvexConfig } from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter(),
		vite: {
			server: {
				fs: {
					allow: ['./static/fonts/', './static/images', './static/svg']
				}
			}
		}
	}
};

export default config;

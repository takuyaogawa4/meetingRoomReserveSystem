import {vitePreprocess} from "@sveltejs/vite-plugin-svelte";
import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		// src/svelte/src/routes/+layout.jsの
		// export const ssr = false;を設定することでSPA環境にする。
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			// フォールバックを記入して、ページ更新時の404に対応
			fallback: 'public.html',
			precompress: false,
			strict: true
		}),
		appDir:'public'
	},
	preprocess: vitePreprocess()
};
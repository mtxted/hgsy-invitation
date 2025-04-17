// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: '/hgsy-invitation/',
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern',
				additionalData: `
				@use '/src/styles/variables.scss' as *;
				`
			}
		}
	}
});

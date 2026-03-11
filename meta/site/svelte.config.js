import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: true,
	},
	kit: {
		adapter: adapter(),
		paths: {
			base: '/datakit',
		},
		prerender: {
			handleUnseenRoutes: 'warn',
		},
	},
};

export default config;

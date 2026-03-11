import {defineConfig} from 'vitest/config';

export default defineConfig(() => ({
	test: {
		coverage: {
			exclude: [
				'_/**',
				'packages/**/src/index.{js,ts}'
			],
			include: ['packages/**/src/*.{js,ts}']
		},
		exclude: [
			'_/**',
			'**/playwright.config.*',
		],
		include: [
			'meta/scripts/**/*.test.{js,ts}',
			'packages/*/src/**/*.test.{js,ts}',
		]
	},
}));

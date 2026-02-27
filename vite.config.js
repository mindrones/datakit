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
		],
		include: ['packages/*/src/**/*.test.{js,ts}']
	},
}));

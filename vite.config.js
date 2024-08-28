import {defineConfig} from 'vitest/config';

import {gitIgnoredPatterns} from './.gitignore.js';

export default defineConfig(() => ({
	test: {
		coverage: {
			exclude: [
				...gitIgnoredPatterns,
				'packages/**/src/index.js'
			],
			include: ['packages/**/src/*.js',]
		},
		exclude: [
			...gitIgnoredPatterns,
		],
		include: ['packages/*/src/**/*.test.js']
	},
}));

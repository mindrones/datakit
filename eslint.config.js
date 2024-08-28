import {jsConfig, jsdocConfig, styleConfig} from '@datakit/eslint';

import {gitIgnoredPatterns} from './.gitignore.js';

export default [
	{
		ignores: gitIgnoredPatterns,
	},
	...jsConfig,
	...jsdocConfig,
	...styleConfig,
];

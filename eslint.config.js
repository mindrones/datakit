import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import {includeIgnoreFile} from '@eslint/compat';

import {jsConfig, jsdocConfig, styleConfig, tsConfig} from '@datakit/eslint';

const gitignorePath = resolve(fileURLToPath(import.meta.url), '..', '.gitignore');

export default [
	includeIgnoreFile(gitignorePath),
	...jsConfig,
	...tsConfig,
	...jsdocConfig,
	...styleConfig,
];

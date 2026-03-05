import pluginJs from '@eslint/js';
import pluginJsStyle from '@stylistic/eslint-plugin';
import pluginJsDoc from 'eslint-plugin-jsdoc';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export const jsConfig = [
	{
		languageOptions: {
			// https://github.com/sindresorhus/globals
			// A value of `false` indicates that the variable should be considered read-only.
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		linterOptions: {
			reportUnusedDisableDirectives: 'warn'
		}
	},
	pluginJs.configs.recommended, // {rules}
];

export const tsConfig = tseslint.configs.recommended;

export const styleConfig = [
	{
		plugins: {
			'@stylistic': pluginJsStyle
		},
		rules: {
			'@stylistic/arrow-parens': ['warn', 'as-needed'],
			'@stylistic/indent': ['warn', 'tab', {
				MemberExpression: 'off',
				SwitchCase: 1,
			}],
			'@stylistic/quotes': ['warn', 'single', {avoidEscape: true}]
		}
	},
];

export const jsdocConfig = [
	pluginJsDoc.configs['flat/recommended'], // {plugins, rules}
	{
		rules: {
			'jsdoc/require-param-description': 'off',
			'jsdoc/require-returns-description': 'off',
			'jsdoc/tag-lines': 'off',
		}
	},
	{
		// TypeScript types cover @param and @returns
		files: ['**/*.ts'],
		rules: {
			'jsdoc/require-param': 'off',
			'jsdoc/require-returns': 'off',
		}
	},
];

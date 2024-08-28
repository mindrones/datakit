import pluginJs from '@eslint/js';
import pluginJsStyle from '@stylistic/eslint-plugin-js';
import pluginJsDoc from 'eslint-plugin-jsdoc';
import globals from 'globals';

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

export const styleConfig = [
	{
		plugins: {
			'@stylistic/js': pluginJsStyle
		},
		rules: {
			'@stylistic/js/indent': ['warn', 'tab', {
				MemberExpression: 'off',
				SwitchCase: 1,
			}],
			'@stylistic/js/quotes': ['warn', 'single', {avoidEscape: true}]
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
];

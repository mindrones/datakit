import {readFileSync} from 'node:fs';

export const gitIgnoredPatterns =
	readFileSync('.gitignore', 'utf8')
	.split('\n')
	.filter(line => line && !line.startsWith('#'));

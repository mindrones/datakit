import {mkdirSync, readFileSync, writeFileSync} from 'fs';
import * as path from 'path';
import {fileURLToPath} from 'url';

import type {TxCategory, TypeDef} from './types';

/* Directories */

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const metaDir = path.dirname(path.dirname(scriptDir));
const siteDir = path.join(metaDir, 'site');

const generatedDir = path.join(siteDir, 'src', 'lib', 'data', 'generated');
const staticDir = path.join(siteDir, 'static');
const staticDataDir = path.join(staticDir, 'data');

/* Load generated JSON */

const txCategories: TxCategory[] = JSON.parse(
	readFileSync(path.join(generatedDir, 'tx.json'), 'utf-8')
).categories;

const typesData: Record<string, TypeDef[]> = JSON.parse(
	readFileSync(path.join(generatedDir, 'types.json'), 'utf-8')
);

/* Counts */

const fnCount = txCategories.reduce(
	(sum, cat) => sum + cat.functions.length,
	0
);
const typeCount = Object.values(typesData).reduce(
	(sum, types) => sum + types.length,
	0
);

/* Build llms.txt — concise version */

const llmsTxt = `\
# @datakit

> A collection of TypeScript utilities for functional data transformation.
> Two documented packages: \`@datakit/tx\` (${fnCount} functions) and \`@datakit/types\` (${typeCount} types).

\`@datakit/tx\` organises its functions by signature category (e.g. \`string → string\`,
\`array → object\`). Each function has a JSDoc description, type signature, and usage example.

## Docs

- [API reference — @datakit/tx](https://mindrones.github.io/datakit/tx/): Full list of transformation functions grouped by input/output type
- [Type definitions — @datakit/types](https://mindrones.github.io/datakit/types/): Shared TypeScript types used across @datakit packages

## Data

- [tx.json](https://mindrones.github.io/datakit/data/tx.json): Machine-readable API data for @datakit/tx — function names, signatures, JSDoc descriptions, and examples
- [types.json](https://mindrones.github.io/datakit/data/types.json): Machine-readable type definitions for @datakit/types — TypeScript source, descriptions, file groupings

## Optional

- [npm — @datakit/tx](https://www.npmjs.com/package/@datakit/tx)
- [npm — @datakit/types](https://www.npmjs.com/package/@datakit/types)
- [GitHub repository](https://github.com/mindrones/datakit)
`;

/* Build llms-full.txt — expanded version */

const sections: string[] = [];

/* Header — same as llms.txt */
sections.push(`\
# @datakit

> A collection of TypeScript utilities for functional data transformation.
> Two documented packages: \`@datakit/tx\` (${fnCount} functions) and \`@datakit/types\` (${typeCount} types).

\`@datakit/tx\` organises its functions by signature category (e.g. \`string → string\`,
\`array → object\`). Each function has a JSDoc description, type signature, and usage example.`);

/* tx categories */
for (const category of txCategories) {
	sections.push(
		`\n## @datakit/tx — ${category.label} (${category.inputType} → ${category.outputType})`
	);

	for (const fn of category.functions) {
		const parts: string[] = [`\n### ${fn.name}`];

		if (fn.description) {
			parts.push(`\n${fn.description}`);
		}

		for (const example of fn.examples) {
			if (example.trim()) {
				parts.push(`\n${example}`);
			}
		}

		sections.push(parts.join('\n'));
	}
}

/* types sections */
for (const [file, types] of Object.entries(typesData)) {
	sections.push(`\n## @datakit/types — ${file}`);

	for (const type of types) {
		const parts: string[] = [
			`\n### ${type.name}`,
			`\n\`\`\`typescript\n${type.source}\n\`\`\``,
		];

		if (type.description) {
			parts.push(`\n${type.description}`);
		}

		sections.push(parts.join('\n'));
	}
}

const llmsFullTxt = sections.join('\n');

/* Write outputs */

mkdirSync(staticDataDir, {recursive: true});

writeFileSync(
	path.join(staticDataDir, 'tx.json'),
	JSON.stringify(txCategories, null, '\t')
);
writeFileSync(
	path.join(staticDataDir, 'types.json'),
	JSON.stringify(typesData, null, '\t')
);
writeFileSync(path.join(staticDir, 'llms.txt'), llmsTxt);
writeFileSync(path.join(staticDir, 'llms-full.txt'), llmsFullTxt);

console.log(`✓ static/data/tx.json`);
console.log(`✓ static/data/types.json`);
console.log(`✓ static/llms.txt  (${fnCount} functions, ${typeCount} types)`);
console.log(`✓ static/llms-full.txt`);

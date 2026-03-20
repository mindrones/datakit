export interface PackageMeta {
	description: string;
	name: string;         // e.g. '@datakit/tx'
	route: string;        // e.g. '/tx'
	slug: string;         // e.g. 'tx'
	version: string;
}

export interface TxCategory {
	functions: TxFunction[];
	id: string;           // slug, e.g. 'string-string', 'array-object'
	inputType: string;    // e.g. 'string', 'array', 'any-boolean'
	label: string;        // human-readable, e.g. 'string → string'
	outputType: string;   // e.g. 'string', 'object', 'object-generic'
}

export interface TxDocs {
	categories: TxCategory[];
	commitHash: string;
}

export interface TxFunction {
	description: string;
	examples: string[];   // each @example block as a raw string
	filePath: string;     // relative to packages/tx/src/
	lineNumber: number;   // 1-based line of the exported declaration
	name: string;
	since?: string;
}

export interface TypeDef {
	description: string;
	file: string;
	name: string;
	since?: string;
	source: string;       // full TypeScript source text of the declaration
}

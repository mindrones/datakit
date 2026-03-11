import type {TypeDef} from '@datakit/scripts/site';

import type {PageLoad} from './$types';
import typesData from '$lib/data/generated/types.json';

const FILE_ORDER = ['array', 'function', 'object', 'shared'] as const;
type TypesFile = typeof FILE_ORDER[number];

export type TypeGroup = {
	id: TypesFile;
	types: TypeDef[];
};

export const load: PageLoad = () => ({
	groups: FILE_ORDER
		.filter(f => (typesData as Record<string, TypeDef[]>)[f]?.length)
		.map(f => ({
			id: f,
			types: (typesData as Record<string, TypeDef[]>)[f]
				.slice()
				.sort((a, b) => a.name.localeCompare(b.name)),
		})) satisfies TypeGroup[],
});

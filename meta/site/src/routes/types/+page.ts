import type {TypeDef} from '@datakit/scripts/site';

import type {PageLoad} from './$types';
import typesData from '$lib/data/generated/types.json';

export type TypeGroup = {
	id: string;
	types: TypeDef[];
};

export const load: PageLoad = () => ({
	groups: Object.keys(typesData as Record<string, TypeDef[]>)
		.filter(f => (typesData as Record<string, TypeDef[]>)[f]?.length)
		.map(f => ({
			id: f,
			types: (typesData as Record<string, TypeDef[]>)[f]
				.slice()
				.sort((a, b) => a.name.localeCompare(b.name)),
		})) satisfies TypeGroup[],
});

import type {PackageMeta} from '@datakit/scripts/site';

export const packages: PackageMeta[] = [
	{
		description: 'Functional data transformation utilities, organised by input→output type signature.',
		name: '@datakit/tx',
		route: '/tx',
		slug: 'tx',
		version: '0.1.2',
	},
	{
		description: 'Shared TypeScript types used across @datakit packages.',
		name: '@datakit/types',
		route: '/types',
		slug: 'types',
		version: '0.0.1',
	},
];

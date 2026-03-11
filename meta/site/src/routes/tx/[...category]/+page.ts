import {error} from '@sveltejs/kit';

import type {TxCategory, TxDocs} from '@datakit/scripts/site';

import type {EntryGenerator, PageLoad} from './$types';
import txData from '$lib/data/generated/tx.json';

export const load: PageLoad = ({params}) => {
	const {categories, commitHash} = txData as unknown as TxDocs;
	// trailingSlash: 'always' makes rest params include the trailing slash; strip it
	const id = params.category.replace(/\/$/, '');
	const category = (categories as TxCategory[]).find(c => c.id === id);
	if (!category) error(404, `Unknown tx category: ${id}`);
	return {category, commitHash};
};

export const entries: EntryGenerator = () =>
	(txData as unknown as TxDocs).categories.map(c => ({category: c.id}));

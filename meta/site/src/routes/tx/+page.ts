import type {TxCategory, TxDocs} from '@datakit/scripts/site';

import type {PageLoad} from './$types';
import txData from '$lib/data/generated/tx.json';

export const load: PageLoad = () => {
	const {categories, commitHash} = txData as unknown as TxDocs;
	return {categories: categories as TxCategory[], commitHash};
};

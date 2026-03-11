<script lang='ts'>
	import type {TxCategory} from '@datakit/scripts/site';

	import {resolve} from '$app/paths';
	import FunctionDoc from '$lib/components/FunctionDoc.svelte';
	import SignatureBadge from '$lib/components/SignatureBadge.svelte';
	import * as Separator from '$lib/components/ui/separator';

	interface Props {
		data: {category: TxCategory; commitHash: string};
	}

	let {data}: Props = $props();
	let {category, commitHash} = $derived(data);
</script>

<nav class="mb-6 text-sm text-[--color-fg-muted]">
	<a
		href={resolve('/tx' as '/')}
		class="hover:text-[--color-fg]"
	>tx</a>
	<span class="mx-1">/</span>
	<span class="text-[--color-fg]">{category.label}</span>
</nav>

<section class="mb-8">
	<div class="mb-2 flex flex-wrap items-center gap-3">
		<h1 class="text-2xl font-bold">{category.label}</h1>
		<SignatureBadge
			input={category.inputType}
			output={category.outputType}
		/>
	</div>
	<p class="text-sm text-[--color-fg-muted]">
		{category.functions.length} function{category.functions.length === 1 ? '' : 's'}
	</p>
</section>

<div class="flex flex-col">
	{#each category.functions as fn, index (fn.name)}
		{#if index > 0}
			<Separator.Root class="my-8" />
		{/if}
		<div id={fn.name}>
			<FunctionDoc
				{commitHash}
				{fn}
				inputType={category.inputType}
				outputType={category.outputType}
			/>
		</div>
	{/each}
</div>

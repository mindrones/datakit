<script lang='ts'>
	import type {TypeDef} from '@datakit/scripts/site';

	import CodeBlock from './CodeBlock.svelte';

	interface Props {
		type: TypeDef;
	}

	let {type}: Props = $props();
</script>

<div class="pb-10">
	<h2 class="mb-3 font-mono text-lg font-semibold"><code>{type.name}</code></h2>
	<CodeBlock lang="typescript" code={type.source} />
	{#if type.description}
		<p class="mt-3 text-[--color-fg-muted]">{type.description}</p>
	{/if}
	{#if type.since}
		<p class="mt-1 text-sm text-[--color-fg-muted]">Since {type.since}</p>
	{/if}
</div>

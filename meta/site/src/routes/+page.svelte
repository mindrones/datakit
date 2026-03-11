<script lang='ts'>
	import {base} from '$app/paths';
	import PackageCard from '$lib/components/PackageCard.svelte';
	import {packages} from '$lib/data/packages';
</script>

<svelte:head>
	<title>@datakit — TypeScript data utilities</title>
</svelte:head>

<section class="mb-10">
	<h1 class="mb-2 text-3xl font-bold">@datakit</h1>
	<p class="text-[--color-fg-muted]">
		A collection of TypeScript utilities for functional data transformation.
	</p>
	<p class="mt-1 text-sm text-[--color-fg-muted]">
		<code>@datakit/eslint</code> is available on npm but not documented here.
	</p>
</section>

<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
	{#each packages as pkg}
		<PackageCard {pkg} />
	{/each}
</div>

<section class="mt-12 border-t border-[--color-border] pt-6">
	<h2 class="mb-3 text-sm font-semibold uppercase tracking-wide text-[--color-fg-muted]">
		Machine-readable
	</h2>
	<ul class="space-y-1 text-sm text-[--color-fg-muted]">
		<li>
			<a href="{base}/llms.txt" class="hover:text-[--color-fg]">llms.txt</a>
			— AI-readable site index (<a href="https://llmstxt.org/" class="hover:text-[--color-fg]">llmstxt.org</a>)
		</li>
		<li>
			<a href="{base}/llms-full.txt" class="hover:text-[--color-fg]">llms-full.txt</a>
			— full API inlined for LLM context windows
		</li>
		<li>
			<a href="{base}/data/tx.json" class="hover:text-[--color-fg]">data/tx.json</a>
			— @datakit/tx API (JSON)
		</li>
		<li>
			<a href="{base}/data/types.json" class="hover:text-[--color-fg]">data/types.json</a>
			— @datakit/types definitions (JSON)
		</li>
	</ul>
</section>

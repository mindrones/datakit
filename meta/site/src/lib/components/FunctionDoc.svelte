<script lang='ts'>
	import {Github} from '@lucide/svelte';

	import type {TxFunction} from '@datakit/scripts/site';

	import CodeBlock from './CodeBlock.svelte';
	import SignatureBadge from './SignatureBadge.svelte';

	interface Props {
		commitHash: string;
		fn: TxFunction;
		inputType: string;
		outputType: string;
	}

	let {commitHash, fn, inputType, outputType}: Props = $props();

	const githubBase = 'https://github.com/mindrones/datakit/blob';
	let githubUrl = $derived(
		`${githubBase}/${commitHash}/packages/tx/src/${fn.filePath}#L${fn.lineNumber}`
	);
</script>

<article class="flex flex-col gap-4 pb-10">
	<div class="flex flex-wrap items-center gap-3">
		<code class="font-mono text-lg font-semibold text-[--color-fg]">{fn.name}</code>
		<a
			href="#{fn.name}"
			aria-label="Permalink to {fn.name}"
			class="font-mono text-lg text-[--color-fg-muted] opacity-40 dark:opacity-60 transition-opacity hover:opacity-80"
		>#</a>
		<a
			href={githubUrl}
			rel="noopener noreferrer"
			target="_blank"
			aria-label="View source of {fn.name} on GitHub"
			class="text-[--color-fg-muted] opacity-40 dark:opacity-60 transition-opacity hover:opacity-80"
		><Github size={16} /></a>
		<SignatureBadge
			input={inputType}
			output={outputType}
		/>
	</div>

	<p class="text-sm leading-relaxed text-[--color-fg-muted]">{fn.description}</p>

	{#each fn.examples as example}
		<div class="flex flex-col gap-1">
			<h4 class="text-xs font-semibold uppercase tracking-wide text-[--color-fg-muted]">
				Example
			</h4>
			<CodeBlock
				code={example}
				lang="typescript"
			/>
		</div>
	{/each}

	{#if fn.since}
		<span class="text-xs text-[--color-fg-muted]">@since {fn.since}</span>
	{/if}
</article>

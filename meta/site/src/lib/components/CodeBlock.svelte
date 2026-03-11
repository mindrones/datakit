<script lang='ts'>
	import {codeToHtml} from 'shiki';

	interface Props {
		code: string;
		lang?: string;
	}

	let {code, lang = 'typescript'}: Props = $props();

	/* re-runs whenever code or lang changes */
	let htmlPromise = $derived(
		codeToHtml(code, {
			lang,
			themes: {dark: 'github-dark', light: 'github-light'},
		})
	);
</script>

<div class="overflow-auto rounded-lg border border-[--color-border] bg-[--color-code-bg] font-mono text-sm">
	{#await htmlPromise}
		<pre class="p-4 text-[--color-fg-muted]"><code>{code}</code></pre>
	{:then html}
		{@html html}
	{/await}
</div>

<style>
	/* make the shiki <pre> fill the wrapper and remove its own rounded corners */
	:global(.shiki) {
		background-color: var(--color-code-bg) !important;
		border-radius: 0;
		margin: 0;
		overflow-x: auto;
		padding: 1rem;
		width: 100%;
	}

	/* apply dark-theme colours when the .dark class is on <html> */
	:global(html.dark .shiki),
	:global(html.dark .shiki span) {
		background-color: var(--shiki-dark-bg) !important;
		color: var(--shiki-dark) !important;
		font-style: var(--shiki-dark-font-style) !important;
		font-weight: var(--shiki-dark-font-weight) !important;
	}
</style>

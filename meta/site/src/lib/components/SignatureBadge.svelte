<script lang='ts'>
	/* lookup maps input base-type to Tailwind colour utility classes */
	const typeColorMap: Record<string, string> = {
		any: 'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-300',
		array: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-800/30 dark:text-emerald-300',
		generic: 'bg-slate-100 text-slate-700 dark:bg-slate-700/30 dark:text-slate-300',
		iterable: 'bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-300',
		number: 'bg-rose-100 text-rose-800 dark:bg-rose-800/30 dark:text-rose-300',
		object: 'bg-orange-100 text-orange-800 dark:bg-orange-800/30 dark:text-orange-300',
		regexp: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-300',
		string: 'bg-violet-100 text-violet-800 dark:bg-violet-800/30 dark:text-violet-300',
	};

	const DEFAULT_COLOR = 'bg-slate-100 text-slate-700 dark:bg-slate-700/30 dark:text-slate-300';

	interface Props {
		input: string;
		output: string;
	}

	let {input, output}: Props = $props();

	// derive colour from the first word of the input type slug
	let colorClass = $derived(typeColorMap[input.split('-')[0]] ?? DEFAULT_COLOR);
</script>

<span class="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-xs {colorClass}">
	{#if input === output}
		{input}
	{:else}
		{input} → {output}
	{/if}
</span>

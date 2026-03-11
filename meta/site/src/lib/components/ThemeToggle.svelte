<script lang='ts'>
	import { Moon, Sun } from '@lucide/svelte';

	import { theme } from '$lib/hooks/theme.svelte';
</script>

<button
	aria-label="Toggle theme"
	class="cursor-pointer rounded-md p-2 text-[--color-fg-muted] transition-colors hover:text-[--color-fg]"
	onclick={theme.toggle}
>
	{#if theme.isDark}
		<Sun size={18} />
	{:else}
		<Moon size={18} />
	{/if}
</button>

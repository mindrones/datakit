<script>
	import { onMount } from 'svelte';

	import Header from '$lib/components/Header.svelte';
	import { theme } from '$lib/hooks/theme.svelte.ts';

	import '../app.css';

	const { children } = $props();

	onMount(() => theme.init());
</script>

<div class="flex min-h-screen flex-col bg-[--color-bg] text-[--color-fg]">
	<Header />
	<main class="mx-auto w-full max-w-7xl flex-1 overflow-x-clip px-4 py-8 max-md:pb-20 md:px-8">
		{@render children()}
	</main>
	<footer class="hidden border-t border-[--color-border] py-4 text-center text-sm text-[--color-fg-muted] md:block">
		&copy; mindrones &middot; datakit
	</footer>
</div>

{#if import.meta.env.VITE_EXTRAS}
	<!-- Breakpoint indicator: only shown in dev:extras mode -->
	<div class="fixed left-0 top-0 z-9999 flex items-center gap-1 bg-black/80 px-2 py-0.5 font-mono text-xs text-white">
		<span class="sm:hidden">xs</span>
		<span class="hidden sm:inline md:hidden">sm</span>
		<span class="hidden md:inline lg:hidden">md</span>
		<span class="hidden lg:inline xl:hidden">lg</span>
		<span class="hidden xl:inline 2xl:hidden">xl</span>
		<span class="hidden 2xl:inline">2xl</span>
	</div>
{/if}

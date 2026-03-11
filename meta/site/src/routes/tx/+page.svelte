<script lang='ts'>
	import {Hash, X} from '@lucide/svelte';
	import {cubicOut} from 'svelte/easing';
	import {fade, fly} from 'svelte/transition';

	import type {TxCategory, TxFunction} from '@datakit/scripts/site';

	import FunctionDoc from '$lib/components/FunctionDoc.svelte';
	import SignatureBadge from '$lib/components/SignatureBadge.svelte';
	import {Input} from '$lib/components/ui/input';
	import * as Separator from '$lib/components/ui/separator';

	interface Props {
		data: {categories: TxCategory[]; commitHash: string};
	}

	let {data}: Props = $props();

	let mobileNavOpen = $state(false);
	let query = $state('');
	let {categories, commitHash} = $derived(data);

	let displayed = $derived.by(() => {
		const q = query.trim().toLowerCase();
		return categories
			.map(cat => {
				const fns = (
					q
						? cat.functions.filter(fn =>
								fn.name.toLowerCase().includes(q)
							)
						: cat.functions
				)
					.slice()
					.sort((a, b) => a.name.localeCompare(b.name));
				return {...cat, functions: fns};
			})
			.filter(cat => cat.functions.length > 0);
	});

	let flat = $derived(
		displayed.flatMap(cat => cat.functions.map(fn => ({cat, fn}) as {cat: TxCategory; fn: TxFunction}))
	);

	/* --- IntersectionObserver --- */
	let visibleNames = $state(new Set<string>());
	let sidebarNav = $state<HTMLElement | null>(null);
	let drawerNav = $state<HTMLElement | null>(null);

	// Keep highlighted item centered in the nav container — never scrolls the page
	function centerNavOn(nav: HTMLElement, fnName: string) {
		const link = nav.querySelector<HTMLElement>(`[data-nav-fn="${fnName}"]`);
		if (!link) return;
		const navRect = nav.getBoundingClientRect();
		const linkRect = link.getBoundingClientRect();
		nav.scrollTop += (linkRect.top + linkRect.height / 2) - (navRect.top + navRect.height / 2);
	}

	// Svelte action: observes fn-anchor divs; re-observes when flat changes (passed as param)
	function observeAnchors(node: HTMLElement, _params: unknown) {
		let obs: IntersectionObserver | undefined;

		function reconnect() {
			obs?.disconnect();
			visibleNames = new Set();
			obs = new IntersectionObserver(
				entries => {
					let changed = false;
					for (const entry of entries) {
						const name = (entry.target as HTMLElement).id;
						if (entry.isIntersecting && !visibleNames.has(name)) {
							visibleNames.add(name);
							changed = true;
						} else if (!entry.isIntersecting && visibleNames.has(name)) {
							visibleNames.delete(name);
							changed = true;
						}
					}
					if (changed) visibleNames = new Set(visibleNames);
				},
				{rootMargin: '-56px 0px 0px 0px', threshold: 0}
			);
			for (const el of node.querySelectorAll<HTMLElement>('[data-fn-anchor]')) {
				obs.observe(el);
			}
		}

		reconnect();
		return {
			update: (_p: unknown) => requestAnimationFrame(reconnect),
			destroy: () => obs?.disconnect(),
		};
	}

	// Center sidebar on first visible function when visible set changes
	$effect(() => {
		if (sidebarNav && visibleNames.size > 0) {
			const first = flat.find(({fn}) => visibleNames.has(fn.name));
			if (first) centerNavOn(sidebarNav, first.fn.name);
		}
	});

	// Center drawer on first visible function when visible set changes
	$effect(() => {
		if (drawerNav && visibleNames.size > 0) {
			const first = flat.find(({fn}) => visibleNames.has(fn.name));
			if (first) centerNavOn(drawerNav, first.fn.name);
		}
	});
</script>

<div class="flex items-start gap-8">
	<!-- Sidebar: search + category/function nav -->
	<aside class="sticky top-14 hidden w-64 shrink-0 flex-col md:flex" style="max-height: calc(100vh - 3.5rem)">
		<div class="shrink-0 py-4">
			<Input
				aria-label="Search functions"
				placeholder="Search…"
				role="searchbox"
				type="search"
				bind:value={query}
			/>
		</div>
		<nav class="flex flex-1 flex-col gap-3 overflow-y-auto pb-8" bind:this={sidebarNav}>
			{#each displayed as category (category.id)}
				<div data-testid="category-nav">
					<div class="mb-1">
						<SignatureBadge
							input={category.inputType}
							output={category.outputType}
						/>
					</div>
					{#each category.functions as fn (fn.name)}
						{@const isVisible = visibleNames.has(fn.name)}
						<a
							href="#{fn.name}"
							data-nav-fn={fn.name}
							style:border-left-color={isVisible ? 'var(--color-accent)' : 'transparent'}
							class={[
								'block rounded py-0.5 pl-2.5 text-sm border-l-2',
								isVisible
									? 'bg-[--color-code-bg] text-[--color-fg]'
									: 'text-[--color-fg-muted] hover:text-[--color-fg]',
							].join(' ')}
						>
							{fn.name}
						</a>
					{/each}
				</div>
			{/each}
		</nav>
	</aside>

	<!-- All functions, one continuous list -->
	<div
		class="min-w-0 flex-1 pt-4 max-md:pb-8"
		use:observeAnchors={flat}
	>
		{#each flat as {cat, fn}, i (fn.name)}
			<div
				class="md:scroll-mt-14"
				id={fn.name}
				data-fn-anchor
			>
				{#if i > 0}
					<Separator.Root class="mb-10" />
				{/if}
				<FunctionDoc
					{commitHash}
					{fn}
					inputType={cat.inputType}
					outputType={cat.outputType}
				/>
			</div>
		{/each}
	</div>
</div>

<!-- Mobile: search + nav button toolbar (sits above the main site nav) -->
<div
	class="fixed bottom-14 left-0 right-0 z-30 flex h-14 items-center gap-3 border-t border-[--color-border] px-4 md:hidden"
	style="background-color: var(--color-bg)"
>
	<div class="min-w-0 flex-1">
		<Input
			aria-label="Search functions"
			placeholder="Search…"
			type="search"
			bind:value={query}
		/>
	</div>
	<button
		aria-label={mobileNavOpen ? 'Close function navigation' : 'Open function navigation'}
		class="shrink-0 rounded-md p-2 text-[--color-fg-muted] transition-colors hover:text-[--color-fg]"
		onclick={() => { mobileNavOpen = !mobileNavOpen; }}
	>
		{#if mobileNavOpen}
			<X size={20} />
		{:else}
			<Hash size={20} />
		{/if}
	</button>
</div>

<!-- Mobile nav drawer backdrop -->
{#if mobileNavOpen}
	<div
		aria-hidden="true"
		class="fixed bottom-28 left-0 right-0 top-0 z-40 md:hidden"
		style="background-color: rgb(0 0 0 / 0.3)"
		onclick={() => { mobileNavOpen = false; }}
		transition:fade={{duration: 150}}
	></div>
{/if}

<!-- Mobile nav drawer: sits flush above the search toolbar, slides in from right -->
{#if mobileNavOpen}
	<div
		class="fixed bottom-28 right-0 top-0 z-50 flex w-72 flex-col border-l border-[--color-border] md:hidden"
		style="background-color: var(--color-bg)"
		in:fly={{x: 288, duration: 250, easing: cubicOut}}
		out:fly={{x: 288, duration: 200, easing: cubicOut}}
	>
		<nav
			class="flex flex-1 flex-col overflow-y-auto overscroll-contain touch-pan-y"
			data-testid="drawer-nav"
			bind:this={drawerNav}
		>
			<div class="flex flex-col gap-3 p-4">
			{#each displayed as category (category.id)}
				<div>
					<div class="mb-1">
						<SignatureBadge
							input={category.inputType}
							output={category.outputType}
						/>
					</div>
					{#each category.functions as fn (fn.name)}
						{@const isVisible = visibleNames.has(fn.name)}
						<a
							href="#{fn.name}"
							data-nav-fn={fn.name}
							onclick={() => { mobileNavOpen = false; }}
							style:border-left-color={isVisible ? 'var(--color-accent)' : 'transparent'}
							class={[
								'block rounded py-0.5 pl-2.5 text-sm border-l-2',
								isVisible
									? 'bg-[--color-code-bg] text-[--color-fg]'
									: 'text-[--color-fg-muted] hover:text-[--color-fg]',
							].join(' ')}
						>
							{fn.name}
						</a>
					{/each}
				</div>
			{/each}
			</div>
		</nav>
	</div>
{/if}

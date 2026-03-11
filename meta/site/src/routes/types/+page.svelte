<script lang='ts'>
	import {Hash, X} from '@lucide/svelte';
	import {cubicOut} from 'svelte/easing';
	import {fade, fly} from 'svelte/transition';

	import type {TypeDef} from '@datakit/scripts/site';

	import TypeDoc from '$lib/components/TypeDoc.svelte';
	import {Input} from '$lib/components/ui/input';
	import * as Separator from '$lib/components/ui/separator';
	import type {TypeGroup} from './+page';

	interface Props {
		data: {groups: TypeGroup[]};
	}

	let {data}: Props = $props();

	let mobileNavOpen = $state(false);
	let query = $state('');

	let displayed = $derived.by(() => {
		const q = query.trim().toLowerCase();
		return data.groups
			.map(group => {
				const types = q
					? group.types.filter(type =>
							type.name.toLowerCase().includes(q)
						)
					: group.types;
				return {...group, types};
			})
			.filter(group => group.types.length > 0);
	});

	let flat = $derived(
		displayed.flatMap(group =>
			group.types.map(type => ({group, type}) as {group: TypeGroup; type: TypeDef})
		)
	);

	/* --- IntersectionObserver --- */
	let visibleNames = $state(new Set<string>());
	let sidebarNav = $state<HTMLElement | null>(null);
	let drawerNav = $state<HTMLElement | null>(null);

	// Keep highlighted item centered in the nav container — never scrolls the page
	function centerNavOn(nav: HTMLElement, typeName: string) {
		const link = nav.querySelector<HTMLElement>(`[data-nav-type="${typeName}"]`);
		if (!link) return;
		const navRect = nav.getBoundingClientRect();
		const linkRect = link.getBoundingClientRect();
		nav.scrollTop += (linkRect.top + linkRect.height / 2) - (navRect.top + navRect.height / 2);
	}

	// Svelte action: observes type-anchor divs; re-observes when flat changes (passed as param)
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
			for (const el of node.querySelectorAll<HTMLElement>('[data-type-anchor]')) {
				obs.observe(el);
			}
		}

		reconnect();
		return {
			update: (_p: unknown) => requestAnimationFrame(reconnect),
			destroy: () => obs?.disconnect(),
		};
	}

	// Center sidebar on first visible type when visible set changes
	$effect(() => {
		if (sidebarNav && visibleNames.size > 0) {
			const first = flat.find(({type}) => visibleNames.has(type.name));
			if (first) centerNavOn(sidebarNav, first.type.name);
		}
	});

	// Center drawer on first visible type when visible set changes
	$effect(() => {
		if (drawerNav && visibleNames.size > 0) {
			const first = flat.find(({type}) => visibleNames.has(type.name));
			if (first) centerNavOn(drawerNav, first.type.name);
		}
	});
</script>

<div class="flex items-start gap-8">
	<!-- Sidebar: search + group/type nav -->
	<aside class="sticky top-14 hidden w-64 shrink-0 flex-col md:flex" style="max-height: calc(100vh - 3.5rem)">
		<div class="shrink-0 py-4">
			<Input
				aria-label="Search types"
				placeholder="Search…"
				role="searchbox"
				type="search"
				bind:value={query}
			/>
		</div>
		<nav class="flex flex-1 flex-col gap-3 overflow-y-auto pb-8" bind:this={sidebarNav}>
			{#each displayed as group (group.id)}
				<div data-testid="group-nav">
					<div class="mb-1 px-1 text-xs font-semibold uppercase tracking-wide text-[--color-fg-muted]">
						<code>{group.id}</code>
					</div>
					{#each group.types as type (type.name)}
						{@const isVisible = visibleNames.has(type.name)}
						<a
							href="#{type.name}"
							data-nav-type={type.name}
							style:border-left-color={isVisible ? 'var(--color-accent)' : 'transparent'}
							class={[
								'block rounded py-0.5 pl-2.5 text-sm border-l-2',
								isVisible
									? 'bg-[--color-code-bg] text-[--color-fg]'
									: 'text-[--color-fg-muted] hover:text-[--color-fg]',
							].join(' ')}
						>
							{type.name}
						</a>
					{/each}
				</div>
			{/each}
		</nav>
	</aside>

	<!-- All types, one continuous list -->
	<div
		class="min-w-0 flex-1 pt-4 max-md:pb-8"
		use:observeAnchors={flat}
	>
		{#each flat as {type}, i (type.name)}
			<div
				class="md:scroll-mt-14"
				id={type.name}
				data-type-anchor
			>
				{#if i > 0}
					<Separator.Root class="mb-10" />
				{/if}
				<TypeDoc {type} />
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
			aria-label="Search types"
			placeholder="Search…"
			type="search"
			bind:value={query}
		/>
	</div>
	<button
		type="button"
		aria-label={mobileNavOpen ? 'Close type navigation' : 'Open type navigation'}
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
				{#each displayed as group (group.id)}
					<div>
						<div class="mb-1 px-1 text-xs font-semibold uppercase tracking-wide text-[--color-fg-muted]">
							<code>{group.id}</code>
						</div>
						{#each group.types as type (type.name)}
							{@const isVisible = visibleNames.has(type.name)}
							<a
								href="#{type.name}"
								data-nav-type={type.name}
								onclick={() => { mobileNavOpen = false; }}
								style:border-left-color={isVisible ? 'var(--color-accent)' : 'transparent'}
								class={[
									'block rounded py-0.5 pl-2.5 text-sm border-l-2',
									isVisible
										? 'bg-[--color-code-bg] text-[--color-fg]'
										: 'text-[--color-fg-muted] hover:text-[--color-fg]',
								].join(' ')}
							>
								{type.name}
							</a>
						{/each}
					</div>
				{/each}
			</div>
		</nav>
	</div>
{/if}

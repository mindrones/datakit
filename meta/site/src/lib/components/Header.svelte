<script lang="ts">
	import { Github, Menu, X } from '@lucide/svelte';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { cubicOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import ThemeToggle from './ThemeToggle.svelte';

	/* DevPicker is a dev-only tool — dynamically imported so the 20 themes +
	 * fonts data are excluded from the production bundle entirely. */
	let DevPicker: any = $state(undefined);
	if (import.meta.env.VITE_EXTRAS) {
		import('./DevPicker.svelte').then(m => { DevPicker = m.default; });
	}

	const packageLinks = [
		{ href: resolve('/tx'), label: 'tx' },
		{ href: resolve('/types'), label: 'types' },
	];

	const mobileNavLinks = [
		{ href: resolve('/'), label: 'Home' },
		...packageLinks,
	];

	let open = $state(false);

	// Sub-path after base for mobile logo, e.g. "/types" or "" on home
	let subPath = $derived(
		page.url.pathname.replace(resolve('/').replace(/\/$/, ''), '').replace(/\/$/, '')
	);

	function isActive(href: string): boolean {
		const path = page.url.pathname;
		const homeHref = resolve('/');
		if (href === homeHref) {
			return path === homeHref || path === homeHref.replace(/\/$/, '');
		}
		return path === href || path.startsWith(`${href}/`);
	}
</script>

<!-- Mobile drawer: anchored to bottom-right, grows upward, auto-sized -->
{#if open}
	<div
		aria-hidden="true"
		class="fixed inset-0 bottom-14 z-30 md:hidden"
		onclick={() => (open = false)}
		transition:fade={{ duration: 150 }}
	></div>
	<nav
		aria-label="Mobile navigation"
		class="fixed bottom-14 right-0 z-40 flex flex-col items-end gap-1 rounded-tl-xl border-l border-t border-[--color-border] p-4 md:hidden"
		style="background-color: var(--color-bg)"
		in:fly={{ x: 80, duration: 200, easing: cubicOut }}
		out:fly={{ x: 80, duration: 150, easing: cubicOut }}
	>
		{#each mobileNavLinks as { href, label }}
			<a
				class="rounded-md px-3 py-2 text-base text-[--color-fg-muted] transition-colors hover:bg-[--color-bg-subtle] hover:text-[--color-fg]"
				{href}
				onclick={() => (open = false)}
			>
				{label}
			</a>
		{/each}
	</nav>
{/if}

<header
	class="z-40 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:border-t max-md:border-[--color-border] md:sticky md:top-0 md:border-b md:border-[--color-border]"
	style="background-color: var(--color-bg);"
>
	<!-- Mobile inner row -->
	<div class="flex h-14 items-center px-4 md:hidden">
		<a
			class="flex-1 font-semibold text-[--color-fg]"
			href={resolve('/')}
		>
			@datakit{subPath}
		</a>
		<div class="flex items-center gap-1">
			{#if DevPicker}
				<DevPicker mode="font" />
				<DevPicker mode="theme" />
			{/if}
			<a
				aria-label="GitHub repository"
				class="rounded-md p-2 text-[--color-fg-muted] transition-colors hover:text-[--color-fg]"
				href="https://github.com/mindrones/datakit"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Github size={18} />
			</a>
			<ThemeToggle />
			<button
				aria-expanded={open}
				aria-label={open ? 'Close menu' : 'Open menu'}
				class="cursor-pointer rounded-md p-2 text-[--color-fg-muted] transition-colors hover:text-[--color-fg]"
				onclick={() => (open = !open)}
			>
				{#if open}
					<X size={20} />
				{:else}
					<Menu size={20} />
				{/if}
			</button>
		</div>
	</div>

	<!-- Desktop inner row -->
	<div class="mx-auto hidden h-14 w-full max-w-7xl items-center px-8 md:flex">
		<a
			class="mr-6 font-bold text-[--color-fg]"
			href={resolve('/')}
		>
			@datakit
		</a>
		<nav class="flex flex-1 items-center gap-1">
			{#each packageLinks as { href, label }}
				{@const active = isActive(href)}
				<a
					aria-current={active ? 'page' : undefined}
					class="rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-[--color-bg-subtle] {active
						? 'font-semibold text-[--color-fg]'
						: 'text-[--color-fg-muted] hover:text-[--color-fg]'}"
					{href}
				>
					{#if active}/{/if}{label}
				</a>
			{/each}
		</nav>
		<div class="flex-1"></div>
		{#if DevPicker}
			<DevPicker mode="font" openUp={false} />
			<DevPicker mode="theme" openUp={false} />
		{/if}
		<a
			aria-label="GitHub repository"
			class="rounded-md p-2 text-[--color-fg-muted] transition-colors hover:text-[--color-fg]"
			href="https://github.com/mindrones/datakit"
			rel="noopener noreferrer"
			target="_blank"
		>
			<Github size={18} />
		</a>
		<ThemeToggle />
	</div>
</header>

<script lang="ts">
	import { onMount } from 'svelte';

	import { fonts, themes } from '$lib/themes.dev';
	import { fontState, themeState } from '$lib/stores/devPickerState.svelte';

	type Props = {
		mode: 'font' | 'theme';
		openUp?: boolean;
	};

	let { mode, openUp = true }: Props = $props();

	let open = $state(false);

	const isFont       = $derived(mode === 'font');

	/* ── derived shorthands ─────────────────────────────────── */
	const pickerState  = $derived(isFont ? fontState  : themeState);
	const items        = $derived(isFont ? fonts       : themes);

	function handleKeydown(event: KeyboardEvent) {
		const key = event.key;

		/* number keys 0–9: move current item to position */
		if (/^[0-9]$/.test(key)) {
			event.preventDefault();
			const target = key === '0' ? 9 : parseInt(key) - 1; // 1-indexed → 0-indexed (0 = pos 10)
			pickerState.moveToPos(target);
			return;
		}

		/* + / = → shift item forward one position (higher index = later in list) */
		if (key === '+' || key === '=') {
			event.preventDefault();
			pickerState.shiftPos(1);
			return;
		}

		/* - → shift item backward one position */
		if (key === '-') {
			event.preventDefault();
			pickerState.shiftPos(-1);
			return;
		}

		/* Backspace → demote to end */
		if (key === 'Backspace') {
			event.preventDefault();
			pickerState.demote();
			return;
		}

		/* Arrow keys */
		if (open) {
			/* 2-column grid navigation when panel is open */
			const col = pickerState.activePos % 2;
			if (key === 'ArrowRight') {
				event.preventDefault();
				if (col === 0 && pickerState.activePos + 1 < items.length) pickerState.selectPos(pickerState.activePos + 1);
			} else if (key === 'ArrowLeft') {
				event.preventDefault();
				if (col === 1) pickerState.selectPos(pickerState.activePos - 1);
			} else if (key === 'ArrowDown') {
				event.preventDefault();
				if (pickerState.activePos + 2 < items.length) pickerState.selectPos(pickerState.activePos + 2);
			} else if (key === 'ArrowUp') {
				event.preventDefault();
				if (pickerState.activePos - 2 >= 0) pickerState.selectPos(pickerState.activePos - 2);
			} else if (key === 'Escape') {
				open = false;
			}
		} else {
			/* sequential step when panel is closed */
			if (key === 'ArrowRight' || key === 'ArrowDown') {
				event.preventDefault();
				pickerState.stepPos(1);
			} else if (key === 'ArrowLeft' || key === 'ArrowUp') {
				event.preventDefault();
				pickerState.stepPos(-1);
			}
		}
	}

	onMount(() => {
		pickerState.init();
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	onkeydown={handleKeydown}
	style="
		position: relative;
		font-family: system-ui, sans-serif;
		font-size: 12px;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	"
>
	<!-- Toggle button -->
	<button
		aria-label="Toggle {mode} picker"
		onclick={() => (open = !open)}
		style="
			display: flex;
			align-items: center;
			gap: 6px;
			padding: 6px 10px;
			background: #1a1a2e;
			color: #e0e0ff;
			border: 1px solid #444;
			border-radius: 8px;
			cursor: pointer;
			font-size: 12px;
			font-family: inherit;
			letter-spacing: 0.03em;
			box-shadow: 0 2px 8px rgba(0,0,0,0.4);
		"
	>
		{#if isFont}
			<!-- Font mode: "Aa" in the active font face -->
			{@const af = fontState.activeFont}
			<span style="font-weight: 700; font-size: 14px; font-family: {af.family};">Aa</span>
			<span style="font-family: {af.family}; max-width: 96px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; opacity: 0.85; font-size: 11px;">
				{af.label}
			</span>
		{:else}
			<!-- Theme mode: accent swatch (light | dark halves) -->
			{@const ap = themeState.activePair}
			<span style="
				display: inline-flex;
				border-radius: 3px;
				overflow: hidden;
				width: 18px;
				height: 14px;
				border: 1px solid rgba(255,255,255,0.15);
				flex-shrink: 0;
			">
				<span style="flex:1; background: {ap.light.vars['color-accent']};"></span>
				<span style="flex:1; background: {ap.dark.vars['color-accent']};"></span>
			</span>
			<span>{ap.label}</span>
			<span style="opacity:0.5; font-size:10px;">{themeState.isDark ? '🌙' : '☀️'}</span>
		{/if}
		<span style="opacity:0.4; font-size:10px;">{open ? '▼' : '▲'}</span>
	</button>

	<!-- Panel -->
	{#if open}
		<div
			style="
				position: absolute;
				{openUp ? 'bottom: calc(100% + 6px)' : 'top: calc(100% + 6px)'};
				right: 0;
				width: 340px;
				max-height: 500px;
				overflow-y: auto;
				background: #0f0f1a;
				border: 1px solid #2a2a3a;
				border-radius: 10px;
				box-shadow: 0 8px 32px rgba(0,0,0,0.6);
				padding: 10px;
				z-index: 100;
			"
		>
			<!-- Panel header -->
			<div style="
				color: #666;
				font-size: 10px;
				letter-spacing: 0.1em;
				padding: 4px 6px 8px;
				text-transform: uppercase;
				display: flex;
				justify-content: space-between;
				align-items: center;
			">
				{#if isFont}
					<span>Font</span>
					<span style="font-size:10px; color: #555;">click to select · ←→ navigate · ⌫ demote · 1-9 reorder</span>
				{:else}
					<span>Theme</span>
					<span style="font-size:10px; color: #555;">click once = light · again = dark</span>
				{/if}
			</div>

			<!-- 2-column grid of items -->
			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px;">
				{#if isFont}
					{#each fontState.order as origIdx, pos}
						{@const font    = fonts[origIdx]}
						{@const isActive = pos === fontState.activePos}
						<button
							onclick={() => fontState.selectPos(pos)}
							style="
								display: flex;
								align-items: center;
								gap: 6px;
								padding: 8px 10px;
								background: {isActive ? '#1e1e3a' : '#161622'};
								border: 1px solid {isActive ? '#5566cc' : '#2a2a3a'};
								border-radius: 6px;
								cursor: pointer;
								text-align: left;
							"
						>
							<span style="
								color: #aaa;
								font-size: 9px;
								min-width: 14px;
								font-family: monospace;
							">{pos + 1}</span>
							<span style="
								font-family: {font.family};
								font-size: 18px;
								font-weight: 700;
								color: {isActive ? '#fff' : '#bbb'};
								line-height: 1;
								flex-shrink: 0;
							">Aa</span>
							<span style="
								font-family: {font.family};
								font-size: 11px;
								color: {isActive ? '#e0e0ff' : '#888'};
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							">{font.label}</span>
						</button>
					{/each}
				{:else}
					{#each themeState.order as origIdx, pos}
						{@const pair     = themes[origIdx]}
						{@const isActive  = pos === themeState.activePos}
						{@const lightBg     = pair.light.vars['color-bg']}
						{@const darkBg      = pair.dark.vars['color-bg']}
						{@const lightAccent = pair.light.vars['color-accent']}
						{@const darkAccent  = pair.dark.vars['color-accent']}
						<button
							onclick={() => themeState.selectPos(pos)}
							style="
								display: flex;
								align-items: center;
								gap: 6px;
								padding: 6px 8px;
								background: {isActive ? '#1e1e3a' : '#161622'};
								border: 1px solid {isActive ? '#5566cc' : '#2a2a3a'};
								border-radius: 6px;
								cursor: pointer;
								text-align: left;
							"
						>
							<span style="color: #aaa; font-size: 9px; min-width: 14px; font-family: monospace;">{pos + 1}</span>
							<!-- bg swatch -->
							<span style="
								display: inline-flex;
								border-radius: 3px;
								overflow: hidden;
								width: 24px;
								height: 18px;
								border: 1px solid rgba(255,255,255,0.1);
								flex-shrink: 0;
							">
								<span style="flex:1; background: {lightBg};"></span>
								<span style="flex:1; background: {darkBg};"></span>
							</span>
							<!-- accent swatch -->
							<span style="
								display: inline-flex;
								border-radius: 3px;
								overflow: hidden;
								width: 24px;
								height: 18px;
								border: 1px solid rgba(255,255,255,0.1);
								flex-shrink: 0;
							">
								<span style="flex:1; background: {lightAccent};"></span>
								<span style="flex:1; background: {darkAccent};"></span>
							</span>
							<span style="
								color: {isActive ? '#e0e0ff' : '#888'};
								font-size: 11px;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							">{pair.label}</span>
						</button>
					{/each}
				{/if}
			</div>
		</div>
	{/if}
</div>

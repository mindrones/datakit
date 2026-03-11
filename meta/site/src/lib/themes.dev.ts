import type { ThemePair, ThemeVariant } from './themes';

/* ─────────────────────────────────────────────
   Helper — builds a ThemeVariant from key values
───────────────────────────────────────────── */

type VariantOpts = {
	accent: string;
	accentFg: string;
	bg: string;
	bgSubtle: string;
	bodyFont: string;
	border: string;
	codeBg: string;
	dark: boolean;
	fg: string;
	fgMuted: string;
	radius: string;
};

function mkVariant(opts: VariantOpts): ThemeVariant {
	/* Shadcn --border / --input are used by components like Separator and Input.
	 * In dark variants we want them to be a light alpha overlay (so they read as
	 * subtle lines on any dark background) rather than a hard theme colour.
	 * --color-border keeps the solid themed colour for our custom components. */
	const shadcnBorder = opts.dark ? 'oklch(1 0 0 / 22%)' : opts.border;
	const shadcnInput  = opts.dark ? 'oklch(1 0 0 / 28%)' : opts.border;

	return {
		bodyFont: opts.bodyFont,
		dark: opts.dark,
		vars: {
			'color-accent': opts.accent,
			'color-accent-fg': opts.accentFg,
			'color-bg': opts.bg,
			'color-bg-subtle': opts.bgSubtle,
			'color-border': opts.border,
			'color-code-bg': opts.codeBg,
			'color-fg': opts.fg,
			'color-fg-muted': opts.fgMuted,
			background: opts.bg,
			border: shadcnBorder,
			foreground: opts.fg,
			input: shadcnInput,
			muted: opts.bgSubtle,
			'muted-foreground': opts.fgMuted,
			primary: opts.accent,
			'primary-foreground': opts.accentFg,
			radius: opts.radius,
			ring: opts.accent,
			secondary: opts.bgSubtle,
			'secondary-foreground': opts.fg,
		},
	};
}

/* ─────────────────────────────────────────────
   20 paired themes — each has a light and dark
   variant sharing the same font and personality.
   All fonts are open-source (SIL OFL) from
   Google Fonts.
───────────────────────────────────────────── */

export const themes: ThemePair[] = [
	// 1. Arctic — Inter — clean blue (default)
	{
		id: 'arctic',
		label: 'Arctic',
		light: mkVariant({
			dark: false,
			bodyFont: "'Inter', sans-serif",
			accent: 'oklch(0.52 0.22 255)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(1 0 0)',
			bgSubtle: 'oklch(0.97 0.005 240)',
			border: 'oklch(0.9 0 0)',
			codeBg: 'oklch(0.96 0 0)',
			fg: 'oklch(0.15 0 0)',
			fgMuted: 'oklch(0.5 0 0)',
			radius: '0.375rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'Inter', sans-serif",
			accent: 'oklch(0.65 0.25 255)',
			accentFg: 'oklch(0.08 0 0)',
			bg: 'oklch(0.09 0.025 255)',
			bgSubtle: 'oklch(0.14 0.025 255)',
			border: 'oklch(0.22 0.04 255)',
			codeBg: 'oklch(0.07 0.025 255)',
			fg: 'oklch(0.92 0.01 220)',
			fgMuted: 'oklch(0.65 0.015 220)',
			radius: '0.375rem',
		}),
	},

	// 2. Graphite — Outfit — neutral teal
	{
		id: 'graphite',
		label: 'Graphite',
		light: mkVariant({
			dark: false,
			bodyFont: "'Outfit', sans-serif",
			accent: 'oklch(0.55 0.14 185)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.98 0 0)',
			bgSubtle: 'oklch(0.94 0 0)',
			border: 'oklch(0.87 0 0)',
			codeBg: 'oklch(0.94 0 0)',
			fg: 'oklch(0.18 0 0)',
			fgMuted: 'oklch(0.52 0 0)',
			radius: '0.5rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'Outfit', sans-serif",
			accent: 'oklch(0.68 0.16 190)',
			accentFg: 'oklch(0.08 0 0)',
			bg: 'oklch(0.14 0 0)',
			bgSubtle: 'oklch(0.19 0 0)',
			border: 'oklch(0.4 0 0)',
			codeBg: 'oklch(0.12 0 0)',
			fg: 'oklch(0.88 0 0)',
			fgMuted: 'oklch(0.6 0 0)',
			radius: '0.5rem',
		}),
	},

	// 2. Nordic — Space Grotesk — terracotta & teal
	{
		id: 'nordic',
		label: 'Nordic',
		light: mkVariant({
			dark: false,
			bodyFont: "'Space Grotesk', sans-serif",
			accent: 'oklch(0.48 0.18 190)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.97 0.02 55)',
			bgSubtle: 'oklch(0.93 0.024 55)',
			border: 'oklch(0.86 0.026 55)',
			codeBg: 'oklch(0.93 0.024 55)',
			fg: 'oklch(0.17 0.02 55)',
			fgMuted: 'oklch(0.5 0.02 58)',
			radius: '0.5rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'Space Grotesk', sans-serif",
			accent: 'oklch(0.68 0.2 190)',
			accentFg: 'oklch(0.08 0 0)',
			bg: 'oklch(0.1 0.025 55)',
			bgSubtle: 'oklch(0.15 0.025 55)',
			border: 'oklch(0.26 0.035 55)',
			codeBg: 'oklch(0.08 0.025 55)',
			fg: 'oklch(0.9 0.015 60)',
			fgMuted: 'oklch(0.63 0.015 58)',
			radius: '0.5rem',
		}),
	},

	// 3. Sepia — Merriweather — warm serif
	{
		id: 'sepia',
		label: 'Sepia',
		light: mkVariant({
			dark: false,
			bodyFont: "'Merriweather', Georgia, serif",
			accent: 'oklch(0.52 0.18 38)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.97 0.02 85)',
			bgSubtle: 'oklch(0.93 0.025 85)',
			border: 'oklch(0.85 0.025 85)',
			codeBg: 'oklch(0.92 0.022 85)',
			fg: 'oklch(0.16 0.02 60)',
			fgMuted: 'oklch(0.46 0.025 70)',
			radius: '0.25rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'Merriweather', Georgia, serif",
			accent: 'oklch(0.72 0.14 75)',
			accentFg: 'oklch(0.1 0 0)',
			bg: 'oklch(0.1 0.03 55)',
			bgSubtle: 'oklch(0.15 0.03 55)',
			border: 'oklch(0.26 0.04 55)',
			codeBg: 'oklch(0.08 0.03 55)',
			fg: 'oklch(0.9 0.02 82)',
			fgMuted: 'oklch(0.65 0.02 80)',
			radius: '0.25rem',
		}),
	},

	// 4. Broadsheet — Playfair Display — editorial
	{
		id: 'broadsheet',
		label: 'Broadsheet',
		light: mkVariant({
			dark: false,
			bodyFont: "'Playfair Display', Georgia, serif",
			accent: 'oklch(0.45 0.22 25)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.99 0.003 90)',
			bgSubtle: 'oklch(0.96 0.005 90)',
			border: 'oklch(0.85 0.006 90)',
			codeBg: 'oklch(0.94 0.005 90)',
			fg: 'oklch(0.08 0 0)',
			fgMuted: 'oklch(0.45 0.01 0)',
			radius: '0rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'Playfair Display', Georgia, serif",
			accent: 'oklch(0.78 0.13 88)',
			accentFg: 'oklch(0.1 0 0)',
			bg: 'oklch(0.08 0 0)',
			bgSubtle: 'oklch(0.13 0 0)',
			border: 'oklch(0.25 0 0)',
			codeBg: 'oklch(0.07 0 0)',
			fg: 'oklch(0.9 0.015 88)',
			fgMuted: 'oklch(0.65 0.01 85)',
			radius: '0rem',
		}),
	},

	// 5. Sakura — Plus Jakarta Sans — rose/pink
	{
		id: 'sakura',
		label: 'Sakura',
		light: mkVariant({
			dark: false,
			bodyFont: "'Plus Jakarta Sans', sans-serif",
			accent: 'oklch(0.62 0.18 355)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.99 0.008 5)',
			bgSubtle: 'oklch(0.96 0.012 355)',
			border: 'oklch(0.9 0.015 355)',
			codeBg: 'oklch(0.95 0.01 0)',
			fg: 'oklch(0.2 0.03 320)',
			fgMuted: 'oklch(0.5 0.04 320)',
			radius: '0.75rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'Plus Jakarta Sans', sans-serif",
			accent: 'oklch(0.7 0.2 355)',
			accentFg: 'oklch(0.08 0 0)',
			bg: 'oklch(0.12 0.04 325)',
			bgSubtle: 'oklch(0.17 0.04 325)',
			border: 'oklch(0.27 0.05 325)',
			codeBg: 'oklch(0.1 0.04 325)',
			fg: 'oklch(0.93 0.012 350)',
			fgMuted: 'oklch(0.65 0.025 340)',
			radius: '0.75rem',
		}),
	},

	// 6. Corporate — IBM Plex Sans — crimson authority
	{
		id: 'corporate',
		label: 'Corporate',
		light: mkVariant({
			dark: false,
			bodyFont: "'IBM Plex Sans', sans-serif",
			accent: 'oklch(0.44 0.24 16)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.99 0.006 12)',
			bgSubtle: 'oklch(0.95 0.01 12)',
			border: 'oklch(0.88 0.014 12)',
			codeBg: 'oklch(0.95 0.01 12)',
			fg: 'oklch(0.15 0.01 15)',
			fgMuted: 'oklch(0.48 0.015 15)',
			radius: '0.25rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'IBM Plex Sans', sans-serif",
			accent: 'oklch(0.62 0.24 16)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.1 0.03 12)',
			bgSubtle: 'oklch(0.15 0.03 12)',
			border: 'oklch(0.26 0.045 12)',
			codeBg: 'oklch(0.08 0.03 12)',
			fg: 'oklch(0.92 0.01 20)',
			fgMuted: 'oklch(0.65 0.015 18)',
			radius: '0.25rem',
		}),
	},

	// 7. Dune — DM Sans — sand/amber
	{
		id: 'dune',
		label: 'Dune',
		light: mkVariant({
			dark: false,
			bodyFont: "'DM Sans', sans-serif",
			accent: 'oklch(0.65 0.14 72)',
			accentFg: 'oklch(0.1 0 0)',
			bg: 'oklch(0.98 0.015 88)',
			bgSubtle: 'oklch(0.94 0.018 88)',
			border: 'oklch(0.86 0.02 88)',
			codeBg: 'oklch(0.92 0.018 88)',
			fg: 'oklch(0.16 0.02 60)',
			fgMuted: 'oklch(0.48 0.025 70)',
			radius: '0.5rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'DM Sans', sans-serif",
			accent: 'oklch(0.75 0.14 80)',
			accentFg: 'oklch(0.1 0 0)',
			bg: 'oklch(0.1 0.04 62)',
			bgSubtle: 'oklch(0.15 0.04 62)',
			border: 'oklch(0.27 0.045 62)',
			codeBg: 'oklch(0.08 0.04 62)',
			fg: 'oklch(0.9 0.02 82)',
			fgMuted: 'oklch(0.65 0.02 80)',
			radius: '0.5rem',
		}),
	},

	// 8. Blueprint — IBM Plex Mono — technical
	{
		id: 'blueprint',
		label: 'Blueprint',
		light: mkVariant({
			dark: false,
			bodyFont: "'IBM Plex Mono', monospace",
			accent: 'oklch(0.55 0.14 200)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.97 0.008 210)',
			bgSubtle: 'oklch(0.93 0.01 210)',
			border: 'oklch(0.85 0.015 210)',
			codeBg: 'oklch(0.92 0.01 210)',
			fg: 'oklch(0.18 0.03 240)',
			fgMuted: 'oklch(0.5 0.03 240)',
			radius: '0.125rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'IBM Plex Mono', monospace",
			accent: 'oklch(0.72 0.16 200)',
			accentFg: 'oklch(0.1 0 0)',
			bg: 'oklch(0.12 0.04 245)',
			bgSubtle: 'oklch(0.17 0.04 245)',
			border: 'oklch(0.28 0.05 245)',
			codeBg: 'oklch(0.09 0.04 245)',
			fg: 'oklch(0.88 0.03 210)',
			fgMuted: 'oklch(0.62 0.03 210)',
			radius: '0.125rem',
		}),
	},

	// 9. Heritage — Libre Baskerville — classic serif
	{
		id: 'heritage',
		label: 'Heritage',
		light: mkVariant({
			dark: false,
			bodyFont: "'Libre Baskerville', Georgia, serif",
			accent: 'oklch(0.4 0.19 22)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.98 0.015 95)',
			bgSubtle: 'oklch(0.94 0.018 95)',
			border: 'oklch(0.86 0.018 92)',
			codeBg: 'oklch(0.93 0.016 95)',
			fg: 'oklch(0.14 0.01 60)',
			fgMuted: 'oklch(0.46 0.015 55)',
			radius: '0.125rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'Libre Baskerville', Georgia, serif",
			accent: 'oklch(0.78 0.13 86)',
			accentFg: 'oklch(0.1 0 0)',
			bg: 'oklch(0.12 0.025 58)',
			bgSubtle: 'oklch(0.17 0.025 58)',
			border: 'oklch(0.28 0.03 58)',
			codeBg: 'oklch(0.1 0.025 58)',
			fg: 'oklch(0.9 0.02 82)',
			fgMuted: 'oklch(0.65 0.02 80)',
			radius: '0.125rem',
		}),
	},

	// 10. Solarized — Source Code Pro — developer classic
	{
		id: 'solarized',
		label: 'Solarized',
		light: mkVariant({
			dark: false,
			bodyFont: "'Source Code Pro', monospace",
			accent: 'oklch(0.52 0.12 220)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.96 0.022 96)',
			bgSubtle: 'oklch(0.92 0.025 96)',
			border: 'oklch(0.82 0.025 96)',
			codeBg: 'oklch(0.92 0.022 96)',
			fg: 'oklch(0.35 0.04 210)',
			fgMuted: 'oklch(0.52 0.04 200)',
			radius: '0.25rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'Source Code Pro', monospace",
			accent: 'oklch(0.72 0.1 220)',
			accentFg: 'oklch(0.15 0 0)',
			bg: 'oklch(0.19 0.04 210)',
			bgSubtle: 'oklch(0.23 0.04 210)',
			border: 'oklch(0.35 0.045 210)',
			codeBg: 'oklch(0.16 0.04 210)',
			fg: 'oklch(0.62 0.04 195)',
			fgMuted: 'oklch(0.5 0.04 205)',
			radius: '0.25rem',
		}),
	},

	// 12. Mint — JetBrains Mono — green terminal
	{
		id: 'mint',
		label: 'Mint',
		light: mkVariant({
			dark: false,
			bodyFont: "'JetBrains Mono', monospace",
			accent: 'oklch(0.52 0.18 148)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.97 0.015 158)',
			bgSubtle: 'oklch(0.93 0.018 155)',
			border: 'oklch(0.85 0.025 155)',
			codeBg: 'oklch(0.92 0.018 155)',
			fg: 'oklch(0.16 0.04 155)',
			fgMuted: 'oklch(0.48 0.05 150)',
			radius: '0.25rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'JetBrains Mono', monospace",
			accent: 'oklch(0.78 0.24 145)',
			accentFg: 'oklch(0.07 0.02 145)',
			bg: 'oklch(0.09 0.03 150)',
			bgSubtle: 'oklch(0.12 0.03 150)',
			border: 'oklch(0.24 0.1 148)',
			codeBg: 'oklch(0.07 0.03 150)',
			fg: 'oklch(0.75 0.2 145)',
			fgMuted: 'oklch(0.55 0.14 148)',
			radius: '0.25rem',
		}),
	},

	// 13. Typewriter — Courier Prime — vintage code
	{
		id: 'typewriter',
		label: 'Typewriter',
		light: mkVariant({
			dark: false,
			bodyFont: "'Courier Prime', 'Courier New', monospace",
			accent: 'oklch(0.35 0.04 90)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.97 0.01 90)',
			bgSubtle: 'oklch(0.93 0.012 90)',
			border: 'oklch(0.82 0.015 90)',
			codeBg: 'oklch(0.93 0.012 90)',
			fg: 'oklch(0.15 0.01 90)',
			fgMuted: 'oklch(0.46 0.015 88)',
			radius: '0rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'Courier Prime', 'Courier New', monospace",
			accent: 'oklch(0.8 0.28 140)',
			accentFg: 'oklch(0.06 0.02 140)',
			bg: 'oklch(0.07 0.02 140)',
			bgSubtle: 'oklch(0.1 0.02 140)',
			border: 'oklch(0.22 0.1 140)',
			codeBg: 'oklch(0.06 0.02 140)',
			fg: 'oklch(0.7 0.2 142)',
			fgMuted: 'oklch(0.5 0.14 142)',
			radius: '0rem',
		}),
	},

	// 14. Lagoon — Nunito — aqua/teal
	{
		id: 'lagoon',
		label: 'Lagoon',
		light: mkVariant({
			dark: false,
			bodyFont: "'Nunito', sans-serif",
			accent: 'oklch(0.52 0.14 190)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.97 0.015 195)',
			bgSubtle: 'oklch(0.93 0.018 193)',
			border: 'oklch(0.85 0.022 192)',
			codeBg: 'oklch(0.93 0.018 193)',
			fg: 'oklch(0.18 0.04 195)',
			fgMuted: 'oklch(0.5 0.04 190)',
			radius: '0.75rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'Nunito', sans-serif",
			accent: 'oklch(0.66 0.16 192)',
			accentFg: 'oklch(0.08 0 0)',
			bg: 'oklch(0.11 0.03 190)',
			bgSubtle: 'oklch(0.16 0.032 190)',
			border: 'oklch(0.27 0.045 190)',
			codeBg: 'oklch(0.09 0.03 190)',
			fg: 'oklch(0.92 0.015 185)',
			fgMuted: 'oklch(0.65 0.02 186)',
			radius: '0.75rem',
		}),
	},

	// 15. Cyber — Orbitron — futuristic hot pink
	{
		id: 'cyber',
		label: 'Cyber',
		light: mkVariant({
			dark: false,
			bodyFont: "'Orbitron', sans-serif",
			accent: 'oklch(0.58 0.28 345)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.97 0.005 300)',
			bgSubtle: 'oklch(0.93 0.008 300)',
			border: 'oklch(0.86 0.014 300)',
			codeBg: 'oklch(0.92 0.01 300)',
			fg: 'oklch(0.15 0.02 285)',
			fgMuted: 'oklch(0.48 0.03 290)',
			radius: '0rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'Orbitron', sans-serif",
			accent: 'oklch(0.68 0.3 345)',
			accentFg: 'oklch(0.08 0 0)',
			bg: 'oklch(0.1 0.03 285)',
			bgSubtle: 'oklch(0.14 0.03 285)',
			border: 'oklch(0.25 0.08 285)',
			codeBg: 'oklch(0.08 0.03 285)',
			fg: 'oklch(0.94 0.01 0)',
			fgMuted: 'oklch(0.65 0.02 320)',
			radius: '0rem',
		}),
	},

	// 16. Prism — Sora — electric chartreuse
	{
		id: 'prism',
		label: 'Prism',
		light: mkVariant({
			dark: false,
			bodyFont: "'Sora', sans-serif",
			accent: 'oklch(0.55 0.2 122)',
			accentFg: 'oklch(0.08 0 0)',
			bg: 'oklch(0.98 0.016 118)',
			bgSubtle: 'oklch(0.94 0.02 116)',
			border: 'oklch(0.87 0.022 116)',
			codeBg: 'oklch(0.94 0.02 116)',
			fg: 'oklch(0.15 0.025 120)',
			fgMuted: 'oklch(0.48 0.03 122)',
			radius: '0.625rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'Sora', sans-serif",
			accent: 'oklch(0.75 0.24 122)',
			accentFg: 'oklch(0.07 0 0)',
			bg: 'oklch(0.09 0.025 125)',
			bgSubtle: 'oklch(0.14 0.028 123)',
			border: 'oklch(0.25 0.05 122)',
			codeBg: 'oklch(0.07 0.025 125)',
			fg: 'oklch(0.92 0.02 118)',
			fgMuted: 'oklch(0.65 0.03 120)',
			radius: '0.625rem',
		}),
	},

	// 17. Cascade — Raleway — indigo/purple
	{
		id: 'cascade',
		label: 'Cascade',
		light: mkVariant({
			dark: false,
			bodyFont: "'Raleway', sans-serif",
			accent: 'oklch(0.5 0.18 295)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.97 0.014 295)',
			bgSubtle: 'oklch(0.93 0.018 293)',
			border: 'oklch(0.86 0.024 293)',
			codeBg: 'oklch(0.93 0.018 293)',
			fg: 'oklch(0.18 0.04 295)',
			fgMuted: 'oklch(0.5 0.035 293)',
			radius: '0.625rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'Raleway', sans-serif",
			accent: 'oklch(0.68 0.2 295)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.14 0.04 295)',
			bgSubtle: 'oklch(0.19 0.04 293)',
			border: 'oklch(0.28 0.055 293)',
			codeBg: 'oklch(0.12 0.04 295)',
			fg: 'oklch(0.93 0.015 285)',
			fgMuted: 'oklch(0.68 0.03 290)',
			radius: '0.625rem',
		}),
	},

	// 18. Amber — DM Serif Display — warm amber serif
	{
		id: 'amber',
		label: 'Amber',
		light: mkVariant({
			dark: false,
			bodyFont: "'DM Serif Display', Georgia, serif",
			accent: 'oklch(0.58 0.18 58)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.98 0.015 90)',
			bgSubtle: 'oklch(0.94 0.018 88)',
			border: 'oklch(0.87 0.02 88)',
			codeBg: 'oklch(0.94 0.018 88)',
			fg: 'oklch(0.16 0.02 62)',
			fgMuted: 'oklch(0.48 0.025 68)',
			radius: '0.25rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'DM Serif Display', Georgia, serif",
			accent: 'oklch(0.73 0.18 65)',
			accentFg: 'oklch(0.1 0 0)',
			bg: 'oklch(0.1 0.04 62)',
			bgSubtle: 'oklch(0.15 0.04 62)',
			border: 'oklch(0.27 0.05 62)',
			codeBg: 'oklch(0.08 0.04 62)',
			fg: 'oklch(0.88 0.04 82)',
			fgMuted: 'oklch(0.62 0.04 80)',
			radius: '0.25rem',
		}),
	},

	// 19. Phosphor — Fira Code — tech orange
	{
		id: 'phosphor',
		label: 'Phosphor',
		light: mkVariant({
			dark: false,
			bodyFont: "'Fira Code', monospace",
			accent: 'oklch(0.62 0.18 52)',
			accentFg: 'oklch(0.08 0 0)',
			bg: 'oklch(0.97 0 0)',
			bgSubtle: 'oklch(0.93 0 0)',
			border: 'oklch(0.87 0 0)',
			codeBg: 'oklch(0.93 0 0)',
			fg: 'oklch(0.18 0 0)',
			fgMuted: 'oklch(0.5 0 0)',
			radius: '0.25rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'Fira Code', monospace",
			accent: 'oklch(0.74 0.2 52)',
			accentFg: 'oklch(0.08 0 0)',
			bg: 'oklch(0.1 0.01 50)',
			bgSubtle: 'oklch(0.15 0.01 50)',
			border: 'oklch(0.27 0.04 52)',
			codeBg: 'oklch(0.08 0.01 50)',
			fg: 'oklch(0.9 0.01 50)',
			fgMuted: 'oklch(0.62 0.02 52)',
			radius: '0.25rem',
		}),
	},

	// 20. Coast — Manrope — modern emerald
	{
		id: 'coast',
		label: 'Coast',
		light: mkVariant({
			dark: false,
			bodyFont: "'Manrope', sans-serif",
			accent: 'oklch(0.52 0.18 152)',
			accentFg: 'oklch(1 0 0)',
			bg: 'oklch(0.97 0.012 155)',
			bgSubtle: 'oklch(0.93 0.015 153)',
			border: 'oklch(0.86 0.02 153)',
			codeBg: 'oklch(0.93 0.015 153)',
			fg: 'oklch(0.17 0.04 158)',
			fgMuted: 'oklch(0.5 0.04 153)',
			radius: '0.5rem',
		}),
		dark: mkVariant({
			dark: true,
			bodyFont: "'Manrope', sans-serif",
			accent: 'oklch(0.66 0.2 150)',
			accentFg: 'oklch(0.08 0 0)',
			bg: 'oklch(0.1 0.03 158)',
			bgSubtle: 'oklch(0.15 0.03 156)',
			border: 'oklch(0.26 0.05 155)',
			codeBg: 'oklch(0.08 0.03 158)',
			fg: 'oklch(0.9 0.02 152)',
			fgMuted: 'oklch(0.65 0.025 152)',
			radius: '0.5rem',
		}),
	},
];

/* ─────────────────────────────────────────────
   Google Fonts URL — all SIL OFL open-source
   Loaded once on first applyTheme() call.
───────────────────────────────────────────── */

const FONTS_URL = [
	'https://fonts.googleapis.com/css2?',
	'family=Courier+Prime:ital,wght@0,400;0,700;1,400',
	'&family=DM+Sans:wght@400;500;600',
	'&family=DM+Serif+Display',
	'&family=Fira+Code:wght@400;500',
	'&family=IBM+Plex+Mono:wght@400;500',
	'&family=IBM+Plex+Sans:wght@400;500;600',
	'&family=Inter:wght@400;500;600;700',
	'&family=JetBrains+Mono:wght@400;500',
	'&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400',
	'&family=Manrope:wght@400;500;600;700',
	'&family=Merriweather:ital,wght@0,400;0,700',
	'&family=Nunito:wght@400;500;600',
	'&family=Orbitron:wght@400;600',
	'&family=Outfit:wght@400;500;600',
	'&family=Playfair+Display:ital,wght@0,400;0,700;1,400',
	'&family=Plus+Jakarta+Sans:wght@400;500;600;700',
	'&family=Raleway:wght@400;500;600',
	'&family=Sora:wght@400;500;600',
	'&family=Source+Code+Pro:wght@400;500',
	'&family=Space+Grotesk:wght@400;500;600;700',
	'&display=swap',
].join('');

let fontsLoaded = false;

function loadFonts() {
	if (fontsLoaded || typeof document === 'undefined') return;
	fontsLoaded = true;

	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = FONTS_URL;
	document.head.appendChild(link);
}

/* ─────────────────────────────────────────────
   Apply a theme variant to the document (colors only)
───────────────────────────────────────────── */

export function applyTheme(pair: ThemePair, isDark: boolean) {
	loadFonts();

	const variant = isDark ? pair.dark : pair.light;

	const varLines = Object.entries(variant.vars)
		.map(([key, val]) => `\t--${key}: ${val};`)
		.join('\n');

	let styleEl = document.getElementById('theme-override') as HTMLStyleElement | null;
	if (!styleEl) {
		styleEl = document.createElement('style');
		styleEl.id = 'theme-override';
		document.head.appendChild(styleEl);
	}
	styleEl.textContent = `:root {\n${varLines}\n}`;

	document.documentElement.classList.toggle('dark', variant.dark);
}

/* ─────────────────────────────────────────────
   Fonts — all open-source SIL OFL from Google Fonts.
   "system" is the original site default.
───────────────────────────────────────────── */

export type Font = {
	family: string;
	id: string;
	label: string;
};

export const fonts: Font[] = [
	{ id: 'nunito',           label: 'Nunito',            family: "'Nunito', sans-serif" },
	{ id: 'system-mono',      label: 'System Mono',      family: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace" },
	{ id: 'inter',            label: 'Inter',             family: "'Inter', sans-serif" },
	{ id: 'manrope',          label: 'Manrope',           family: "'Manrope', sans-serif" },
	{ id: 'outfit',           label: 'Outfit',            family: "'Outfit', sans-serif" },
	{ id: 'space-grotesk',    label: 'Space Grotesk',     family: "'Space Grotesk', sans-serif" },
	{ id: 'dm-sans',          label: 'DM Sans',           family: "'DM Sans', sans-serif" },
	{ id: 'plus-jakarta',     label: 'Plus Jakarta Sans', family: "'Plus Jakarta Sans', sans-serif" },
	{ id: 'sora',             label: 'Sora',              family: "'Sora', sans-serif" },
	{ id: 'raleway',          label: 'Raleway',           family: "'Raleway', sans-serif" },
	{ id: 'ibm-plex-sans',    label: 'IBM Plex Sans',     family: "'IBM Plex Sans', sans-serif" },
	{ id: 'merriweather',     label: 'Merriweather',      family: "'Merriweather', Georgia, serif" },
	{ id: 'playfair',         label: 'Playfair Display',  family: "'Playfair Display', Georgia, serif" },
	{ id: 'libre-baskerville',label: 'Libre Baskerville', family: "'Libre Baskerville', Georgia, serif" },
	{ id: 'dm-serif',         label: 'DM Serif Display',  family: "'DM Serif Display', Georgia, serif" },
	{ id: 'orbitron',         label: 'Orbitron',          family: "'Orbitron', sans-serif" },
	{ id: 'jetbrains-mono',   label: 'JetBrains Mono',    family: "'JetBrains Mono', monospace" },
	{ id: 'ibm-plex-mono',    label: 'IBM Plex Mono',     family: "'IBM Plex Mono', monospace" },
	{ id: 'fira-code',        label: 'Fira Code',         family: "'Fira Code', monospace" },
	{ id: 'source-code-pro',  label: 'Source Code Pro',   family: "'Source Code Pro', monospace" },
	{ id: 'courier-prime',    label: 'Courier Prime',     family: "'Courier Prime', 'Courier New', monospace" },
];

export function applyFont(font: Font) {
	let styleEl = document.getElementById('font-override') as HTMLStyleElement | null;
	if (!styleEl) {
		styleEl = document.createElement('style');
		styleEl.id = 'font-override';
		document.head.appendChild(styleEl);
	}
	// Override body font; code blocks stay on font-mono via their Tailwind class
	styleEl.textContent = `body { font-family: ${font.family}; }`;
}

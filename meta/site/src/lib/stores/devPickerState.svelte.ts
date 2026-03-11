/**
 * Shared reactive state for the dev-only font and theme pickers.
 * Using a module-level singleton ensures both the mobile and desktop
 * instances of DevPicker stay in sync.
 */
import { registerOnDarkChange, setDark, theme } from '$lib/hooks/theme.svelte';
import { applyFont, applyTheme, fonts, themes } from '$lib/themes.dev';
import type { Font, ThemePair } from '$lib/themes';

// ─── Font state ───────────────────────────────────────────────────────────────

const FONT_KEY_ID    = 'dev-font-id';
const FONT_KEY_ORDER = 'dev-font-order';

let _fontInitialized = false;

// fontOrderArr[pos] = original index into fonts[]
let fontOrderArr = $state(fonts.map((_, i) => i));
let activeFontPos = $state(0);

export const fontState = {
	get order():     number[] { return fontOrderArr; },
	get activePos(): number   { return activeFontPos; },
	get activeFont(): Font    { return fonts[fontOrderArr[activeFontPos]]; },

	applyActive() {
		const f = this.activeFont;
		applyFont(f);
		localStorage.setItem(FONT_KEY_ID, f.id);
	},

	selectPos(pos: number) {
		activeFontPos = pos;
		this.applyActive();
	},

	stepPos(delta: number) {
		activeFontPos = (activeFontPos + delta + fontOrderArr.length) % fontOrderArr.length;
		this.applyActive();
	},

	/** Move current item to targetPos (0-indexed). Item stays selected; same font stays active. */
	moveToPos(targetPos: number) {
		if (targetPos === activeFontPos || targetPos < 0 || targetPos >= fontOrderArr.length) return;
		const item    = fontOrderArr[activeFontPos];
		const rebuilt = fontOrderArr.filter((_, i) => i !== activeFontPos);
		rebuilt.splice(targetPos, 0, item);
		fontOrderArr  = rebuilt;
		activeFontPos = targetPos;
		localStorage.setItem(FONT_KEY_ORDER, JSON.stringify(fontOrderArr));
	},

	/** Shift current item one step up (+1) or down (-1) in the list. */
	shiftPos(delta: number) {
		this.moveToPos(activeFontPos + delta);
	},

	/** Push current item to the end; selection follows. */
	demote() {
		const item    = fontOrderArr[activeFontPos];
		const rebuilt = fontOrderArr.filter((_, i) => i !== activeFontPos);
		rebuilt.push(item);
		fontOrderArr  = rebuilt;
		activeFontPos = Math.min(activeFontPos, fontOrderArr.length - 1);
		this.applyActive();
		localStorage.setItem(FONT_KEY_ORDER, JSON.stringify(fontOrderArr));
	},

	init() {
		if (_fontInitialized) return;
		_fontInitialized = true;

		const savedOrderRaw = localStorage.getItem(FONT_KEY_ORDER);
		const savedId       = localStorage.getItem(FONT_KEY_ID);

		if (savedOrderRaw) {
			try {
				const parsed: number[] = JSON.parse(savedOrderRaw);
				// Valid only if correct length AND Nunito (fonts[0], origIdx=0) is still at pos 0.
				// If not, the order predates the last default-promotion — reset it.
				if (Array.isArray(parsed) && parsed.length === fonts.length && parsed[0] === 0) {
					fontOrderArr = parsed;
				} else {
					localStorage.removeItem(FONT_KEY_ORDER);
				}
			} catch {
				localStorage.removeItem(FONT_KEY_ORDER);
			}
		}

		if (savedId) {
			const origIdx = fonts.findIndex(f => f.id === savedId);
			if (origIdx >= 0) {
				const pos = fontOrderArr.indexOf(origIdx);
				if (pos >= 0) activeFontPos = pos;
			}
		}

		applyFont(this.activeFont);
	},
};

// ─── Theme state ──────────────────────────────────────────────────────────────

const THEME_KEY_ID    = 'dev-theme-id';
const THEME_KEY_ORDER = 'dev-theme-order';
const THEME_KEY_DARK  = 'dev-theme-dark';

let _themeInitialized = false;

// themeOrderArr[pos] = original index into themes[]
let themeOrderArr  = $state(themes.map((_, i) => i));
let activeThemePos = $state(0);

export const themeState = {
	get order():      number[]   { return themeOrderArr; },
	get activePos():  number     { return activeThemePos; },
	get isDark():     boolean    { return theme.isDark; },
	get activePair(): ThemePair  { return themes[themeOrderArr[activeThemePos]]; },

	applyActive() {
		const p = this.activePair;
		applyTheme(p, theme.isDark);
		localStorage.setItem(THEME_KEY_ID, p.id);
		localStorage.setItem(THEME_KEY_DARK, String(theme.isDark));
	},

	selectPos(pos: number) {
		if (pos === activeThemePos) {
			setDark(!theme.isDark);
		} else {
			activeThemePos = pos;
			setDark(false);
		}
		this.applyActive();
	},

	stepPos(delta: number) {
		activeThemePos = (activeThemePos + delta + themeOrderArr.length) % themeOrderArr.length;
		setDark(false);
		this.applyActive();
	},

	/** Move current item to targetPos. Item stays selected; same theme stays active. */
	moveToPos(targetPos: number) {
		if (targetPos === activeThemePos || targetPos < 0 || targetPos >= themeOrderArr.length) return;
		const item    = themeOrderArr[activeThemePos];
		const rebuilt = themeOrderArr.filter((_, i) => i !== activeThemePos);
		rebuilt.splice(targetPos, 0, item);
		themeOrderArr  = rebuilt;
		activeThemePos = targetPos;
		localStorage.setItem(THEME_KEY_ORDER, JSON.stringify(themeOrderArr));
	},

	shiftPos(delta: number) {
		this.moveToPos(activeThemePos + delta);
	},

	demote() {
		const item    = themeOrderArr[activeThemePos];
		const rebuilt = themeOrderArr.filter((_, i) => i !== activeThemePos);
		rebuilt.push(item);
		themeOrderArr  = rebuilt;
		activeThemePos = Math.min(activeThemePos, themeOrderArr.length - 1);
		setDark(false);
		this.applyActive();
		localStorage.setItem(THEME_KEY_ORDER, JSON.stringify(themeOrderArr));
	},

	init() {
		if (_themeInitialized) return;
		_themeInitialized = true;

		/* When ThemeToggle fires, re-apply the active pair's colours with the new dark value. */
		registerOnDarkChange((dark) => {
			applyTheme(themeState.activePair, dark);
			localStorage.setItem(THEME_KEY_DARK, String(dark));
		});

		const savedOrderRaw = localStorage.getItem(THEME_KEY_ORDER);
		const savedId       = localStorage.getItem(THEME_KEY_ID);
		const savedDark     = localStorage.getItem(THEME_KEY_DARK) === 'true';

		if (savedOrderRaw) {
			try {
				const parsed: number[] = JSON.parse(savedOrderRaw);
				// Valid only if correct length AND Arctic (themes[0], origIdx=0) is at pos 0.
				if (Array.isArray(parsed) && parsed.length === themes.length && parsed[0] === 0) {
					themeOrderArr = parsed;
				} else {
					localStorage.removeItem(THEME_KEY_ORDER);
				}
			} catch {
				localStorage.removeItem(THEME_KEY_ORDER);
			}
		}

		if (savedId) {
			const origIdx = themes.findIndex(t => t.id === savedId);
			if (origIdx >= 0) {
				const pos = themeOrderArr.indexOf(origIdx);
				if (pos >= 0) activeThemePos = pos;
			}
		}

		setDark(savedDark);
		applyTheme(this.activePair, theme.isDark);
	},
};

let isDark = $state(false);

/*
 * Dev-only hook: registered by devPickerState so that when the toggle fires,
 * the active theme's CSS vars are re-applied with the new dark value.
 * In production this is never set, so it's a no-op.
 */
let _onDarkChange: ((dark: boolean) => void) | null = null;

export function registerOnDarkChange(fn: (dark: boolean) => void) {
	_onDarkChange = fn;
}

/** Update state, <html>.dark class, and the FOUC-prevention localStorage key. */
export function setDark(val: boolean) {
	isDark = val;
	document.documentElement.classList.toggle('dark', val);
	localStorage.setItem('theme', val ? 'dark' : 'light');
}

export function initTheme() {
	isDark = document.documentElement.classList.contains('dark');

	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

	function handleSystemChange(event: MediaQueryListEvent) {
		isDark = event.matches;
		document.documentElement.classList.toggle('dark', event.matches);
		localStorage.removeItem('theme');
		_onDarkChange?.(isDark);
	}

	mediaQuery.addEventListener('change', handleSystemChange);

	return () => {
		mediaQuery.removeEventListener('change', handleSystemChange);
	};
}

export function toggleTheme() {
	setDark(!isDark);
	_onDarkChange?.(isDark);
}

export const theme = {
	get isDark() { return isDark; },
	init: initTheme,
	toggle: toggleTheme,
};

/*
NOTE: the initial theme application (reading localStorage / prefers-color-scheme
and adding .dark to <html>) is intentionally kept in the inline <script> in
src/app.html. That script runs synchronously before the browser paints anything,
which prevents a flash of the wrong theme (FOUC). Any code here runs after
SvelteKit hydrates the page — already too late to avoid that flash.
The responsibilities are therefore split:
  - app.html inline script  →  apply saved/system theme before first paint
  - initTheme() here        →  read current DOM state, register OS change listener

FOUC = Flash of Unstyled Content
*/

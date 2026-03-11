/* Shared types — safe to import in production (erased at compile time). */

export type ThemeVariant = {
	bodyFont: string;
	/** Whether this variant applies `.dark` to `<html>` */
	dark: boolean;
	vars: Record<string, string>;
};

export type ThemePair = {
	id: string;
	label: string;
	light: ThemeVariant;
	dark: ThemeVariant;
};

export type Font = {
	family: string;
	id: string;
	label: string;
};

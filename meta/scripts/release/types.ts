import type {ReleaseType} from 'semver';

export type PkgName = string;

export interface MissingTag {
	file: string;
	symbol: string;
	sinceVersion: string;
}

export interface PkgRelease {
	bump: ReleaseType | string;
	displayName: string;
	newVersion: string;
	oldVersion: string;
	pkgName: PkgName;
}

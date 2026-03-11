<script lang='ts'>
	import type {PackageMeta} from '@datakit/scripts/site';

	import {resolve} from '$app/paths';
	import * as Card from '$lib/components/ui/card';

	interface Props {
		pkg: PackageMeta;
	}

	let {pkg}: Props = $props();

	// resolve() is typed for literal routes; cast to bypass the union check
	let href = $derived(resolve(pkg.route as '/'));
</script>

<a class="block" {href}>
	<Card.Root
		class="transition-colors duration-200 hover:border-[--color-accent]"
	>
		<Card.Header>
			<div class="flex items-start justify-between gap-2">
				<Card.Title class="font-mono text-base">{pkg.name}</Card.Title>
				<span
					class="shrink-0 rounded-full bg-[--color-bg-subtle] px-2 py-0.5 font-mono text-xs text-[--color-fg-muted]"
				>
					v{pkg.version}
				</span>
			</div>
		</Card.Header>

		<Card.Content>
			<p class="text-sm text-[--color-fg-muted]">{pkg.description}</p>
		</Card.Content>

		<Card.Footer>
			<span class="text-sm font-medium text-[--color-accent]">View docs →</span>
		</Card.Footer>
	</Card.Root>
</a>

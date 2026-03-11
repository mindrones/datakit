<script lang='ts'>
	import type {Snippet} from 'svelte';
	import {
		ResizableHandle,
		ResizablePane,
		ResizablePaneGroup,
	} from '$lib/components/ui/resizable';
	import * as Tabs from '$lib/components/ui/tabs';

	interface Props {
		children?: Snippet;
		controls?: Snippet;
	}

	let {children, controls}: Props = $props();
</script>

<!-- Desktop (md and above): side-by-side resizable panes -->
<div class="hidden h-full md:block">
	<ResizablePaneGroup
		class="h-full"
		direction="horizontal"
	>
		<ResizablePane
			class="overflow-auto"
			defaultSize={30}
			minSize={20}
		>
			<div class="h-full overflow-auto p-4">
				{@render controls?.()}
			</div>
		</ResizablePane>

		<ResizableHandle />

		<ResizablePane class="overflow-auto">
			<!-- @container so child components can use container query breakpoints -->
			<div class="@container h-full overflow-auto p-4">
				{@render children?.()}
			</div>
		</ResizablePane>
	</ResizablePaneGroup>
</div>

<!-- Mobile (below md): tabs for Preview / Controls -->
<div class="block md:hidden">
	<Tabs.Root value="preview">
		<Tabs.List class="w-full">
			<Tabs.Trigger
				class="flex-1"
				value="preview"
			>Preview</Tabs.Trigger>
			<Tabs.Trigger
				class="flex-1"
				value="controls"
			>Controls</Tabs.Trigger>
		</Tabs.List>

		<Tabs.Content value="preview">
			<!-- @container so child components can use container query breakpoints -->
			<div class="@container p-4">
				{@render children?.()}
			</div>
		</Tabs.Content>

		<Tabs.Content value="controls">
			<div class="p-4">
				{@render controls?.()}
			</div>
		</Tabs.Content>
	</Tabs.Root>
</div>

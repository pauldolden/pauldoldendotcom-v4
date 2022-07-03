<script lang="ts">
	import { fade } from 'svelte/transition';
	export let show: boolean;
</script>

{#if show}
	<div
		on:click|self={() => (show = !show)}
		transition:fade={{ duration: 100 }}
		class="absolute inset-0 bg-palette-background bg-opacity-50 flex items-center justify-center transition-all"
	>
		<div class="bg-palette-bg-lighter p-6 w-[300px]">
			<slot />
		</div>
	</div>
{/if}

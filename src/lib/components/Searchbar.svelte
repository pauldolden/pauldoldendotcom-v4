<script>
	import Search from './icons/Search.svelte';
	import { filtersStore } from '$lib/stores/stores';
</script>

<div
	class="ring-2 flex-1 ring-transparent focus-within:ring-palette-brands-blog rounded-md py-3 px-3 md:px-7 bg-palette-light flex outline-none"
>
	<input
		type="search"
		placeholder="Search for posts."
		class="bg-inherit text-palette-background outline-none placeholder:text-palette-background placeholder:font-normal flex-1"
		bind:value={$filtersStore.searchTerm}
	/>
	<Search />
</div>

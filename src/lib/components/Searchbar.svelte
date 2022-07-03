<script>
	import Search from './icons/Search.svelte';
	import { searchTerm } from '$lib/stores/stores';
</script>

<div
	class="ring-2 ring-transparent focus-within:ring-palette-brands-blog rounded-full py-3 px-7 bg-palette-light flex outline-none"
>
	<input
		type="search"
		placeholder="Search for posts."
		class="bg-inherit text-palette-background outline-none placeholder:text-palette-background"
		bind:value={$searchTerm}
	/>
	<Search />
</div>

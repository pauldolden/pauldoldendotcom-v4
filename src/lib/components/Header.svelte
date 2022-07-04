<script lang="ts">
	import { categoryStore } from '$lib/stores/stores';

	import Back from '$lib/components/Back.svelte';
	import Filter from '$lib/components/Filter.svelte';
	import Searchbar from '$lib/components/Searchbar.svelte';

	let categories: string[];
	export let postCount: number;

	categoryStore.subscribe((_categories) => (categories = _categories));
</script>

<header class="flex flex-col">
	<div class="justify-between items-center flex py-10">
		<Back path="/" />
		<div class="flex items-center gap-6">
			<Searchbar />
			<Filter {categories} />
			<!-- <Sort /> -->
		</div>
	</div>
	<div class="flex flex-col md:flex-row justify-between items-center mb-3">
		<h1 class="font-bold text-3xl">Blog</h1>
		<span class="font-normal">{postCount} posts found.</span>
	</div>
</header>

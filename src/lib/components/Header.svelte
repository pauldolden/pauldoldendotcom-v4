<script lang="ts">
	import { categoryStore } from '$lib/stores/stores';

	import Filter from '$lib/components/Filter.svelte';
	import Searchbar from '$lib/components/Searchbar.svelte';
	import HeaderTop from './HeaderTop.svelte';

	let categories: string[];
	export let postCount: number;

	categoryStore.subscribe((_categories) => (categories = _categories));
</script>

<header class="flex flex-col gap-8">
	<HeaderTop />
	<div class="flex flex-col md:flex-row items-center justify-between mb-5 gap-6">
		<div class="flex flex-col justify-between gap-2 items-center md:items-start">
			<h1 class="font-bold text-3xl">Blog</h1>
			<span class="font-normal">{postCount} posts found.</span>
		</div>
		<div class="flex justify-between w-full md:w-auto items-center gap-6">
			<Searchbar />
			<Filter {categories} />
		</div>
	</div>
</header>

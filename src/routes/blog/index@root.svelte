<script lang="ts" context="module">
	import { categoryStore } from '$lib/stores/stores';
	// @ts-ignore
	const allPosts = import.meta.glob('./*.md');

	let body: Promise<PostMetadata>[] = [];
	// Fetch all metadata from .md blog posts
	for (const path in allPosts) {
		const metadata = allPosts[path]().then(({ metadata }: { metadata: PostMetadata }) => metadata);
		body.push(metadata);
	}
	// Loader
	export const load = async () => {
		let allPosts = await Promise.all(body);
		// @ts-ignore
		if (import.meta.env.PROD) {
			allPosts = allPosts.filter((post) => post.stage === 'published');
		}
		// Build up post categories dynamically based on unique categories that exist.
		allPosts.forEach((post) => {
			categoryStore.update((categories) => {
				const newCategories = post.category.filter((category) => !categories.includes(category));

				return [...categories, ...newCategories];
			});
		});
		return {
			props: {
				allPosts
			}
		};
	};
</script>

<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import type { PostMetadata } from '$lib/types';
	import { filtersStore } from '$lib/stores/stores';
	import { filterBySearchTerm } from '$lib/utils/filterBySearchTerm';
	import { filterByCategory } from '$lib/utils/filterByCategory';
	export let allPosts: PostMetadata[];
	let posts: PostMetadata[] = [];

	filtersStore.subscribe((storeValues) => {
		let filters: string[] = [];
		let searchTerm = storeValues.searchTerm.toLowerCase();

		for (let [key, value] of Object.entries(storeValues.categories)) {
			if (value) {
				filters.push(key);
			}
		}

		posts = allPosts.filter((post) => filterByCategory(post, filters));
		posts = posts.filter((post) => filterBySearchTerm(post, searchTerm));
	});
</script>

<svelte:head>
	<title>Blog | pauldolden.com</title>
</svelte:head>

<section class="p-5 flex flex-col w-full">
	<Header postCount={posts.length} />
	<div class="grid md:grid-cols-3 gap-4 py-4">
		{#each posts as post}
			<PostCard {post} />
		{/each}
	</div>
</section>

<script lang="ts" context="module">
	import { categoryStore } from '$lib/stores/stores';
	const posts = import.meta.glob('./*.md');

	let body: Promise<PostMetadata>[] = [];
	// fetch all metadata from .md blog posts
	for (const path in posts) {
		const metadata = posts[path]().then(({ metadata }) => metadata);
		body.push(metadata);
	}

	export const load = async () => {
		const posts = await Promise.all(body);
		// Build up post categories dynamically based on unique categories that exist.
		posts.forEach((post) => {
			categoryStore.update((categories) => {
				const newCategories = post.category.filter((category) => !categories.includes(category));

				return [...categories, ...newCategories];
			});
		});
		return {
			props: {
				posts
			}
		};
	};
</script>

<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import type { PostMetadata } from '$lib/types';
	import { filtersStore } from '$lib/stores/stores';

	let filters: string[] = [];

	filtersStore.subscribe((storeValues) => {
		for (let [key, value] of Object.entries(storeValues)) {
			if (value) {
				filters.push(key);
			}
		}
	});

	export let posts: PostMetadata[];
</script>

<svelte:head>
	<title>Blog | Paul Dolden</title>
</svelte:head>

<section class="flex flex-col w-full">
	<Header postCount={posts.length} />
	<div class="grid grid-cols-3 gap-4 py-4">
		{#each posts as post}
			<PostCard {post} />
		{/each}
	</div>
</section>

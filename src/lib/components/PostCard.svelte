<script lang="ts">
	import dayjs from 'dayjs';
	import Chip from './Chip.svelte';

	export let post: import('$lib/types').PostMetadata;

	let categories = post.category;
</script>

<a href={`blog${post.path}`}>
	<article class="bg-palette-bg-lighter rounded-lg px-4 py-5 hover:scale-105 transition h-full">
		<img src={post.image} alt={post.title} class="pb-4" />
		<h3>{post.title}</h3>
		<p>{dayjs(post.date).format('DD-MM-YYYY')}</p>
		<p>{post.description}</p>
		<div class="flex flex-wrap gap-2 pt-4">
			{#each categories as category}
				<Chip {category} />
			{/each}
		</div>
	</article>
</a>

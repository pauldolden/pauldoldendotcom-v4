<script lang="ts">
	import dayjs from 'dayjs';
	import advancedFormat from 'dayjs/plugin/advancedFormat.js';
	dayjs.extend(advancedFormat);
	import Chip from './Chip.svelte';

	export let post: import('$lib/types').PostMetadata;
</script>

<a href={`blog${post.path}`}>
	<article
		class="bg-palette-bg-lighter rounded-lg px-4 py-5 hover:scale-105 transition flex flex-col justify-between h-full"
		class:ring-4={post.stage === 'draft'}
	>
		<div class="flex flex-col">
			<img src={post.image} alt={post.title} class="pb-4 max-h-[190px]" />
			<div class="py-2">
				<h3 class="font-semibold text-xl">{post.title}</h3>
				<p class="font-medium text-xs">Posted: {dayjs(post.date).format('Do MMMM YYYY')}</p>
			</div>
			<p class="font-normal text-sm">{post.description}</p>
		</div>
		<div class="flex flex-wrap gap-2 pt-4">
			{#each post.category as category}
				<Chip {category} />
			{/each}
		</div>
	</article>
</a>

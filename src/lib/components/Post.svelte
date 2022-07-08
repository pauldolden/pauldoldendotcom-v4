<script>
	// @ts-nocheck
	import Back from '$lib/components/Back.svelte';
	import { calculateReadTime } from '$lib/utils/calculateReadTime';
	import dayjs from 'dayjs';
	import advancedFormat from 'dayjs/plugin/advancedFormat.js';
	dayjs.extend(advancedFormat);
	import { onMount } from 'svelte';
	import LikesCounter from '$lib/components/icons/LikesCounter.svelte';
	import PostImage from '$lib/components/PostImage.svelte';
	export let title;
	export let image;
	export let date;
	export let photographer;
	export let photographerLink;
	export let path;
	let readingTime;
	let liked = false;

	onMount(() => {
		let text = document.getElementById('article').innerText;
		readingTime = calculateReadTime(text);
	});
</script>

<section class="py-4 pb-7">
	<div class="mb-4 flex justify-between">
		<Back path="/blog" />
		<!-- <div class="flex items-center gap-6">
			<LikesCounter bind:liked {path} />
		</div> -->
	</div>
	<div>
		<div>
			<PostImage {title} {image} {photographer} {photographerLink} />
			<div class="my-4">
				<h1 class="text-4xl md:text-6xl mb-3 font-semibold">{title}</h1>
				<p class="font-medium">Posted: {dayjs(date).format('Do MMMM YYYY')}</p>
				<p class="font-medium">{readingTime} minute read</p>
			</div>
		</div>
		<article id="article" class="flex flex-col gap-4 font-normal">
			<slot />
		</article>
	</div>
</section>

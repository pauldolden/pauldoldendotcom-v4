<script>
	// @ts-nocheck
	import Back from '$lib/components/Back.svelte';
	import dayjs from 'dayjs';
	import advancedFormat from 'dayjs/plugin/advancedFormat.js';
	import PostImage from './PostImage.svelte';
	dayjs.extend(advancedFormat);
	export let title;
	export let image;
	export let date;
	export let photographer;
	export let photographerLink;
</script>

<section class="py-4 pb-7">
	<div class="mb-4">
		<Back path="/blog" />
	</div>
	<div>
		<div>
			<PostImage {title} {image} {photographer} {photographerLink} />
			<div class="my-4">
				<h1 class="text-4xl md:text-6xl mb-3 font-semibold">{title}</h1>
				<p class="font-normal">Posted: {dayjs(date).format('Do MMMM YYYY')}</p>
			</div>
		</div>
		<article class="flex flex-col gap-4 font-normal">
			<slot />
		</article>
	</div>
</section>

<script>
	// @ts-nocheck
	import Back from '$lib/components/Back.svelte';
	import dayjs from 'dayjs';
	import advancedFormat from 'dayjs/plugin/advancedFormat.js';
	dayjs.extend(advancedFormat);
	export let title;
	export let image;
	export let date;
</script>

<section class="py-4 pb-7">
	<div class="mb-4">
		<Back path="/blog" />
	</div>
	<div>
		<div>
			<img src={image} alt={title} class="w-full h-[300px] object-cover" />
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

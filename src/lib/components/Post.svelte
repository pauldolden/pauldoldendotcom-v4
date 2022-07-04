<script>
	// import dayjs from 'dayjs';
	// import advancedFormat from 'dayjs/plugin/advancedFormat';
	// dayjs.extend(advancedFormat);

	import Back from '$lib/components/Back.svelte';
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
				<h1 class="text-6xl mb-3">{title}</h1>
				<p>Posted: {date}</p>
			</div>
		</div>
		<article class="flex flex-col gap-4">
			<slot />
		</article>
	</div>
</section>

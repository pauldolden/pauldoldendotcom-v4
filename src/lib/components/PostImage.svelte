<script>
	// @ts-nocheck
	import Attribution from './Attribution.svelte';
	export let image;
	export let title;
	export let photographer;
	export let photographerLink;
</script>

<div class="relative rounded-md">
	<img src={image} alt={title} class="w-full h-[300px] object-cover rounded-md" />
	<Attribution {photographer} {photographerLink} />
</div>

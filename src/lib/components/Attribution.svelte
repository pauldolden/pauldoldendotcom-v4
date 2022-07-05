<script>
	// @ts-nocheck
	export let photographer;
	export let photographerLink;
</script>

<div class="absolute bottom-1 right-1 px-2 py-1 bg-palette-background bg-opacity-80 rounded-md">
	<a href={photographerLink} target="_blank"
		><span class="font-semibold">Photo: &nbsp;</span>{photographer}</a
	>
</div>

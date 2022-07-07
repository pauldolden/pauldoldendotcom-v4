<script lang="ts">
	import { filtersStore } from '$lib/stores/stores';
	import Modal from '$lib/components/Modal.svelte';
	export let categories: string[];
	let formValues: any = {};

	let show = false;

	filtersStore.subscribe((storeValues) => {
		formValues = storeValues.categories;
	});

	function closeModal() {
		show = !show;
	}

	function onSubmit() {
		filtersStore.update((storeValues) => {
			storeValues.categories = { ...formValues };
			return storeValues;
		});
		closeModal();
	}

	function clearFilters() {
		filtersStore.update((storeValues) => {
			storeValues.categories = {};
			return storeValues;
		});
	}
</script>

<button on:click={closeModal}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="50"
		height="50"
		viewBox="0 0 24 24"
		class="fill-palette-light hover:fill-palette-brands-blog transition cursor-pointer"
		><title>Filter</title><path
			d="M6 12.984v-1.969h12v1.969h-12zM3 6h18v2.016h-18v-2.016zM9.984 18v-2.016h4.031v2.016h-4.031z"
		/></svg
	>
</button>

<Modal bind:show>
	<form on:submit|preventDefault={onSubmit} class="flex flex-col">
		<div class="flex justify-between items-center mb-5">
			<h2>Categories</h2>
			<button on:click|preventDefault={closeModal}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 320 512"
					class="fill-palette-light"
					width="20"
					><title>Close</title><path
						d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
					/></svg
				>
			</button>
		</div>
		<div class="py-5">
			{#each categories as category}
				<div class="grid grid-cols-2 gap-3 mb-2">
					<label for={category}>{category}:</label>
					<div class="flex justify-end">
						<input
							name={category}
							type="checkbox"
							bind:checked={formValues[category]}
							class="appearance-none bg-palette-light w-6 h-6 checked:bg-palette-brands-blog"
						/>
					</div>
				</div>
			{/each}
		</div>
		<div class="flex gap-4 justify-between">
			<button
				on:click|preventDefault={clearFilters}
				class="bg-palette-accent text-palette-background flex-1 py-2 rounded-md mt-3 hover:bg-palette-brands-blog transition active:bg-palette-accent-darker flex items-center justify-center"
			>
				Clear
			</button>
			<button
				class="bg-palette-accent text-palette-background flex-1 py-2 rounded-md mt-3 hover:bg-palette-brands-blog transition active:bg-palette-accent-darker flex items-center justify-center"
			>
				Submit
			</button>
		</div>
	</form>
</Modal>

<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href={favicon} />
</svelte:head>

<main
	class="bg-palette-background text-palette-text min-h-screen w-screen flex items-center justify-center font-rubik"
>
	<slot />
</main>

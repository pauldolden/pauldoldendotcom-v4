<script>
	import '../app.css';
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href="/images/favicon.png" />
</svelte:head>

<main
	class="bg-palette-background text-palette-text min-h-screen w-screen flex items-center justify-center font-rubik"
>
	<slot />
</main>

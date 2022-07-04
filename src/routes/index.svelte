<script lang="ts">
	import IconNav from '$lib/components/IconNav.svelte';
	import paul from '$lib/assets/PaulCartoon.png';
</script>

<svelte:head>
	<title>pauldolden.com</title>
</svelte:head>

<section class="container m-10 lg:max-w-5xl">
	<div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
		<div class="flex flex-col gap-1">
			<h1 class="text-5xl md:text-6xl text-palette-accent font-medium">Paul Dolden</h1>
			<h2 class="text-3xl md:text-4xl text-palette-accent font-medium">Full-Stack Engineer</h2>
			<IconNav />
			<div class="pt-5 text-lg flex flex-col gap-3">
				<p>
					Hey, I'm Paul. I'm a developer based in Essex, UK. I currently work as a Full-Stack
					Engineer for <a href="https://comicrelief.com" class="text-palette-brands-comic"
						>Comic Relief
					</a>, a major UK charity, working with
					<span class="text-palette-brands-react">React</span>
					and <span class="text-palette-brands-aws">AWS Serverless</span>.
				</p>
				<p>
					I'm a <a
						href="https://www.typescriptlang.org/"
						target="_blank"
						class="text-palette-brands-typescript">TypeScript</a
					>
					boy and GIF enthusiast. I like building web applications with tools like
					<a href="https://kit.svelte.dev/" target="_blank" class="text-palette-brands-svelte"
						>SvelteKit</a
					>
					and
					<a href="https://nextjs.org/" target="_blank" class="text-white">NextJS</a>, and more
					recently, building out serverless back-ends ontop of AWS Lambda.
				</p>
			</div>
		</div>
		<div class="flex justify-center lg:justify-end fill-palette-text flex-1">
			<img
				src={paul}
				alt="Paul being a cartoon"
				class="fill-palette-text max-h-[400px] max-w-[280px]"
			/>
		</div>
	</div>
</section>

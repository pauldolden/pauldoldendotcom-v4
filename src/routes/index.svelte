<script lang="ts">
	import paul from '$lib/assets/images/PaulCartoon.png';
	import Github from '$lib/components/icons/Github.svelte';
	import Linkedin from '$lib/components/icons/Linkedin.svelte';
	import Mail from '$lib/components/icons/Mail.svelte';
	import Twitch from '$lib/components/icons/Twitch.svelte';
	import Twitter from '$lib/components/icons/Twitter.svelte';
</script>

<div class="container max-w-5xl">
	<div class="flex flex-col lg:flex-row justify-between gap-10">
		<div class="flex flex-col gap-1 m-10 mt-0">
			<h1 class="text-6xl">Paul Dolden</h1>
			<h2 class="text-4xl">Full-Stack Engineer</h2>
			<div class="flex flex-row pt-5 gap-5">
				<Github />
				<Linkedin />
				<Twitter />
				<Twitch />
				<Mail />
			</div>
			<div class="pt-5 text-lg flex flex-col gap-3">
				<p>
					Hey, I'm Paul. I'm a developer based in Essex, UK. I currently work as a Full-Stack
					Engineer for <a href="https://comicrelief.com" class="text-palette-brands-comic"
						>Comic Relief
					</a>, a large UK charity.
				</p>
				<p>
					I'm a <span class="text-palette-brands-typescript">TypeScript</span> boy and GIF
					enthusiast. I like building web applications with tools like
					<span class="text-palette-brands-svelte">SvelteKit</span> and
					<span class="text-white">NextJS</span>, and more recently, building out serverless
					back-ends ontop of AWS Lambda.
				</p>
			</div>
		</div>
		<div class="flex h-[400px] justify-center lg:justify-end fill-palette-text">
			<img src={paul} alt="Paul being a cartoon" class="fill-palette-text" />
		</div>
	</div>
</div>

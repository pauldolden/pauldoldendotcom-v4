<script lang="ts">
	import Github from '$lib/components/icons/Github.svelte';
	import Linkedin from '$lib/components/icons/Linkedin.svelte';
	import Twitch from '$lib/components/icons/Twitch.svelte';
	import Twitter from '$lib/components/icons/Twitter.svelte';
</script>

<div class="max-w-5xl p-30">
	<div class="grid grid-cols-2 gap-10">
		<div class="flex flex-col gap-1">
			<h1 class="text-6xl">Paul Dolden</h1>
			<h2 class="text-4xl">Full-Stack Developer</h2>
			<div class="flex flex-row pt-5 gap-3">
				<Github />
				<Linkedin />
				<Twitter />
				<Twitch />
			</div>
			<div class="pt-5 text-lg flex flex-col gap-3">
				<p>
					Hey, I'm Paul. I'm a developer based in Essex, UK. I currently work for <a
						href="https://comicrelief.com"
						class="text-palette-comic"
						>Comic Relief
					</a>, as a Full-Stack Engineer.
				</p>
				<p>
					I'm a sucker for building web applications with tools like SvelteKit and NextJS, and more
					recently, building out serverless back-ends ontop of AWS Lambda.
				</p>
			</div>
		</div>
		<div class="w-[500px] flex justify-end fill-white">
			<img
				src="../../static/images/Paul.png"
				alt="Paul looking barbershop fresh"
				class="fill-white"
			/>
		</div>
	</div>
</div>

<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { projects } from '$lib/data.js';

	let scrollY = 0;
	let hideNav = false;
	let lastScrollY = 0;

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
			hideNav = scrollY > lastScrollY && scrollY > 50;
			lastScrollY = scrollY;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<title>NO_EXISTENCE // PORTFOLIO</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<!-- FontAwesome preserved just in case, but unused in new design -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
	/>
</svelte:head>

<main
	class="min-h-screen overflow-x-hidden bg-void text-paper selection:bg-crimson selection:text-white"
>
	<Header {hideNav} />

	<Hero />

	<section id="about" class="mx-auto ml-8 max-w-4xl border-l border-ash/20 px-8 py-24 md:ml-auto">
		<div class="mb-12" in:fade={{ duration: 1000, delay: 200 }}>
			<h2 class="mb-4 text-4xl tracking-widest text-crimson uppercase">// ABOUT_SUBJECT</h2>
			<div class="flex flex-col items-start gap-8 md:flex-row">
				<img
					src="/profil.png"
					alt="Subject"
					class="h-32 w-32 rounded-none border border-ash/50 mix-blend-luminosity contrast-125 grayscale transition-all duration-500 hover:mix-blend-normal"
				/>
				<div class="max-w-lg font-mono text-sm leading-relaxed text-ash">
					<p class="mb-4">
						IDENTIFIER: <span class="text-white">Maulana Abi Nugroho</span><br />
						ORIGIN: SMKN 1 Pandeglang [RPL]<br />
						STATUS: <span class="animate-pulse text-crimson">ACTIVE</span>
					</p>
					<p>
						Specializing in web development and verify system integrity. Exploring the boundaries
						between code and absence.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="projects" class="mx-auto max-w-6xl px-8 py-24">
		<h2
			class="mb-12 border-b border-ash/20 pb-4 text-right text-4xl tracking-widest text-white uppercase"
		>
			// PROJECTS_LOG
		</h2>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects.slice(0, 3) as project, i}
				<div
					class="group relative overflow-hidden border border-ash/20 p-6 transition-all duration-500 hover:border-crimson hover:bg-white/5"
				>
					<div
						class="absolute top-0 left-0 h-1 w-full -translate-x-full transform bg-crimson transition-transform duration-300 group-hover:translate-x-0"
					></div>
					<h3 class="mb-2 text-xl font-bold text-white transition-colors group-hover:text-crimson">
						{project.name}
					</h3>
					<p class="mb-4 font-mono text-xs text-ash">{project.stack}</p>
					<p class="text-sm text-gray-400">
						{project.description}
					</p>
				</div>
			{/each}
		</div>
		
		<!-- See All Projects Link -->
		<div class="mt-12 text-center">
			<a href="/projects" class="font-mono text-xs text-ash hover:text-crimson transition-colors border-b border-transparent hover:border-crimson pb-1">
				[ VIEW_FULL_ARCHIVE ]
			</a>
		</div>
	</section>

	<Footer />
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
		background-color: #050505;
	}
</style>

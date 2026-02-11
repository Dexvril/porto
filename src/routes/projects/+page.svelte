<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { projects } from '$lib/data.js';

	let scrollY = 0;
	let hideNav = false;
	let lastScrollY = 0;
	let visible = false;

	onMount(() => {
		visible = true;
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
	<title>PROJECTS_ARCHIVE // NO_EXISTENCE</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="robots" content="noindex, nofollow" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
	/>
</svelte:head>

<main
	class="min-h-screen overflow-x-hidden bg-void text-paper selection:bg-crimson selection:text-white"
>
	<Header {hideNav} />

	<!-- Hero Banner -->
	<div class="relative flex h-[50vh] flex-col items-center justify-center overflow-hidden">
		<div class="pointer-events-none absolute inset-0 z-0 opacity-5">
			<div
				class="absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-crimson"
			></div>
			<div
				class="absolute top-1/3 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-ash"
			></div>
		</div>

		{#if visible}
			<div class="z-10 text-center" in:fade={{ duration: 800 }}>
				<p class="mb-4 font-mono text-sm tracking-[0.3em] text-ash uppercase">
					// CLASSIFIED_ARCHIVE
				</p>
				<h1
					class="font-mono text-5xl leading-none font-bold tracking-tighter select-none md:text-8xl"
				>
					PROJECT<span class="text-crimson">_</span>LOG
				</h1>
				<p class="mt-6 font-mono text-sm text-ash">
					<span class="text-crimson">█</span> {projects.length} ENTRIES FOUND
					<span class="animate-pulse text-crimson">_</span>
				</p>
			</div>
		{/if}

		<a
			href="/"
			class="absolute bottom-8 font-mono text-xs text-ash/50 transition-colors hover:text-crimson"
		>
			← RETURN_TO_MAIN
		</a>
	</div>

	<!-- Projects Archive -->
	<section class="mx-auto max-w-5xl px-6 py-16 md:px-8">
		<div class="mb-12 border-b border-ash/20 pb-4">
			<h2 class="text-right font-mono text-xs tracking-widest text-ash uppercase">
				// COMPLETED_OPERATIONS
			</h2>
		</div>

		<div class="space-y-6">
			{#each projects as project, i}
				{#if visible}
					<div
						in:fly={{ y: 30, duration: 500, delay: 200 + i * 150 }}
						class="group relative border border-ash/15 transition-all duration-500 hover:border-crimson/60 hover:bg-white/[0.02]"
					>
						<!-- Top accent line -->
						<div
							class="absolute top-0 left-0 h-[2px] w-full -translate-x-full transform bg-crimson transition-transform duration-500 group-hover:translate-x-0"
						></div>

						<div class="flex flex-col gap-6 p-6 md:flex-row md:items-start md:p-8">
							<!-- Left: Index & Year -->
							<div
								class="flex shrink-0 flex-row items-center gap-4 md:w-24 md:flex-col md:items-start md:gap-1"
							>
								<span class="font-mono text-3xl font-bold text-ash/20 transition-colors group-hover:text-crimson/40">
									{String(i + 1).padStart(2, '0')}
								</span>
								<span class="font-mono text-xs text-ash/40">{project.year}</span>
							</div>

							<!-- Center: Content -->
							<div class="flex-1">
								<div class="mb-2 flex flex-wrap items-center gap-3">
									<h3
										class="font-mono text-xl font-bold text-white transition-colors group-hover:text-crimson"
									>
										{project.name}
									</h3>
									<span
										class="font-mono text-[10px] tracking-wider {project.status === 'CORRUPTED'
											? 'text-ash/40'
											: 'text-crimson'}"
									>
										[{project.status}]
									</span>
								</div>

								<p class="mb-3 font-mono text-xs text-ash/60">{project.stack}</p>

								<p class="max-w-xl text-sm leading-relaxed text-ash/80">
									{project.description}
								</p>

								<!-- Tags -->
								<div class="mt-4 flex flex-wrap gap-2">
									{#each project.tags as tag}
										<span
											class="border border-ash/10 px-2 py-0.5 font-mono text-[10px] tracking-wider text-ash/40 transition-colors group-hover:border-ash/20 group-hover:text-ash/60"
										>
											{tag}
										</span>
									{/each}
								</div>
							</div>

							<!-- Right: Arrow -->
							<div
								class="hidden items-center text-ash/10 transition-colors group-hover:text-crimson md:flex"
							>
								<span class="text-2xl">→</span>
							</div>
						</div>
					</div>
				{/if}
			{/each}
		</div>

		<!-- Bottom note -->
		<div class="mt-16 border-t border-ash/10 pt-8 text-center">
			<p class="font-mono text-xs text-ash/30">
				// MORE_ENTRIES_LOADING<span class="animate-pulse">...</span>
			</p>
			<p class="mt-2 font-mono text-[10px] text-ash/15">
				THIS ARCHIVE IS NOT INDEXED. ACCESS GRANTED VIA DIRECT LINK ONLY.
			</p>
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

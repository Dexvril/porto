<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Footer from '$lib/components/Footer.svelte';

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
			<!-- Project 1 -->
			<div
				class="group relative overflow-hidden border border-ash/20 p-6 transition-all duration-500 hover:border-crimson hover:bg-white/5"
			>
				<div
					class="absolute top-0 left-0 h-1 w-full -translate-x-full transform bg-crimson transition-transform duration-300 group-hover:translate-x-0"
				></div>
				<h3 class="mb-2 text-xl font-bold text-white transition-colors group-hover:text-crimson">
					MONITOR_WEB
				</h3>
				<p class="mb-4 font-mono text-xs text-ash">Grafana // Umami</p>
				<p class="text-sm text-gray-400">
					System monitoring dashboard implementation with graphical visualization.
				</p>
			</div>

			<!-- Project 2 -->
			<div
				class="group relative overflow-hidden border border-ash/20 p-6 transition-all duration-500 hover:border-crimson hover:bg-white/5"
			>
				<div
					class="absolute top-0 left-0 h-1 w-full -translate-x-full transform bg-crimson transition-transform duration-300 group-hover:translate-x-0"
				></div>
				<h3 class="mb-2 text-xl font-bold text-white transition-colors group-hover:text-crimson">
					ALERT_SYSTEM
				</h3>
				<p class="mb-4 font-mono text-xs text-ash">n8n // Discord // WhatsApp</p>
				<p class="text-sm text-gray-400">
					Automated bridging protocol for alert dissemination across communication channels.
				</p>
			</div>

			<!-- Project 3 -->
			<div
				class="group relative overflow-hidden border border-ash/20 p-6 opacity-50 transition-all duration-500 hover:opacity-100"
			>
				<h3 class="mb-2 text-xl font-bold text-ash transition-colors group-hover:text-crimson">
					NULL_POINTER
				</h3>
				<p class="mb-4 font-mono text-xs text-ash">???</p>
				<p class="text-sm text-gray-400">Data corrupted. Coming soon.</p>
			</div>
		</div>
	</section>

	<section id="contact" class="mx-auto mr-8 max-w-4xl border-r border-ash/20 px-8 py-24 md:mr-auto">
		<h2 class="mb-8 text-4xl tracking-widest text-crimson uppercase">// CONTACT_SIGNAL</h2>

		<form
			on:submit|preventDefault={async (e) => {
				const formData = new FormData(e.target);
				const data = Object.fromEntries(formData);
				const res = await fetch('/api/contact', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(data)
				});
				const result = await res.json();
				if (result.success) {
					alert('SIGNAL_RECEIVED: Message stored in Bun SQLite.');
					e.target.reset();
				} else {
					alert('ERROR: ' + result.error);
				}
			}}
			class="space-y-6 font-mono"
		>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div class="flex flex-col">
					<label for="name" class="mb-2 text-xs text-ash">> IDENTIFIER</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						class="border border-ash/30 bg-transparent p-3 text-white transition-colors outline-none focus:border-crimson"
						placeholder="Name..."
					/>
				</div>
				<div class="flex flex-col">
					<label for="email" class="mb-2 text-xs text-ash">> ENCODING (EMAIL)</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						class="border border-ash/30 bg-transparent p-3 text-white transition-colors outline-none focus:border-crimson"
						placeholder="email@example.com"
					/>
				</div>
			</div>
			<div class="flex flex-col">
				<label for="message" class="mb-2 text-xs text-ash">> TRANSMISSION</label>
				<textarea
					id="message"
					name="message"
					required
					rows="4"
					class="resize-none border border-ash/30 bg-transparent p-3 text-white transition-colors outline-none focus:border-crimson"
					placeholder="Enter message..."
				></textarea>
			</div>
			<button
				type="submit"
				class="border border-crimson px-8 py-3 text-sm tracking-widest text-crimson uppercase transition-all duration-300 hover:bg-crimson hover:text-white"
			>
				[ SEND_SIGNAL ]
			</button>
		</form>
	</section>

	<Footer />
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
		background-color: #050505;
	}
</style>

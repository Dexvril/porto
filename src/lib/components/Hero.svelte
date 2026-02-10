<script>
	import { fade } from 'svelte/transition';
</script>

<div
	class="relative flex h-screen flex-col items-center justify-center overflow-hidden"
	id="home"
	transition:fade
>
	<div class="pointer-events-none absolute inset-0 z-0 opacity-10">
		<!-- Abstract background noise or shapes could go here -->
		<div
			class="pointer-events-auto absolute top-1/4 left-1/4 h-96 w-96 animate-pulse cursor-pointer rounded-full border border-ash transition-transform duration-200 active:scale-90 active:bg-ash/20"
		></div>
		<div
			class="pointer-events-auto absolute right-1/4 bottom-1/4 h-[500px] w-[500px] cursor-pointer rounded-full border border-crimson opacity-20 transition-transform duration-200 active:scale-90 active:bg-crimson/20"
		></div>
	</div>

	<div class="z-10 text-center mix-blend-difference">
		<h1 class="font-mono text-6xl leading-none font-bold tracking-tighter select-none md:text-9xl">
			THE <span class="text-crimson line-through">ABSENCE</span><br />
			OF <span class="italic">SELF</span>
		</h1>
		<p class="mt-8 font-sans text-xl tracking-[0.5em] text-ash uppercase md:text-2xl">
			Maulana Abi Nugroho
		</p>
		<p class="mt-2 font-mono text-sm text-crimson">// WEB_DEVELOPER // SURREALIST</p>
	</div>

	<div class="absolute bottom-10 animate-bounce text-ash">↓</div>
</div>

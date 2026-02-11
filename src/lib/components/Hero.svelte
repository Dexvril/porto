<script>
	import { fade } from 'svelte/transition';
</script>

<div
	class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
	id="home"
	transition:fade
>
	<div class="pointer-events-none absolute inset-0 z-0 opacity-10">
		<!-- Abstract background noise or shapes could go here -->
		<div
			class="pointer-events-auto absolute top-1/4 left-1/4 h-48 w-48 md:h-96 md:w-96 animate-pulse cursor-pointer rounded-full border border-ash transition-transform duration-200 active:scale-90 active:bg-ash/20"
		></div>
		<div
			class="pointer-events-auto absolute right-1/4 bottom-1/4 h-64 w-64 md:h-[500px] md:w-[500px] cursor-pointer rounded-full border border-crimson opacity-20 transition-transform duration-200 active:scale-90 active:bg-crimson/20"
		></div>
	</div>

	<div class="z-10 text-center mix-blend-difference px-4">
		<h1 class="font-mono text-4xl leading-none font-bold tracking-tighter select-none md:text-9xl sm:text-6xl">
			THE <span class="text-crimson line-through">ABSENCE</span><br />
			OF <span class="italic">SELF</span>
		</h1>
		<p class="mt-4 md:mt-8 font-sans text-sm md:text-xl tracking-[0.2em] md:tracking-[0.5em] text-ash uppercase">
			Maulana Abi Nugroho
		</p>
		<p class="mt-2 font-mono text-xs md:text-sm text-crimson">// WEB_DEVELOPER // GAMER</p>
	</div>

	<div class="absolute bottom-10 animate-bounce text-ash">↓</div>
</div>

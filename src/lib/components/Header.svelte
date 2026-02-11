<script>
  import { slide } from 'svelte/transition';
  export let hideNav = false;
  let isMobileMenuOpen = false;

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
</script>

<header class:hide={hideNav} class="fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center px-8 py-6 mix-blend-difference transition-transform duration-500 bg-transparent md:bg-transparent">
  <div class="flex justify-between items-center w-full md:w-auto">
    <div class="text-xl font-mono font-bold tracking-widest uppercase">
      NO<span class="text-crimson">EXISTENCE</span>
    </div>
    
    <!-- Hamburger Button -->
    <button aria-label="Toggle Menu" class="md:hidden text-white focus:outline-none" on:click={toggleMobileMenu}>
      <div class="space-y-2">
        <span class="block w-8 h-0.5 bg-white transition-transform duration-300 transform origin-center {isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}"></span>
        <span class="block w-8 h-0.5 bg-white transition-opacity duration-300 {isMobileMenuOpen ? 'opacity-0' : ''}"></span>
        <span class="block w-8 h-0.5 bg-white transition-transform duration-300 transform origin-center {isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}"></span>
      </div>
    </button>
  </div>
  
  <!-- Desktop Nav -->
  <nav class="hidden md:flex gap-8">
    {#each ['Home', 'About', 'Projects', 'Contact', 'Admin'] as item}
      <a href={item === 'Admin' ? '/admin' : `/#${item.toLowerCase()}`} class="font-sans text-sm uppercase tracking-widest hover:text-crimson hover:line-through decoration-crimson">
        {item}
      </a>
    {/each}
  </nav>

  <!-- Mobile Nav -->
  {#if isMobileMenuOpen}
    <nav transition:slide class="md:hidden flex flex-col gap-4 mt-4 w-full text-center pb-4 border-b border-ash/20 bg-black/90 backdrop-blur-sm md:bg-transparent">
      {#each ['Home', 'About', 'Projects', 'Contact', 'Admin'] as item}
        <a 
          href={item === 'Admin' ? '/admin' : `/#${item.toLowerCase()}`} 
          class="font-sans text-sm uppercase tracking-widest hover:text-crimson hover:line-through decoration-crimson py-2"
          on:click={toggleMobileMenu}
        >
          {item}
        </a>
      {/each}
    </nav>
  {/if}
</header>

<style>
  .hide {
    transform: translateY(-100%);
  }
</style>

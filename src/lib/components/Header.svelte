<script>
  export let hideNav = false;
</script>

<header class:hide={hideNav} class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference transition-transform duration-500">
  <div class="text-xl font-mono font-bold tracking-widest uppercase">
    NO<span class="text-crimson">EXISTENCE</span>
  </div>
  
  <nav class="flex gap-8">
    {#each ['Home', 'About', 'Projects', 'Contact', 'Admin'] as item}
      <a href={item === 'Admin' ? '/admin' : `/#${item.toLowerCase()}`} class="font-sans text-sm uppercase tracking-widest hover:text-crimson hover:line-through decoration-crimson">
        {item}
      </a>
    {/each}
  </nav>
</header>

<style>
  .hide {
    transform: translateY(-100%);
  }
</style>

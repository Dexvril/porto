<script>
  export let theme;
  export let hideNav;
  export let toggleTheme;
</script>

<header class:hide={hideNav}>
  <nav>
    <a href="#home">Home</a>
    <a href="#about"><strong>Tentang Saya</strong></a>
    <a href="#projects"><strong>Proyek Saya</strong></a>
    <a href="#contact">Kontak</a>
  </nav>
  <button class="theme-toggle" on:click={toggleTheme}>
    {#if theme === 'dark'}
      <i class="fas fa-sun"></i>
    {:else}
      <i class="fas fa-moon"></i>
    {/if}
  </button>
</header>

<style>
  header {
    background: var(--nav-bg);
    padding: 1rem 2rem;
    border-bottom: 3px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 100;
    transition: transform 0.3s ease-in-out;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hide {
    transform: translateY(-100%);
  }

  nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  nav a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s, text-shadow 0.3s;
    font-size: 1.1rem;
  }

  nav a:hover {
    color: var(--accent);
    text-shadow: 0 0 8px var(--accent);
  }

  .theme-toggle {
    background: none;
    border: 2px solid var(--accent);
    color: var(--accent);
    font-size: 1.2rem;
    width: 40px;   /* sama tinggi */
    height: 40px;
    border-radius: 50%; /* biar bulat */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s, color 0.3s, transform 0.2s;
  }

  .theme-toggle:hover {
    background: var(--accent);
    color: #fff;
    transform: rotate(15deg);
  }

  @media (max-width: 768px) {
    header {
      flex-direction: column;
      gap: 0.5rem;
    }
    nav a {
      font-size: 1rem;
    }
  }
</style>

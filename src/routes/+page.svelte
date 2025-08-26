<script>
  import { fade, slide } from 'svelte/transition';
  import { onMount } from 'svelte';

  let lastScrollY = 0;
  let hideNav = false;

  let theme = 'dark';

  onMount(() => {
    // Cek preferensi sebelumnya
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) theme = savedTheme;
    else localStorage.setItem('theme', theme);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      hideNav = currentScrollY > lastScrollY && currentScrollY > 50;
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
  }
</script>

<svelte:head>
  <title>Portofolio - Blue Night & B/W Theme</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Cinzel', serif;
    scroll-behavior: smooth;
  }

  /* Dark Mode → Hitam Putih */
  .dark {
    --bg-primary: linear-gradient(180deg, #000000 0%, #1a1a1a 100%);
    --bg-section: rgba(30, 30, 30, 0.9);
    --text-color: #ffffff;
    --accent: #e0e0e0;
    --border: #ffffff;
    --hover: rgba(255, 255, 255, 0.2);
    --nav-bg: rgba(20, 20, 20, 0.9);
    --footer-bg: #0d0d0d;
  }

  /* Light Mode → Biru Malam */
  .light {
    --bg-primary: linear-gradient(180deg, #001f3f 0%, #003366 100%);
    --bg-section: rgba(0, 30, 60, 0.85);
    --text-color: #ffffff;
    --accent: #4fc3f7;
    --border: #03a9f4;
    --hover: rgba(79, 195, 247, 0.5);
    --nav-bg: rgba(0, 20, 40, 0.85);
    --footer-bg: #001122;
  }

  main {
    background: var(--bg-primary);
    color: var(--text-color);
    min-height: 100vh;
  }

  header {
    background: var(--nav-bg);
    padding: 1rem 2rem;
    text-align: center;
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
    font-weight: 700;
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
    font-weight: bold;
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
  }

  .theme-toggle:hover {
    background: var(--accent);
    color: #000;
  }

  .hero {
    text-align: center;
    padding: 5rem 2rem;
    background: radial-gradient(circle at top, var(--accent), transparent 70%);
  }

  .hero h1 {
    font-size: 4rem;
    color: var(--text-color);
    text-shadow: 3px 3px 10px #000, -2px -2px 5px var(--border);
  }

  .section {
    max-width: 1000px;
    margin: 2rem auto;
    padding: 2rem;
    background: var(--bg-section);
    border: 2px solid var(--border);
    border-radius: 10px;
    box-shadow: 0 0 20px var(--hover);
  }

  h2 {
    color: var(--accent);
    text-shadow: 2px 2px 5px #000;
    margin-bottom: 1rem;
  }

  .about {
    text-align: center;
  }

  .about img {
    display: block;
    margin: 0 auto 1rem auto;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 3px solid var(--accent);
    box-shadow: 0 0 15px var(--hover);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .project-card {
    background: rgba(10, 10, 20, 0.9);
    padding: 1.5rem;
    border-radius: 8px;
    border: 2px solid var(--border);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .project-card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px var(--hover);
  }

  .project-card h3 {
    font-weight: bold;
    color: var(--accent);
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  .contact a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
  }

  .contact a:hover {
    text-shadow: 0 0 8px var(--accent);
  }

  footer {
    text-align: center;
    padding: 1rem;
    background-color: var(--footer-bg);
    color: var(--accent);
    border-top: 2px solid var(--border);
  }

  @media (max-width: 768px) {
    header {
      flex-direction: column;
      gap: 0.5rem;
    }

    nav a {
      font-size: 1rem;
    }

    .hero h1 {
      font-size: 2.5rem;
    }

    .section {
      margin: 1rem;
      padding: 1rem;
    }
  }
</style>

<main class={theme}>
  <header class:hide={hideNav}>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
    <button class="theme-toggle" on:click={toggleTheme}>
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  </header>

  <div class="hero" id="home" transition:fade>
    <h1>Portofolio Saya</h1>
  </div>

  <section class="section about" id="about" transition:slide>
    <img src="/profil.png" alt="Profile" transition:fade />
    <h2>Tentang Saya</h2>
    <p>Perkenalkan nama saya Maulana Abi Nugroho, lulusan SMKN1 Pandeglang jurusan RPL. Saya suka dunia komputer, terutama pemrograman web.</p>
  </section>

  <section class="section projects" id="projects" transition:slide>
    <h2>Proyek Saya</h2>
    <div class="projects-grid">
      <div class="project-card">
        <h3>Proyek 1</h3>
        <p>Membuat website monitoring web menggunakan Umami.</p>
      </div>
      <div class="project-card">
        <h3>Proyek 2</h3>
        <p>Membuat n8n untuk alert dari WhatsApp ke Discord.</p>
      </div>
      <div class="project-card">
        <h3>Proyek 3</h3>
        <p>Coming Soon.</p>
      </div>
    </div>
  </section>

  <section class="section contact" id="contact" transition:slide>
    <h2>Kontak</h2>
    <p>Hubungi saya melalui: <a href="mailto:plitvicegod@gmail.com">plitvicegod@gmail.com</a></p>
    <p>Sosial: <a href="https://github.com/Dexvril" target="_blank">GitHub</a></p>
  </section>

  <footer>
    <p>&copy; 2025 Nvrl. All rights reserved.</p>
  </footer>
</main>

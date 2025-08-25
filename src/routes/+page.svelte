<script>
  import { fade, slide } from 'svelte/transition';
</script>

<svelte:head>
  <title>Portofolio - The Non-Existence of You and Me</title>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<style>
  :global(body) {
    background-color: #1a1a1a;
    color: #e0e0e0;
    font-family: 'Cinzel', serif;
    margin: 0;
    padding: 0;
  }

  header {
    background-color: #ff4d4d;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }

  nav a {
    color: #1a1a1a;
    margin: 0 1rem;
    text-decoration: none;
    font-weight: 700;
    transition: color 0.3s;
  }

  nav a:hover {
    color: #e0e0e0;
  }

  .hero {
    text-align: center;
    padding: 4rem 2rem;
    background: linear-gradient(to bottom, #ff4d4d, #1a1a1a);
  }

  .hero h1 {
    font-size: 3.5rem;
    color: #e0e0e0;
    text-shadow: 2px 2px 4px #000;
  }

  .hero p {
    font-size: 1.2rem;
    color: #e0e0e0;
  }

  .section {
    max-width: 1000px;
    margin: 2rem auto;
    padding: 2rem;
    background: rgba(255, 77, 77, 0.1);
    border: 1px solid #ff4d4d;
    border-radius: 8px;
  }

  .about img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 2px solid #ff4d4d;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .project-card {
    background: #2a2a2a;
    padding: 1rem;
    border-radius: 8px;
    transition: transform 0.3s;
  }

  .project-card:hover {
    transform: scale(1.05);
  }

  .contact a {
    color: #ff4d4d;
    text-decoration: none;
  }

  footer {
    text-align: center;
    padding: 1rem;
    background-color: #ff4d4d;
    color: #1a1a1a;
  }
</style>

<header>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<div class="hero" id="home" transition:fade>
  <h1>Portofolio Saya</h1>
</div>

<section class="section about" id="about" transition:slide>
  <h2>Tentang Saya</h2>
  <img src="/profil.png" alt="Profile" />
  <p> Saya adalah seorang yang sedang mencoba menggapai tujuannya</p>
</section>

<section class="section projects" id="projects" transition:slide>
  <h2>Proyek Saya</h2>
  <div class="projects-grid">
    <div class="project-card">
      <h3>Proyek 1</h3>
      <p> Saya pernah membuat website untuk monitoring web lainnya menggunakan umami .</p>
    </div>
    <div class="project-card">
      <h3>Proyek 2</h3>
      <p>Coming Soon.</p>
    </div>
    <div class="project-card">
      <h3>Proyek 3</h3>
      <p>Coming Soon.</p>
    </div>
  </div>
</section>

<section class="section coDeskripsintact" id="contact" transition:slide>
  <h2>Kontak</h2>
  <p>Hubungi saya melalui: <a href="plitvicegod@gmail.com">plitvicegod@gmail.com</a></p>
  <p>Tautan sosial: <a href="https://github.com/Dexvril">GitHub</a></p>
</section>

<footer>
  <p>&copy; 2025 Nvrl. All rights reserved.</p>
</footer>
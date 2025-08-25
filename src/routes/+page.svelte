<script>
  import { fade, slide } from 'svelte/transition';
</script>

<svelte:head>
  <title>Portofolio - The Non-Existence of You and Me</title>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<style>
  :global(body) {
    background: linear-gradient(180deg, #7a0f1b 0%, #1a1a1a 100%);
    color: #f5f5f5;
    font-family: 'Cinzel', serif;
    margin: 0;
    padding: 0;
  }

  header {
    background: rgba(0, 0, 0, 0.8);
    padding: 1rem;
    text-align: center;
    border-bottom: 3px solid #b71c1c;
  }

  nav a {
    color: #f5f5f5;
    margin: 0 1.2rem;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    transition: color 0.3s, text-shadow 0.3s;
  }

  nav a:hover {
    color: #ff4d4d;
    text-shadow: 0 0 8px #ff4d4d;
  }

  .hero {
    text-align: center;
    padding: 5rem 2rem;
    background: radial-gradient(circle at top, #b71c1c, transparent 70%);
  }

  .hero h1 {
    font-size: 4rem;
    color: #fff;
    text-shadow: 3px 3px 10px #000, -2px -2px 5px #b71c1c;
  }

  .section {
    max-width: 1000px;
    margin: 2rem auto;
    padding: 2rem;
    background: rgba(20, 20, 20, 0.85);
    border: 2px solid #ff4d4d;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(183, 28, 28, 0.5);
  }

  h2 {
    color: #ff4d4d;
    text-shadow: 2px 2px 5px #000;
  }

  .about img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 3px solid #ff4d4d;
    box-shadow: 0 0 15px rgba(183, 28, 28, 0.8);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .project-card {
    background: #1c1c1c;
    padding: 1.5rem;
    border-radius: 8px;
    border: 2px solid #7a0f1b;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .project-card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(255, 77, 77, 0.6);
  }

  .contact a {
    color: #ff4d4d;
    text-decoration: none;
    font-weight: 600;
  }

  .contact a:hover {
    text-shadow: 0 0 8px #ff4d4d;
  }

  footer {
    text-align: center;
    padding: 1rem;
    background-color: #000;
    color: #ff4d4d;
    border-top: 2px solid #7a0f1b;
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
      <p> Saya pernah membuat website untuk monitoring web lainnya menggunakan Umami.</p>
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

<section class="section contact" id="contact" transition:slide>
  <h2>Kontak</h2>
  <p>Hubungi saya melalui: <a href="mailto:plitvicegod@gmail.com">plitvicegod@gmail.com</a></p>
  <p>Tautan sosial: <a href="https://github.com/Dexvril">GitHub</a></p>
</section>

<footer>
  <p>&copy; 2025 Nvrl. All rights reserved.</p>
</footer>

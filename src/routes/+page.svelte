<script>
  import { fade, slide } from "svelte/transition";
  import { onMount } from "svelte";

  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let lastScrollY = 0;
  let hideNav = false;
  let theme = "dark";

  onMount(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) theme = savedTheme;
    else localStorage.setItem("theme", theme);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      hideNav = currentScrollY > lastScrollY && currentScrollY > 50;
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);
  }
</script>

<svelte:head>
  <title>Portofolio Website</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  />
</svelte:head>

<main class={theme}>
  <Header {theme} {hideNav} {toggleTheme} />

  <Hero />

  <section class="section about" id="about" transition:slide>
    <img src="/profil.png" alt="Profile" transition:fade />
    <h2>Tentang Saya</h2>
    <p>
      Perkenalkan nama saya Maulana Abi Nugroho, lulusan SMKN 1 Pandeglang jurusan RPL.
      Saya mendalami bidang kesukaan saya yaitu komputer dan memiliki pengalaman dalam bidang web developer.
    </p>
  </section>

  <section class="section projects" id="projects" transition:slide>
    <h2>Proyek Saya</h2>
    <div class="projects-grid">
      <div class="project-card">
        <h3>Proyek 1</h3>
        <p>Membuat website monitoring web menggunakan Grafana dan Umami.</p>
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

  <Footer />
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    scroll-behavior: smooth;
  }

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
    font-weight: bold; /* 🔥 sudah bold */
    font-size: 1.8rem;
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

  @media (max-width: 768px) {
    .section {
      margin: 1rem;
      padding: 1rem;
    }
  }
</style>

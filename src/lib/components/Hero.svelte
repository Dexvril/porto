<script>
  import { fade } from "svelte/transition";
</script>

<div class="hero" id="home" transition:fade>
  <h1>Portofolio Saya</h1>
</div>

<style>
  .hero {
    text-align: center;
    padding: 5rem 2rem;
    background: radial-gradient(circle at top, var(--accent), transparent 70%);
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    clip-path: polygon(
      5% 10%, 15% 0, 25% 12%, 35% 5%, 50% 15%, 
      65% 0, 75% 10%, 90% 0, 100% 20%, 85% 35%, 
      95% 55%, 75% 70%, 85% 90%, 60% 100%, 
      40% 90%, 25% 100%, 15% 85%, 0 95%, 0 60%, 10% 40%
    );
    opacity: 0.15;
    pointer-events: none;
  }

  .hero h1 {
    font-size: 4rem;
    color: var(--text-color);
    text-shadow: 3px 3px 10px #000, -2px -2px 5px var(--border);
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2.5rem;
    }
  }
</style>

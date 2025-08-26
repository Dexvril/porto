<footer id="contact">
  <div class="contact">
    <p>
      <a href="mailto:plitvicegod@gmail.com">
        <i class="fas fa-envelope"></i> Email
      </a>
      <a href="https://github.com/Dexvril" target="_blank">
        <i class="fab fa-github"></i> GitHub
      </a>
      <a href="https://www.instagram.com/nvrl_abi" target="_blank">
        <i class="fab fa-instagram"></i> Instagram
      </a>
    </p>
  </div>
  <p>&copy; 2025 Nvrl. All rights reserved.</p>
</footer>

<style>
  footer {
    text-align: center;
    padding: 1rem;
    background-color: var(--footer-bg);
    color: var(--accent);
    border-top: 2px solid var(--border);
  }

  .contact a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
    margin: 0 0.5rem;
    transition: color 0.3s, text-shadow 0.3s, transform 0.3s;
  }

  .contact a:hover {
    text-shadow: 0 0 8px var(--accent);
    transform: scale(1.1);
  }

  .contact i {
    margin-right: 0.3rem;
  }

  /* khusus Instagram hover */
  .contact a[href*="instagram"]:hover {
    color: #e1306c;
    text-shadow: 0 0 8px #e1306c;
  }
</style>

<script>
  const currentYear = new Date().getFullYear();
</script>

<footer>
  <div class="footer-content">
    <div class="footer-info">
      <h2>Kunal Bansal</h2>
      <p>Innovating at the intersection of AR/VR, healthcare, and AI</p>
    </div>

    <div class="footer-links">
      <div class="link-group">
        <h3>Navigation</h3>
        <a href="/">Home</a>
        <a href="/projects">Projects & Blog</a>
        <a href="/experience">Work Experience</a>
        <a href="/contact">Contact</a>
      </div>

      <div class="link-group">
        <h3>Connect</h3>
        <a href="https://github.com/qnlbnsl" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/qnlbnsl" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://kunalbans.al" target="_blank" rel="noopener noreferrer">Website</a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; {currentYear} Kunal Bansal. All rights reserved.</p>
  </div>
</footer>

<style>
  footer {
    background-color: var(--secondary);
    padding: 3rem 1rem 1.5rem;
    margin-top: 4rem;
  }

  .footer-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-info h2 {
    font-family: var(--font-secondary);
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
  }

  .footer-info p {
    opacity: 0.8;
    max-width: 300px;
  }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
  }

  .link-group h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
  }

  .link-group h3::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: var(--accent);
  }

  .link-group a {
    display: block;
    color: var(--text);
    text-decoration: none;
    margin-bottom: 0.75rem;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  .link-group a:hover {
    opacity: 1;
    color: var(--accent);
  }

  .footer-bottom {
    border-top: 1px solid var(--border);
    margin-top: 3rem;
    padding-top: 1.5rem;
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .footer-bottom p {
    font-size: 0.875rem;
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr 2fr;
    }
  }
</style>

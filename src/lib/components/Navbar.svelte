<script>
  import { page } from "$app/stores";
  import { theme, toggleTheme } from "$lib/stores/theme";

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<nav>
  <div class="nav-container">
    <div class="logo">
      <a href="/">Kunal Bansal</a>
    </div>

    <button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <div class="nav-links {isMenuOpen ? 'open' : ''}">
      <a href="/" class:active={$page.url.pathname === "/"} on:click={closeMenu}>Home</a>
      <a href="/projects" class:active={$page.url.pathname.startsWith("/projects")} on:click={closeMenu}>Projects & Blog</a>
      <a href="/experience" class:active={$page.url.pathname.startsWith("/experience")} on:click={closeMenu}>Work Experience</a>
      <a href="/contact" class:active={$page.url.pathname.startsWith("/contact")} on:click={closeMenu}>Contact</a>

      <button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
        {#if $theme === "light"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        {/if}
      </button>
    </div>
  </div>
</nav>

<style>
  nav {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: var(--background);
    border-bottom: 1px solid var(--border);
    padding: 1rem 0;
    transition: all 0.3s ease;
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  .logo a {
    font-family: var(--font-secondary);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .logo a:hover {
    color: var(--accent);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-links a {
    color: var(--text);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
  }

  .nav-links a:hover,
  .nav-links a.active {
    color: var(--accent);
  }

  .nav-links a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--accent);
    transition: width 0.3s ease;
  }

  .nav-links a:hover::after,
  .nav-links a.active::after {
    width: 100%;
  }

  .theme-toggle {
    background: none;
    border: none;
    color: var(--text);
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }

  .theme-toggle:hover {
    background-color: var(--secondary);
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: var(--text);
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }

    .nav-links {
      position: fixed;
      top: 60px;
      left: 0;
      right: 0;
      background-color: var(--background);
      flex-direction: column;
      align-items: center;
      padding: 2rem 0;
      gap: 1.5rem;
      border-bottom: 1px solid var(--border);
      transform: translateY(-150%);
      transition: transform 0.3s ease;
      z-index: 99;
    }

    .nav-links.open {
      transform: translateY(0);
    }
  }
</style>

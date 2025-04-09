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

<nav class="sticky top-0 z-50 bg-base-100/95 backdrop-blur-sm border-b border-base-300/50 transition-colors duration-300 shadow-sm">
  <div class="nav-container max-w-screen-xl mx-auto flex justify-between items-center h-16 px-4">
    <div class="logo">
      <a href="/" class="font-secondary text-xl md:text-2xl font-bold text-base-content no-underline transition-colors hover:text-accent">
        Kunal Bansal
      </a>
    </div>

    <!-- Hamburger Menu Toggle - Mobile -->
    <button class="menu-toggle md:hidden btn btn-ghost btn-square" on:click={toggleMenu} aria-label="Toggle menu">
      {#if isMenuOpen}
        <!-- X Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      {:else}
        <!-- Menu Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      {/if}
    </button>

    <!-- Navigation Links & Theme Toggle -->
    <div
      class="nav-links fixed md:static top-16 left-0 right-0 z-40 md:z-auto
             bg-base-100/95 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none flex flex-col md:flex-row items-center md:gap-8
             py-8 md:py-0 gap-6 md:gap-auto
             border-b border-base-300/50 md:border-none
             transform transition-transform duration-300 ease-in-out {isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0"
    >
      <a
        href="/"
        data-active={$page.url.pathname === "/"}
        on:click={closeMenu}
        class="nav-link text-base-content no-underline font-medium transition-colors relative
               hover:text-accent data-[active=true]:text-accent
               after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-accent after:transition-all after:duration-300
               hover:after:w-full data-[active=true]:after:w-full"
      >
        Home
      </a>
      <a
        href="/projects"
        data-active={$page.url.pathname.startsWith("/projects")}
        on:click={closeMenu}
        class="nav-link text-base-content no-underline font-medium transition-colors relative
               hover:text-accent data-[active=true]:text-accent
               after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-accent after:transition-all after:duration-300
               hover:after:w-full data-[active=true]:after:w-full"
      >
        Projects & Blog
      </a>
      <a
        href="/experience"
        data-active={$page.url.pathname.startsWith("/experience")}
        on:click={closeMenu}
        class="nav-link text-base-content no-underline font-medium transition-colors relative
               hover:text-accent data-[active=true]:text-accent
               after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-accent after:transition-all after:duration-300
               hover:after:w-full data-[active=true]:after:w-full"
      >
        Work Experience
      </a>
      <a
        href="/contact"
        data-active={$page.url.pathname.startsWith("/contact")}
        on:click={closeMenu}
        class="nav-link text-base-content no-underline font-medium transition-colors relative
               hover:text-accent data-[active=true]:text-accent
               after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-accent after:transition-all after:duration-300
               hover:after:w-full data-[active=true]:after:w-full"
      >
        Contact
      </a>

      <!-- Theme Toggle Button -->
      <button class="theme-toggle btn btn-ghost btn-circle" on:click={() => { toggleTheme(); closeMenu(); }} aria-label="Toggle theme">
        {#if $theme === 'mytheme-dark'}
        <!-- Sun Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        {:else}
        <!-- Moon Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        {/if}
      </button>
    </div>
  </div>
</nav>

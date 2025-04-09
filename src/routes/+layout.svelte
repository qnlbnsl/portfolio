<script>
  import { onMount } from "svelte";
  import { theme } from "$lib/stores/theme";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "../app.css";

  onMount(() => {
    const savedTheme = localStorage.getItem("theme");
    let currentTheme = "mytheme-dark"; // Default theme

    if (savedTheme) {
      currentTheme = savedTheme;
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      currentTheme = "mytheme-dark";
    }
    theme.set(currentTheme);

    // Apply the theme attribute initially
    // Always set the attribute now
    document.documentElement.setAttribute("data-theme", currentTheme);

    // Update attribute when theme store changes
    const unsubscribe = theme.subscribe((value) => {
      // Always set the attribute to the current theme value
      document.documentElement.setAttribute("data-theme", value);

      // Still save preference to localStorage
      localStorage.setItem("theme", value);
    });

    return () => {
      unsubscribe();
    };
  });
</script>

<div class="app">
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    width: 100%;
  }
</style>

<script>
  import { onMount } from "svelte";
  import { theme } from "$lib/stores/theme";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "../app.css";

  onMount(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      theme.set(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme.set("dark");
    }

    // Apply theme class to document
    const unsubscribe = theme.subscribe((value) => {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(value);
      localStorage.setItem("theme", value);
    });

    return () => {
      unsubscribe();
    };
  });
</script>

<div class="app {$theme}">
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
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;
  }
</style>

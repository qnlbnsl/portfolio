<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import { theme } from "$lib/stores/theme.js";

  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

<section class="hero relative min-h-[90vh] flex items-center justify-center overflow-hidden">
  {#if visible}
    <div class="hero-background absolute inset-0 bg-gradient-to-br from-secondary to-base-100 z-[-2]"></div>
    <div
      class="gradient-overlay absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(var(--accent-rgb),0.08)_0%,transparent_70%)] z-[-1]"
    ></div>
    <div class="hero-content grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-xl p-4 md:p-8 z-10 mx-auto">
      <div
        class="hero-image-container flex justify-center items-center relative order-1 md:order-2"
        in:fade={{ duration: 1200, delay: 500 }}
      >
        <div class="hero-image-wrapper relative w-full max-w-[250px] md:max-w-[350px] aspect-square mx-auto">
          <div
            class="blob-shape absolute top-[-5%] left-[-5%] w-[110%] h-[110%] bg-gradient-to-br from-accent to-accent-focus opacity-20 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] animate-blob"
          ></div>
          <div
            class="image-frame relative w-full h-full overflow-hidden rounded-3xl shadow-xl backface-hidden will-change-transform"
          >
            <img
              src={$theme === "dark" ? "/images/profile_dark.png" : "/images/profile_light.png"}
              alt="Kunal Bansal"
              class="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div
        class="hero-text flex flex-col justify-center text-center md:text-left order-2 md:order-1 p-4 md:p-0"
        in:fade={{ duration: 1000, delay: 300 }}
      >
        <h1 class="font-secondary text-4xl md:text-5xl font-bold leading-tight mb-6 flex flex-col items-center md:items-start">
          <span in:fly={{ y: 30, duration: 800, delay: 500 }}>Welcome to</span>
          <span class="highlight text-accent" in:fly={{ y: 30, duration: 800, delay: 700 }}>the journey</span>
          <span in:fly={{ y: 30, duration: 800, delay: 900 }}>of a tech innovator</span>
        </h1>
        <p class="text-base md:text-lg max-w-lg mb-8 leading-relaxed mx-auto md:mx-0" in:fly={{ y: 20, duration: 800, delay: 1100 }}>
          Bridging cutting-edge research with real-world solutions in AR/VR, healthcare technology, and AI.
        </p>
        <div class="cta-container flex gap-4 flex-wrap justify-center md:justify-start" in:fly={{ y: 20, duration: 800, delay: 1300 }}>
          <a href="/contact" class="cta-button btn btn-accent no-animation md:btn-wide flex-1 md:flex-none"> Let's Collaborate </a>
          <a href="/projects" class="cta-button btn btn-outline btn-accent no-animation md:btn-wide flex-1 md:flex-none"> View Projects </a>
        </div>
      </div>
    </div>
  {/if}
</section>

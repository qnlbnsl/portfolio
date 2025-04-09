<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import { theme } from "$lib/stores/theme.js";

  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

<section class="hero">
  {#if visible}
    <div class="hero-background">
      <div class="gradient-overlay"></div>
    </div>
    <div class="hero-content">
      <div class="hero-image-container" in:fade={{ duration: 1200, delay: 500 }}>
        <div class="hero-image-wrapper">
          <div class="blob-shape"></div>
          <div class="image-frame">
            <img src={$theme === "dark" ? "/images/profile_dark.png" : "/images/profile_light.png"} alt="Kunal Bansal" />
          </div>
        </div>
      </div>
      <div class="hero-text" in:fade={{ duration: 1000, delay: 300 }}>
        <h1>
          <span in:fly={{ y: 30, duration: 800, delay: 500 }}>Welcome to</span>
          <div class="highlight-container">
            <span class="highlight" in:fly={{ y: 30, duration: 800, delay: 700 }}>the journey</span>
          </div>
          <span in:fly={{ y: 30, duration: 800, delay: 900 }}>of a tech innovator</span>
        </h1>
        <p in:fly={{ y: 20, duration: 800, delay: 1100 }}>
          Bridging cutting-edge research with real-world solutions in AR/VR, healthcare technology, and AI.
        </p>
        <div class="cta-container" in:fly={{ y: 20, duration: 800, delay: 1300 }}>
          <a href="/contact" class="cta-button"> Let's Collaborate </a>
          <a href="/projects" class="cta-button secondary"> View Projects </a>
        </div>
      </div>
    </div>
  {/if}
</section>

<style>
  .hero {
    position: relative;
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(135deg, var(--secondary) 0%, var(--background) 100%);
    z-index: -2;
  }

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 50%, rgba(var(--accent-rgb), 0.08) 0%, transparent 70%);
    z-index: -1;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    padding: 2rem;
    z-index: 1;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0;
  }

  .hero-text h1 {
    font-family: var(--font-secondary);
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  .highlight-container {
    display: inline-block;
    width: fit-content;
  }

  .hero-text h1 .highlight {
    color: var(--accent);
    position: relative;
    display: inline-block;
    background-image: linear-gradient(to right, var(--accent) 100%, transparent 0);
    background-position: 0 calc(100% - 0.1em);
    background-repeat: no-repeat;
    background-size: 100% 0.1em;
    padding-bottom: 0.2em;
    opacity: 1;
  }

  .hero-text p {
    font-size: 1.25rem;
    max-width: 600px;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .cta-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .cta-button {
    display: inline-block;
    background-color: var(--accent);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    flex-grow: 1;
    text-align: center;
  }

  .cta-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s ease;
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .cta-button:hover::before {
    left: 100%;
  }

  .cta-button.secondary {
    background-color: transparent;
    color: var(--accent);
    border: 2px solid var(--accent);
  }

  .cta-button.secondary:hover {
    background-color: var(--accent);
    color: white;
  }

  .hero-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .hero-image-wrapper {
    position: relative;
    width: 100%;
    max-width: 350px;
    aspect-ratio: 1;
    margin: 0 auto;
  }

  .blob-shape {
    position: absolute;
    top: -5%;
    left: -5%;
    width: 110%;
    height: 110%;
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-light, #818cf8) 100%);
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    opacity: 0.2;
    animation: blob-animation 8s ease-in-out infinite alternate;
  }

  .image-frame {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 40px;
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.1);
    will-change: transform;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .image-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    filter: blur(0.2px);
  }

  .image-frame:hover img {
    transform: scale(1.05);
  }

  @keyframes blob-animation {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }

  @media (min-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .hero-text {
      text-align: center;
    }

    .hero-text h1 {
      font-size: 2.5rem;
      align-items: center;
    }

    .hero-text p {
      margin-left: auto;
      margin-right: auto;
    }

    .hero-image-wrapper {
      max-width: 250px;
    }
  }
</style>

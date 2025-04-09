<script>
  import CardLarge from "./CardLarge.svelte";

  /**
   * @typedef {Object} Highlight
   * @property {string} id - Unique identifier for the highlight
   * @property {string} title - Title of the highlight
   * @property {string} description - Description of the highlight
   * @property {string} image - URL of the highlight image
   * @property {string} link - URL to the detailed view
   */

  /** @type {{highlights: Highlight[]}} */
  let { highlights } = $props();
</script>

<section class="highlights">
  <h2>Highlighted Work</h2>
  <div class="highlights-grid">
    {#each highlights as highlight}
      <CardLarge image={highlight.image} title={highlight.title} description={highlight.description} link={highlight.link} />
    {/each}
  </div>

  <div class="secondary-cta">
    <a href="/projects" class="secondary-button"> Explore All Projects </a>
  </div>
</section>

<style>
  .highlights {
    padding: 5rem 1rem;
    background-image: linear-gradient(45deg, var(--secondary) 0%, var(--background) 100%);
  }
  .highlights h2 {
    font-family: var(--font-secondary);
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
  }

  .highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .secondary-cta {
    text-align: center;
    margin-top: 3rem;
  }

  .secondary-button {
    display: inline-block;
    background-color: transparent;
    color: var(--accent);
    border: 2px solid var(--accent);
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .secondary-button:hover {
    background-color: var(--accent);
    color: white;
  }

  @media (max-width: 768px) {
    .highlights h2 {
      font-size: 2rem;
    }
  }
</style>

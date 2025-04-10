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

<section class="highlights py-16 md:py-20 px-4 bg-gradient-to-tr from-secondary to-base-100">
  <h2 class="font-secondary text-3xl md:text-4xl text-center mb-12">
    Highlighted Work
  </h2>
  <div class="highlights-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
    {#each highlights as highlight}
      <CardLarge image={highlight.image} title={highlight.title} description={highlight.description} link={highlight.link} />
    {/each}
  </div>

  <div class="secondary-cta text-center mt-12">
    <a href="/projects" class="secondary-button btn btn-outline btn-accent">
      Explore All Projects
    </a>
  </div>
</section>

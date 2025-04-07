<script>
  /**
   * @typedef {Object} Highlight
   * @property {string} id - Unique identifier for the highlight
   * @property {string} title - Title of the highlight
   * @property {string} description - Description of the highlight
   * @property {string} image - URL of the highlight image
   * @property {string} link - URL to the detailed view
   */

  // Explicitly export the prop with JSDoc type
  // /** @type {Highlight[]} */
  // export let highlights;
  /** @type {{highlights: Highlight[]}} */
  let { highlights } = $props();
</script>

<section class="highlights">
  <h2>Highlighted Work</h2>
  <div class="highlights-grid">
    {#each highlights as highlight}
      <div class="highlight-card">
        <div class="highlight-image">
          <img src={highlight.image || "/placeholder.svg"} alt={highlight.title} />
        </div>
        <div class="highlight-content">
          <h3>{highlight.title}</h3>
          <p>{highlight.description}</p>
          <a href={highlight.link} class="highlight-link">Learn more</a>
        </div>
      </div>
    {/each}
  </div>

  <div class="secondary-cta">
    <a href="/projects" class="secondary-button"> Explore All Projects </a>
  </div>
</section>

<style>
  .highlights {
    padding: 5rem 1rem;
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

  .highlight-card {
    background-color: var(--background);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .highlight-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .highlight-image {
    height: 200px;
    overflow: hidden;
  }

  .highlight-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .highlight-card:hover .highlight-image img {
    transform: scale(1.05);
  }

  .highlight-content {
    padding: 1.5rem;
  }

  .highlight-content h3 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .highlight-content p {
    margin-bottom: 1.25rem;
    line-height: 1.6;
  }

  .highlight-link {
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    transition: color 0.3s ease;
  }

  .highlight-link:hover {
    text-decoration: underline;
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

<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { projects } from "$lib/data/projects";
  import { fade } from "svelte/transition";

  let project = null;
  let visible = false;

  onMount(() => {
    const id = $page.params.id;
    project = projects.find((p) => p.id === id);
    visible = true;
  });
</script>

<svelte:head>
  {#if project}
    <title>{project.title} | Kunal Bansal</title>
    <meta name="description" content={project.shortDescription} />
  {:else}
    <title>Project | Kunal Bansal</title>
  {/if}
</svelte:head>

{#if project && visible}
  <article class="project-detail" in:fade={{ duration: 800 }}>
    <header class="project-header">
      <h1>{project.title}</h1>
      <div class="project-meta">
        <div class="project-tags">
          {#each project.categories as category}
            <span class="tag">{category}</span>
          {/each}
        </div>
        {#if project.github}
          <a href={project.github} target="_blank" rel="noopener noreferrer" class="github-link">
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
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path>
            </svg>
            View on GitHub
          </a>
        {/if}
      </div>
    </header>

    <div class="project-image">
      <img src={project.image || "/placeholder.svg"} alt={project.title} />
    </div>

    <div class="project-content">
      <section class="abstract">
        <h2>Abstract</h2>
        <p>{project.abstract}</p>
      </section>

      <section class="technical">
        <h2>Technical Deep Dive</h2>
        <div class="technical-content">
          {#if project.architecture}
            <div class="architecture">
              <h3>Architecture</h3>
              <img src={project.architecture || "/placeholder.svg"} alt="Architecture diagram" />
            </div>
          {/if}

          <div class="technical-details">
            {#each project.technicalDetails as detail}
              <div class="detail-section">
                <h3>{detail.title}</h3>
                <p>{detail.content}</p>
                {#if detail.code}
                  <pre class="code-block"><code>{detail.code}</code></pre>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      </section>

      <section class="outcomes">
        <h2>Outcomes & Lessons Learned</h2>
        <ul class="outcomes-list">
          {#each project.outcomes as outcome}
            <li>{outcome}</li>
          {/each}
        </ul>
      </section>

      <section class="tech-stack">
        <h2>Tech Stack</h2>
        <div class="tech-list">
          {#each project.technologies as tech}
            <span class="tech-item">{tech}</span>
          {/each}
        </div>
      </section>
    </div>
  </article>
{:else}
  <div class="loading">
    <p>Loading project details...</p>
  </div>
{/if}

<style>
  .project-detail {
    max-width: 900px;
    margin: 0 auto;
    padding: 4rem 1rem;
  }

  .project-header {
    margin-bottom: 2rem;
  }

  .project-header h1 {
    font-family: var(--font-secondary);
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .project-meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    background-color: var(--secondary);
    color: var(--text);
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .github-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .github-link:hover {
    text-decoration: underline;
  }

  .project-image {
    margin-bottom: 2rem;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }

  .project-image img {
    width: 100%;
    height: auto;
    display: block;
  }

  .project-content section {
    margin-bottom: 3rem;
  }

  .project-content h2 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;
  }

  .project-content h2::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--accent);
  }

  .abstract p {
    font-size: 1.1rem;
    line-height: 1.8;
  }

  .technical-content {
    display: grid;
    gap: 2rem;
  }

  .architecture {
    margin-bottom: 2rem;
  }

  .architecture h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .architecture img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    border: 1px solid var(--border);
  }

  .technical-details .detail-section {
    margin-bottom: 2rem;
  }

  .technical-details h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .technical-details p {
    margin-bottom: 1rem;
    line-height: 1.7;
  }

  .code-block {
    background-color: var(--secondary);
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    font-family: "Fira Mono", monospace;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .outcomes-list {
    padding-left: 1.5rem;
  }

  .outcomes-list li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .tech-item {
    background-color: var(--secondary);
    color: var(--text);
    padding: 0.5rem 1rem;
    border-radius: 30px;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    font-size: 1.25rem;
    color: var(--text);
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    .technical-content {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .project-header h1 {
      font-size: 2rem;
    }

    .project-content h2 {
      font-size: 1.5rem;
    }
  }
</style>

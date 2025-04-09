<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { projects } from "$lib/data/projects";
  import CardLarge from "$lib/components/CardLarge.svelte";

  let visible = false;
  let activeFilter = "all";
  let filteredProjects = [...projects];

  onMount(() => {
    visible = true;
  });

  /**
   * @param {string} filter
   */
  function filterProjects(filter) {
    activeFilter = filter;

    if (filter === "all") {
      filteredProjects = [...projects];
    } else {
      filteredProjects = projects.filter((project) => project.categories.includes(filter));
    }
  }

  const categories = [
    { id: "all", name: "All" },
    { id: "ai", name: "AI" },
    { id: "ar-vr", name: "AR/VR" },
    { id: "healthcare", name: "Healthcare" },
    { id: "devops", name: "DevOps" },
  ];
</script>

<svelte:head>
  <title>Projects & Blog | Kunal Bansal</title>
  <meta
    name="description"
    content="Explore Kunal Bansal's projects and technical writings across various domains including AI, AR/VR, healthcare tech, and DevOps."
  />
</svelte:head>

<section class="projects">
  <div class="projects-header">
    <h1>Projects & Blog</h1>
    <p>Explore my work and technical writings across various domains</p>
  </div>

  <div class="filters">
    {#each categories as category}
      <button class="filter-button {activeFilter === category.id ? 'active' : ''}" on:click={() => filterProjects(category.id)}>
        {category.name}
      </button>
    {/each}
  </div>

  {#if visible}
    <div class="projects-grid" in:fade={{ duration: 800 }}>
      {#each filteredProjects as project}
        <CardLarge
          image={project.thumbnail || "/placeholder.svg"}
          title={project.title}
          description={project.shortDescription}
          link={`/projects/${project.id}`}
        />
      {/each}
    </div>
  {/if}
</section>

<style>
  .projects {
    padding: 4rem 1rem;
  }

  .projects-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .projects-header h1 {
    font-family: var(--font-secondary);
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .projects-header p {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
    color: var(--text);
    opacity: 0.8;
  }

  .filters {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 3rem;
  }

  .filter-button {
    background-color: transparent;
    border: 1px solid var(--border);
    color: var(--text);
    padding: 0.5rem 1rem;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .filter-button:hover {
    background-color: var(--secondary);
  }

  .filter-button.active {
    background-color: var(--accent);
    color: white;
    border-color: var(--accent);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background-color: var(--background);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    text-decoration: none;
    color: var(--text);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .project-image {
    height: 200px;
    overflow: hidden;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .project-card:hover .project-image img {
    transform: scale(1.05);
  }

  .project-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .project-content h2 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .project-content p {
    margin-bottom: 1.25rem;
    line-height: 1.6;
    flex: 1;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    background-color: var(--secondary);
    color: var(--text);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .projects-header h1 {
      font-size: 2.25rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

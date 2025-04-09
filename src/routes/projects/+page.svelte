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

<section class="projects py-12 md:py-16 px-4">
  <div class="projects-header text-center mb-12 max-w-2xl mx-auto">
    <h1 class="font-secondary text-4xl md:text-5xl mb-4">Projects & Blog</h1>
    <p class="text-lg md:text-xl text-base-content/80">
      Explore my work and technical writings across various domains
    </p>
  </div>

  <div class="filters flex flex-wrap justify-center gap-3 mb-12">
    {#each categories as category}
      <button
        class="filter-button btn btn-sm rounded-full {activeFilter === category.id ? 'btn-accent' : 'btn-neutral'}"
        on:click={() => filterProjects(category.id)}
      >
        {category.name}
      </button>
    {/each}
  </div>

  {#if visible}
    <div class="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto" in:fade={{ duration: 800 }}>
      {#each filteredProjects as project (project.id)}
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

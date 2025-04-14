<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	// Removed: import { projects } from '$lib/data/projects';
	import CardLarge from '$lib/components/CardLarge.svelte';
	import { categories } from '$lib/data/categories'; // Keep categories for filtering buttons

	/** @type {import('./$types').PageData} */
	export let data; // Received from +page.server.js

	let visible = false;
	let activeFilter = 'all';

	// Reactive statement to initialize and update filteredProjects when data changes
	/** @type {import('$lib/types/project.js').ProjectData[]} */
	let filteredProjects = [];
	$: filteredProjects = data?.projects || [];

	onMount(() => {
		visible = true;
		// Initialize filter based on initial data
		filterProjects(activeFilter);
	});

	/**
	 * Filters the projects based on the selected category.
	 * @param {string} filter The category id to filter by ('all' shows all).
	 */
	function filterProjects(filter) {
		activeFilter = filter;

		if (!data?.projects) return; // Guard against data not being ready

		if (filter === 'all') {
			filteredProjects = [...data.projects];
		} else {
			filteredProjects = data.projects.filter((project) => project.categories.includes(filter));
		}
	}
</script>

<svelte:head>
	<title>Projects & Blog | Kunal Bansal</title>
	<meta
		name="description"
		content="Explore Kunal Bansal's projects and technical writings across various domains including AI, AR/VR, healthcare tech, and DevOps."
	/>
</svelte:head>

<section class="projects px-4 py-12 md:py-16">
	<div class="projects-header mx-auto mb-12 max-w-2xl text-center">
		<h1 class="font-secondary mb-4 text-4xl md:text-5xl">Projects & Blog</h1>
		<p class="text-base-content/80 text-lg md:text-xl">
			Explore my work and technical writings across various domains
		</p>
	</div>

	<div class="filters mb-12 flex flex-wrap justify-center gap-3">
		{#each categories as category}
			<button
				class="filter-button btn btn-sm rounded-full {activeFilter === category.id
					? 'btn-accent'
					: 'btn-neutral'}"
				on:click={() => filterProjects(category.id)}
			>
				{category.name}
			</button>
		{/each}
	</div>

	{#if visible}
		<div
			class="projects-grid mx-auto grid max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
			in:fade={{ duration: 800 }}
		>
			{#each filteredProjects as project (project.id)}
				<CardLarge
					image={project.thumbnail || '/placeholder.svg'}
					title={project.title}
					description={project.shortDescription}
					link={`/projects/${project.id}`}
					extraClasses="bg-base-200"
				/>
			{/each}
		</div>
	{/if}
</section>

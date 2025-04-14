<script>
	/**
	 * @typedef {Object} Technology
	 * @property {string} name - The name of the technology
	 * @property {string} [icon] - Optional icon for the technology
	 * @property {string} [category] - Optional category (e.g., Frontend, Backend, DevOps)
	 */

	/** @type {{technologies: Technology[]}} */
	let { technologies } = $props();

	// TODO: Add logic to potentially group technologies by category
</script>

<section class="tech-stack bg-secondary px-4 py-16 md:py-20">
	<div class="tech-stack-content mx-auto max-w-[800px]">
		<h2 class="font-secondary mb-10 text-center text-3xl md:mb-12 md:text-4xl">
			Technologies I Use
		</h2>
		<div
			class="tech-grid grid grid-cols-2 gap-6 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
		>
			{#each technologies as tech}
				<div
					class="tech-item hover:bg-base-100/10 flex flex-col items-center rounded-lg p-4 transition-colors duration-300"
				>
					<!-- TODO: Add icon rendering if available -->
					<span class="text-sm md:text-base">{tech.name}</span>
				</div>
			{:else}
				<p>Technologies data is not available.</p>
			{/each}
		</div>
		<!-- TODO: Add potential category filtering or more sophisticated display -->
	</div>
</section>

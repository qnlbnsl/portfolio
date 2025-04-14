<script>
	import CardLarge from './CardLarge.svelte';

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

<section class="highlights bg-secondary px-4 py-16 md:py-20">
	<h2 class="font-secondary mb-12 text-center text-3xl md:text-4xl">Highlighted Work</h2>
	<div
		class="highlights-grid mx-auto grid max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
	>
		{#each highlights as highlight}
			<CardLarge
				image={highlight.image}
				title={highlight.title}
				description={highlight.description}
				link={highlight.link}
				extraClasses="bg-base-300"
			/>
		{/each}
	</div>

	<div class="secondary-cta mt-12 text-center">
		<a href="/projects" class="secondary-button btn btn-outline btn-accent">
			Explore All Projects
		</a>
	</div>
</section>

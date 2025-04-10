<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { Timeline } from 'flowbite-svelte';
	import HorizontalTimelineItem from '$lib/components/HorizontalTimelineItem.svelte';

	/**
	 * @typedef {import('$lib/types/work_experience.js').WorkExperienceData} WorkExperienceData
	 */

	const { data } = $props();
	let { workExperiences = [] } = data || {};

	let visible = $state(false);
	/**
	 * @type {string | null}
	 */
	let activeItemId = $state(null);

	/**
	 * @type {import('svelte').Component | null}
	 */
	let ActiveComponent = $state(null);

	const timelineData = (workExperiences || []).map((experience) => ({
		id: experience.id || '',
		title: experience.title || '',
		date: experience.startDate ? new Date(experience.startDate).toLocaleDateString('en-US') : '',
		startDate: experience.startDate || ''
	}));

	/**
	 * Loads the content for the selected timeline item.
	 * @param {string} itemId The ID of the item to load.
	 */
	async function loadContent(itemId) {
		activeItemId = itemId;
		// ActiveComponent = null; // Reset or set to a loading component

		try {
			// Load the SVX file based on the selected experience ID
			const expModule = await import(`$lib/work_experience/${itemId}.svx`);
			// Set the component to the default export from the SVX file
			ActiveComponent = expModule.default;
		} catch (err) {
			console.error(`Error loading experience ${itemId}:`, err);
			// Keep ActiveComponent as null to show the error state
		}
	}

	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>Work Experience | Kunal Bansal</title>
	<meta
		name="description"
		content="Explore Kunal Bansal's professional journey and achievements in AR/VR, healthcare tech, DevOps, and more."
	/>
</svelte:head>

<section class="experience px-4 py-12 md:py-16">
	<div class="experience-header mx-auto mb-16 max-w-2xl text-center">
		<h1 class="font-secondary mb-4 text-4xl md:text-5xl">Work Experience</h1>
		<p class="text-base-content/80 text-lg md:text-xl">
			A journey through my professional roles and achievements
		</p>
	</div>

	{#if timelineData && timelineData.length > 0 && visible}
		<Timeline order="horizontal" class="mb-8 overflow-x-auto pb-4">
			{#each timelineData as item (item.id)}
				<HorizontalTimelineItem
					id={item.id}
					title={item.title}
					date={item.date}
					isActive={activeItemId === item.id}
					on:itemClick={() => loadContent(item.id)}
				/>
			{/each}
		</Timeline>

		<div
			class="content-display mx-auto max-w-4xl rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
		>
			{#if ActiveComponent}
				<div transition:fade={{ duration: 300 }}>
					<ActiveComponent />
				</div>
			{:else if activeItemId}
				<p class="text-center text-gray-500 dark:text-gray-400">Loading content...</p>
			{:else}
				<p class="text-center text-gray-500 dark:text-gray-400">
					Select an item from the timeline above to view details.
				</p>
			{/if}
		</div>
	{:else}
		<p class="text-center text-gray-500 dark:text-gray-400">
			{workExperiences ? 'No experience data found.' : 'Loading work experiences...'}
		</p>
	{/if}
</section>

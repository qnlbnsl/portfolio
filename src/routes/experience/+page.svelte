<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { CalendarWeekSolid } from 'flowbite-svelte-icons';

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

	// Sort experiences by date (newest first)
	const sortedExperiences = [...(workExperiences || [])].sort((a, b) => {
		return new Date(b.startDate || '').getTime() - new Date(a.startDate || '').getTime();
	});

	/**
	 * Format a date range and calculate duration
	 * @param {string} startDate - Start date string
	 * @param {string} endDate - End date string or "Present"
	 * @returns {string} Formatted date range with duration
	 */
	function formatDateRange(startDate, endDate) {
		if (!startDate) return '';

		const start = new Date(startDate);
		const end = endDate && endDate.toLowerCase() !== 'present' ? new Date(endDate) : new Date();

		// Format as MMM YYYY
		const startStr = start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
		const endStr =
			endDate && endDate.toLowerCase() !== 'present'
				? end.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
				: 'Present';

		// Calculate duration
		const months =
			(end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
		const years = Math.floor(months / 12);
		const remainingMonths = months % 12;

		let duration = '';
		if (years > 0) {
			duration += `${years} yr${years > 1 ? 's' : ''}`;
		}
		if (remainingMonths > 0 || years === 0) {
			if (duration) duration += ' ';
			duration += `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
		}

		return `${startStr} - ${endStr} · ${duration}`;
	}

	const timelineData = sortedExperiences.map((experience) => ({
		id: experience.id || '',
		title: experience.title || '',
		company: experience.company || '',
		date: experience.startDate ? new Date(experience.startDate).getFullYear().toString() : '',
		dateRange: formatDateRange(experience.startDate, experience.endDate),
		startDate: experience.startDate || '',
		endDate: experience.endDate || 'Present'
	}));

	/**
	 * Loads the content for the selected timeline item.
	 * @param {string} itemId The ID of the item to load.
	 */
	async function loadContent(itemId) {
		activeItemId = itemId;

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

	/**
	 * Handle click on a timeline item
	 * @param {string} itemId - The ID of the clicked item
	 */
	function handleTimelineItemClick(itemId) {
		loadContent(itemId);
	}

	onMount(() => {
		visible = true;
		// Set the first item as active by default
		if (timelineData.length > 0 && !activeItemId) {
			loadContent(timelineData[0].id);
		}
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
		<div class="timeline-container mb-12 w-full overflow-x-auto pb-8">
			<div class="timeline-track min-w-max px-8">
				<div class="relative flex items-start">
					<!-- Timeline items -->
					<div class="relative flex w-full justify-between">
						{#each timelineData as item, i (item.id)}
							<div class="mx-8 first:ml-0 last:mr-0">
								<!-- Timeline Item -->
								<div class="timeline-item flex flex-col items-center">
									<!-- Date circle at the top -->
									<div
										class="date-circle z-10 mb-2 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold
										{activeItemId === item.id
											? 'bg-violet-500 text-white'
											: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100'}"
									>
										{item.date}
									</div>

									<!-- Card container -->
									<div class="card-container pt-2">
										<button
											type="button"
											class="relative max-w-[280px] min-w-[220px] overflow-hidden rounded-lg p-4 text-left transition-all duration-200
												{activeItemId === item.id
												? 'border border-violet-300 bg-violet-50 shadow-md hover:bg-violet-100 dark:border-violet-700 dark:bg-violet-900/20 dark:hover:bg-violet-900/30'
												: 'border border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'}"
											onclick={() => handleTimelineItemClick(item.id)}
											aria-pressed={activeItemId === item.id}
											aria-label={`Select ${item.title}`}
										>
											<!-- Arrow indicator (inside card at bottom) -->
											{#if activeItemId === item.id}
												<div
													class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-violet-400 to-violet-500 dark:from-violet-600 dark:to-violet-400"
												></div>
											{/if}

											<h3
												class="mb-1 text-center text-lg font-semibold
												{activeItemId === item.id
													? 'text-violet-700 dark:text-violet-300'
													: 'text-gray-900 dark:text-white'}"
											>
												{item.title}
											</h3>

											{#if item.company}
												<p
													class="mb-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300"
												>
													{item.company}
												</p>
											{/if}

											<p class="text-center text-xs text-gray-500 dark:text-gray-400">
												{item.dateRange}
											</p>
										</button>
									</div>
								</div>
							</div>
						{/each}
					</div>

					<!-- Timeline line that connects the circles -->
					<div class="absolute top-5 h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
				</div>
			</div>
		</div>

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

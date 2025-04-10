<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import {
		BriefcaseSolid,
		BuildingSolid,
		UsersGroupSolid,
		CloseOutline
	} from 'flowbite-svelte-icons';
	import {
		processExperienceData,
		getCompanyType,
		loadExperienceContent
	} from '$lib/utils/experienceUtils.js';
	import HorizontalTimelineItem from '$lib/components/HorizontalTimelineItem.svelte';
	import CompanyRolesView from '$lib/components/CompanyRolesView.svelte';

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
	 * @type {import('$lib/utils/experienceUtils.js').TimelineItem | null}
	 */
	let activeExperience = $state(null);

	/**
	 * @type {import('svelte').Component | null}
	 */
	let ActiveComponent = $state(null);

	/**
	 * @type {string | null}
	 */
	let selectedRoleId = $state(null);

	/**
	 * @type {import('svelte').Component | null}
	 */
	let RoleComponent = $state(null);

	// Process experience data using the utility functions
	const {
		timelineData,
		companyGroups,
		companyCounts,
		companyTypes,
		startupCompanies,
		consultantCompanies,
		multiRoleCompanies
	} = processExperienceData(workExperiences);

	/**
	 * Handle click on a timeline item
	 * @param {string} itemId - The ID of the clicked item
	 */
	async function handleTimelineItemClick(itemId) {
		const result = await loadExperienceContent(itemId, timelineData);
		activeItemId = result.activeItemId;
		activeExperience = result.activeExperience;
		ActiveComponent = result.ActiveComponent;
		// Reset role selection when changing timeline items
		selectedRoleId = null;
		RoleComponent = null;
	}

	/**
	 * Handle the select event from a timeline item component
	 * @param {CustomEvent<string>} event - Event with item ID
	 */
	function handleItemSelect(event) {
		handleTimelineItemClick(event.detail);
	}

	/**
	 * Handle the selectRole event from the CompanyRolesView component
	 * @param {CustomEvent<string>} event - Event with role ID
	 */
	async function handleRoleSelect(event) {
		const roleId = event.detail;
		selectedRoleId = roleId;

		try {
			// Load the SVX file based on the selected role ID
			const expModule = await import(`$lib/work_experience/${roleId}.svx`);
			// Set the component to the default export from the SVX file
			RoleComponent = expModule.default;
		} catch (err) {
			console.error(`Error loading role ${roleId}:`, err);
			RoleComponent = null;
		}
	}

	/**
	 * Close the role details panel
	 */
	function closeRoleDetails() {
		selectedRoleId = null;
		RoleComponent = null;
	}

	// Create an icons object for the getTypeDetails function
	const icons = { UsersGroupSolid, BriefcaseSolid, BuildingSolid };

	onMount(() => {
		visible = true;
		// Set the first item as active by default
		if (timelineData.length > 0 && !activeItemId) {
			handleTimelineItemClick(timelineData[0].id);
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

	<!-- Experience Type Banners -->
	{#if activeExperience}
		<div class="experience-types mx-auto mb-8 flex max-w-4xl flex-col gap-2">
			{#if activeExperience.company && getCompanyType(activeExperience.company, companyTypes) === 'startup'}
				<div
					class="startup-note rounded-lg border border-violet-200 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-900/20"
				>
					<p class="text-base-content">
						<span class="text-primary font-semibold">Startup Experience:</span> At
						<span class="text-primary font-semibold">{activeExperience.company}</span>, I wore
						multiple hats simultaneously, tackling diverse responsibilities and adapting to rapidly
						changing needs.
					</p>
				</div>
			{:else if activeExperience.company && getCompanyType(activeExperience.company, companyTypes) === 'consultant'}
				<div
					class="consultant-note rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20"
				>
					<p class="text-base-content">
						<span class="font-semibold text-blue-700">Consulting Work:</span> At
						<span class="font-semibold text-blue-700">{activeExperience.company}</span>, I provided
						specialized expertise to clients across various projects and industries.
					</p>
				</div>
			{/if}
		</div>
	{/if}

	{#if timelineData && timelineData.length > 0 && visible}
		<div class="timeline-container mb-12 w-full overflow-x-auto pb-8">
			<div class="timeline-track min-w-max px-8">
				<div class="relative flex items-start">
					<div class="bg-base-300 absolute top-5 h-0.5 w-full"></div>

					<div class="relative z-10 flex w-full justify-center md:justify-between">
						{#each timelineData as item (item.id)}
							<div class="mx-8 first:ml-0 last:mr-0">
								<HorizontalTimelineItem
									{item}
									{activeItemId}
									{companyTypes}
									{companyCounts}
									on:select={handleItemSelect}
								/>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div
			class="content-display border-base-300 bg-base-200 text-base-content mx-auto max-w-4xl rounded-lg border p-6 shadow"
		>
			{#if activeExperience && activeExperience.isCompanyItem && activeExperience.roles?.length}
				<div transition:fade={{ duration: 300 }}>
					<CompanyRolesView company={activeExperience} on:selectRole={handleRoleSelect} />

					{#if selectedRoleId && RoleComponent}
						<div class="pt-6">
							<div class="mb-4 flex items-center justify-between">
								<div class="flex flex-grow items-center">
									<div class="bg-base-300 mr-2 h-px flex-grow"></div>
									<h3 class="text-base-content text-lg font-semibold">Role Details</h3>
									<div class="bg-base-300 ml-2 h-px flex-grow"></div>
								</div>
								<button
									class="bg-base-300 text-base-content ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gray-300"
									on:click={closeRoleDetails}
									aria-label="Close role details"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
							<div transition:fade={{ duration: 300 }} class="bg-base-200 text-base-content">
								<RoleComponent />
							</div>
						</div>
					{/if}
				</div>
			{:else if ActiveComponent}
				<div transition:fade={{ duration: 300 }} class="bg-base-200 text-base-content">
					<ActiveComponent />
				</div>
			{:else if activeItemId}
				<p class="text-center text-gray-500">Loading content...</p>
			{:else}
				<p class="text-center text-gray-500">
					Select an item from the timeline above to view details.
				</p>
			{/if}
		</div>
	{:else}
		<p class="text-center text-gray-500">
			{workExperiences ? 'No experience data found.' : 'Loading work experiences...'}
		</p>
	{/if}
</section>

<!-- src/lib/components/CompanyRolesView.svelte -->
<script>
	import { createEventDispatcher } from 'svelte';
	import { getTypeDetails } from '$lib/utils/experienceUtils.js';
	import { BriefcaseSolid, BuildingSolid, UsersGroupSolid } from 'flowbite-svelte-icons';

	/**
	 * @typedef {import('$lib/utils/experienceUtils.js').TimelineItem} TimelineItem
	 */

	/** @type {TimelineItem} */
	export let company;

	// Create an icons object for the getTypeDetails function
	const icons = { UsersGroupSolid, BriefcaseSolid, BuildingSolid };

	// Get company details
	const companyType = company.type || 'regular';
	const typeDetails = getTypeDetails(companyType, icons);

	// Sort roles by date (newest first)
	let sortedRoles = [...(company.roles || [])].sort(
		(a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
	);

	const dispatch = createEventDispatcher();

	/**
	 * Handle click on a role
	 * @param {string} roleId - The ID of the clicked role
	 */
	function handleRoleClick(roleId) {
		dispatch('selectRole', roleId);
	}
</script>

<div class="company-roles-container bg-base-200 text-base-content">
	<div class="company-header mb-6 flex items-center">
		<div
			class="mr-3 flex h-12 w-12 items-center justify-center rounded-full border {typeDetails.colors}"
		>
			<svelte:component this={typeDetails.icon} class="h-6 w-6" />
		</div>
		<div>
			<h2 class="text-base-content text-2xl font-bold">{company.company}</h2>
			<p class="text-base-content/80 text-sm">{company.dateRange}</p>
		</div>
	</div>

	<div class="roles-info border-base-300 bg-base-100 text-base-content mb-6 rounded-lg border p-4">
		<p class="text-base-content">
			<span class="font-semibold">Multiple Roles:</span>
			I've held {company.roles?.length || 0} different positions at {company.company}, demonstrating
			my growth and versatility within the organization.
		</p>
	</div>

	<div class="roles-timeline mb-6">
		<div class="mb-3 flex items-center">
			<div class="bg-base-300 mr-2 h-px flex-grow"></div>
			<h3 class="text-base-content text-lg font-semibold">Role Timeline</h3>
			<div class="bg-base-300 ml-2 h-px flex-grow"></div>
		</div>

		<div class="roles-grid grid gap-4 md:grid-cols-2">
			{#each sortedRoles as role}
				<button
					class="role-card border-base-300 bg-base-200 text-base-content hover:border-primary flex h-full flex-col rounded-lg border p-5 text-left shadow-sm transition-all hover:bg-[var(--color-card-hover)] hover:shadow-md"
					on:click={() => handleRoleClick(role.id)}
				>
					<h4 class="text-base-content mb-2 text-xl font-semibold">{role.title}</h4>
					<p class="text-base-content/80 mb-3 text-sm">{role.dateRange}</p>
					<div class="mt-auto">
						<span class="text-primary text-xs font-medium">Click to view details</span>
					</div>
				</button>
			{/each}
		</div>
	</div>

	<div class="mt-4 text-center">
		<p class="text-base-content/80 text-sm">
			Select a role above to view detailed information about that position
		</p>
	</div>
</div>

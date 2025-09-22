<!-- src/lib/components/CompanyRolesView.svelte -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { getTypeDetails } from '$lib/utils/experienceUtils.js';
	import {
		BriefcaseSolid,
		BuildingSolid,
		UsersGroupSolid,
		ArrowRightAltSolid,
		CalendarEditSolid,
		ClockSolid
	} from 'flowbite-svelte-icons';

	/**
	 * @typedef {import('$lib/utils/experienceUtils.js').TimelineItem} TimelineItem
	 * @typedef {import('$lib/utils/experienceUtils.js').Role} Role
	 */

	import type { Role } from '$lib/utils/experienceUtils.js';

	/** @type {TimelineItem} */
	export let company;

	// Create an icons object for the getTypeDetails function
	const icons = { UsersGroupSolid, BriefcaseSolid, BuildingSolid };

	// Get company details
	const companyType = company.type || 'regular';
	const typeDetails = getTypeDetails(companyType, icons);

	// Sort roles by date (newest first) - using period field for sorting
	let sortedRoles = [...(company.roles || [])].sort((a, b) => {
		// Extract year from period string for sorting
		const getYear = (period: string) => {
			const match = period.match(/(\d{4})/);
			return match ? parseInt(match[1]) : 0;
		};
		return getYear(b.period) - getYear(a.period);
	});

	const dispatch = createEventDispatcher();

	/**
	 * Handle click on a role
	 * @param {string} roleId - The ID of the clicked role
	 */
	function handleRoleClick(roleId: string) {
		dispatch('selectRole', roleId);
	}

	/**
	 * Get a preview of the role's first achievement
	 * @param {Role} role - The role object
	 * @returns {string} - Truncated preview text
	 */
	function getRolePreview(role: Role): string {
		if (role.achievements && role.achievements.length > 0) {
			const firstAchievement = role.achievements[0];
			return firstAchievement.length > 80
				? firstAchievement.substring(0, 80) + '...'
				: firstAchievement;
		}
		return 'Click to explore this role and see detailed achievements.';
	}

	/**
	 * Calculate duration in a readable format
	 * @param {string} dateRange - The date range string
	 * @returns {string} - Formatted duration
	 */
	function getDuration(dateRange: string): string {
		// Extract years and months from the date range
		const match = dateRange.match(/(\d+)\s*yrs?\s*(\d+)?\s*mos?/);
		if (match) {
			const years = match[1];
			const months = match[2] || '0';
			return `${years}y ${months}m`;
		}
		return dateRange;
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
		<div class="mb-6 flex items-center">
			<div class="bg-base-300 mr-2 h-px flex-grow"></div>
			<h3 class="text-base-content text-lg font-semibold">Role Timeline</h3>
			<div class="bg-base-300 ml-2 h-px flex-grow"></div>
		</div>

		<div class="roles-grid grid gap-6 md:grid-cols-2">
			{#each sortedRoles as role, index}
				<button
					class="role-card group border-base-300 from-base-100 to-base-200 hover:border-primary hover:shadow-primary/10 relative overflow-hidden rounded-xl border bg-gradient-to-br p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					on:click={() => handleRoleClick(role.id)}
				>
					<!-- Role Header -->
					<div class="mb-4 flex items-start justify-between">
						<div class="flex-1">
							<h4
								class="text-base-content group-hover:text-primary mb-1 text-xl font-bold transition-colors"
							>
								{role.title}
							</h4>
							<div class="text-base-content/70 flex items-center gap-2 text-sm">
								<CalendarEditSolid class="h-4 w-4" />
								<span>{role.dateRange}</span>
							</div>
						</div>
						<div
							class="bg-primary/10 text-primary ml-4 flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-all group-hover:opacity-100"
						>
							<ArrowRightAltSolid class="h-4 w-4" />
						</div>
					</div>

					<!-- Role Preview -->
					<div class="mb-4">
						<p class="text-base-content/80 text-sm leading-relaxed">
							{getRolePreview(role)}
						</p>
					</div>

					<!-- Technologies Preview -->
					{#if role.technologies && role.technologies.length > 0}
						<div class="mb-4">
							<div class="flex flex-wrap gap-1">
								{#each role.technologies.slice(0, 3) as tech}
									<span
										class="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs font-medium"
									>
										{tech}
									</span>
								{/each}
								{#if role.technologies.length > 3}
									<span
										class="bg-base-300 text-base-content/60 rounded-full px-2 py-1 text-xs font-medium"
									>
										+{role.technologies.length - 3} more
									</span>
								{/if}
							</div>
						</div>
					{/if}

					<!-- Call to Action -->
					<div class="flex items-center justify-between">
						<span class="text-primary text-sm font-semibold group-hover:underline">
							View Full Details
						</span>
						<div class="text-base-content/60 flex items-center gap-1 text-xs">
							<ClockSolid class="h-3 w-3" />
							<span>{getDuration(role.dateRange)}</span>
						</div>
					</div>

					<!-- Hover Effect Overlay -->
					<div
						class="from-primary/5 absolute inset-0 bg-gradient-to-r to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>
				</button>
			{/each}
		</div>
	</div>

	<div class="mt-6 text-center">
		<div class="bg-primary/5 border-primary/20 rounded-lg border p-4">
			<p class="text-base-content/80 text-sm">
				<strong class="text-primary">💡 Tip:</strong> Click on any role card above to explore detailed
				achievements, technologies, and impact in a focused view.
			</p>
		</div>
	</div>
</div>

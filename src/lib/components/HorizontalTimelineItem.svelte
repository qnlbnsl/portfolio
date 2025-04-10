<!-- src/lib/components/HorizontalTimelineItem.svelte -->
<script>
	import { createEventDispatcher } from 'svelte';
	import { getCompanyType, hasMultipleRoles } from '$lib/utils/experienceUtils.js';

	/**
	 * @typedef {import('$lib/utils/experienceUtils.js').TimelineItem} TimelineItem
	 */

	/** @type {TimelineItem} */
	export let item;
	/** @type {string | null} */
	export let activeItemId = null;
	/** @type {Record<string, string>} */
	export let companyTypes = {};
	/** @type {Record<string, number>} */
	export let companyCounts = {};

	const dispatch = createEventDispatcher();
	const isActive = activeItemId === item.id;

	// Calculate these values internally
	const companyType = getCompanyType(item.company, companyTypes);
	// console.log(companyType);
	const hasMultiRole = hasMultipleRoles(item.company, companyCounts);
	const isStartup = companyType === 'startup';
	const isConsultant = companyType === 'consultant';

	// Helper functions to generate classes based on type and active state
	function getDateCircleClasses() {
		if (isStartup) {
			return isActive
				? 'border-2 border-primary bg-primary text-white'
				: 'bg-violet-100 text-violet-900';
		} else if (isConsultant) {
			return isActive
				? 'border-2 border-blue-300 bg-blue-600 text-white'
				: 'bg-blue-100 text-blue-900';
		} else {
			return isActive ? 'bg-primary text-white' : 'bg-base-300 text-base-content';
		}
	}

	function getCardClasses() {
		if (isActive) {
			if (isStartup) {
				return 'border border-primary bg-base-200 text-base-content shadow-md hover:bg-[var(--color-card-hover)]';
			} else if (isConsultant) {
				return 'border border-blue-300 bg-base-200 text-base-content shadow-md hover:bg-[var(--color-card-hover)]';
			} else {
				return 'border border-primary bg-base-200 text-base-content shadow-md hover:bg-[var(--color-card-hover)]';
			}
		} else {
			if (isStartup) {
				return 'border border-base-300 bg-base-200 text-base-content shadow-sm hover:bg-[var(--color-card-hover)] hover:border-primary';
			} else if (isConsultant) {
				return 'border border-base-300 bg-base-200 text-base-content shadow-sm hover:bg-[var(--color-card-hover)] hover:border-blue-300';
			} else {
				return 'border border-base-300 bg-base-200 text-base-content shadow-sm hover:bg-[var(--color-card-hover)]';
			}
		}
	}

	function getArrowClasses() {
		if (isStartup) {
			return 'bg-gradient-to-r from-primary to-violet-500';
		} else if (isConsultant) {
			return 'bg-gradient-to-r from-blue-400 to-blue-500';
		} else {
			return 'bg-gradient-to-r from-primary to-violet-500';
		}
	}

	function getRoleBadgeClasses() {
		if (isStartup) {
			return 'bg-violet-100 text-violet-800 border border-violet-200';
		} else if (isConsultant) {
			return 'bg-blue-100 text-blue-800 border border-blue-200';
		} else {
			return 'bg-base-100 text-base-content border border-base-300';
		}
	}

	function getTitleClasses() {
		if (isActive) {
			if (isStartup) {
				return 'text-primary';
			} else if (isConsultant) {
				return 'text-blue-700';
			} else {
				return 'text-primary';
			}
		} else {
			return 'text-base-content';
		}
	}

	function getCompanyClasses() {
		if (isStartup) {
			return 'text-violet-600';
		} else if (isConsultant) {
			return 'text-blue-600';
		} else {
			return 'text-base-content/80';
		}
	}

	function getRoleBadgeText() {
		if (hasMultiRole) {
			return 'Multi-role';
		} else if (isStartup) {
			return 'Startup';
		} else if (isConsultant) {
			return 'Consultant';
		}
		return '';
	}

	/**
	 * Handle click on the timeline item
	 */
	function handleClick() {
		dispatch('select', item.id);
	}
</script>

<!-- Timeline Item -->
<div class="timeline-item flex flex-col items-center">
	<!-- Date circle at the top -->
	<div
		class="date-circle z-10 mb-2 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold {getDateCircleClasses()}"
	>
		{item.date}
	</div>

	<!-- Card container -->
	<div class="card-container pt-2">
		<button
			type="button"
			class="relative max-w-[280px] min-w-[220px] overflow-hidden rounded-lg p-4 text-left transition-all duration-200 {getCardClasses()}"
			on:click={handleClick}
			aria-pressed={isActive}
			aria-label={`Select ${item.isCompanyItem ? item.company : item.title}`}
		>
			<!-- Arrow indicator -->
			{#if isActive}
				<div class="absolute inset-x-0 bottom-0 h-1 {getArrowClasses()}"></div>
			{/if}

			<!-- Role type indicator -->
			{#if hasMultiRole || isStartup || isConsultant}
				<div class="mb-2 flex w-full justify-center">
					<span
						class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium {getRoleBadgeClasses()}"
					>
						{getRoleBadgeText()}
					</span>
				</div>
			{/if}

			<!-- For company items, display the company name as the title -->
			{#if item.isCompanyItem}
				<h3 class="mb-1 text-center text-lg font-semibold {getTitleClasses()}">
					{item.company}
				</h3>
				<p class="mb-2 text-center text-sm font-medium {getCompanyClasses()}">
					{item.roles?.length || 0} Positions
				</p>
			{:else}
				<h3 class="mb-1 text-center text-lg font-semibold {getTitleClasses()}">
					{item.title}
				</h3>
				{#if item.company}
					<p class="mb-2 text-center text-sm font-medium {getCompanyClasses()}">
						{item.company}
					</p>
				{/if}
			{/if}

			<p class="text-base-content/70 text-center text-xs">
				{item.dateRange}
			</p>
		</button>
	</div>
</div>

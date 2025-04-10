<!-- src/lib/components/HorizontalTimelineItem.svelte -->
<script>
	// import { createEventDispatcher } from 'svelte';
	import { getCompanyType, hasMultipleRoles } from '$lib/utils/experienceUtils.js';

	/** @typedef {import('$lib/utils/experienceUtils.js').TimelineItem} TimelineItem */

	// Define the expected props structure for type checking
	/**
	 * @typedef {Object} Props
	 * @property {TimelineItem} item
	 * @property {string | null} [activeItemId]
	 * @property {Record<string, string>} [companyTypes]
	 * @property {Record<string, number>} [companyCounts]
	 * @property {(id: string) => void} [onSelect]
	 */

	// Use $props() in runes mode with correct type
	/** @type {Props} */
	let {
		item,
		activeItemId = null,
		companyTypes = {},
		companyCounts = {},
		onSelect = () => {}
	} = $props();

	// Reactive calculations for state
	let isActive = $derived(activeItemId === item.id);
	let companyType = $derived(getCompanyType(item.company, companyTypes));
	let hasMultiRole = $derived(hasMultipleRoles(item.company, companyCounts));
	let isStartup = $derived(companyType === 'startup');
	let isConsultant = $derived(companyType === 'consultant');

	// --- Reactive Style Variables ---

	let dateCircleClasses = $derived(() => {
		let base =
			'date-circle z-10 mb-2 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold';
		if (isActive) {
			if (isStartup) return `${base} border-2 border-primary bg-primary text-white`;
			if (isConsultant) return `${base} border-2 border-blue-300 bg-blue-600 text-white`;
			return `${base} bg-primary text-white`;
		} else {
			if (isStartup) return `${base} bg-violet-100 text-violet-900`;
			if (isConsultant) return `${base} bg-blue-100 text-blue-900`;
			return `${base} bg-base-300 text-base-content`;
		}
	});

	let cardClasses = $derived(() => {
		let base =
			'relative max-w-[280px] min-w-[220px] overflow-hidden rounded-lg p-4 text-left transition-all duration-200 bg-base-200 text-base-content hover:shadow-md hover:bg-[var(--color-card-hover)]';
		if (isActive) {
			if (isStartup) return `${base} border border-primary shadow-md`;
			if (isConsultant) return `${base} border border-blue-300 shadow-md`;
			return `${base} border border-primary shadow-md`;
		} else {
			if (isStartup) return `${base} border border-base-300 shadow-sm hover:border-primary`;
			if (isConsultant) return `${base} border border-base-300 shadow-sm hover:border-blue-300`;
			return `${base} border border-base-300 shadow-sm`;
		}
	});

	let arrowClasses = $derived(() => {
		let base = 'absolute inset-x-0 bottom-0 h-1';
		if (isStartup) return `${base} bg-gradient-to-r from-primary to-violet-500`;
		if (isConsultant) return `${base} bg-gradient-to-r from-blue-400 to-blue-500`;
		return `${base} bg-gradient-to-r from-primary to-violet-500`;
	});

	let roleBadgeClasses = $derived(() => {
		let base = 'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium border';
		if (isStartup) return `${base} bg-violet-100 text-violet-800 border-violet-200`;
		if (isConsultant) return `${base} bg-blue-100 text-blue-800 border-blue-200`;
		return `${base} bg-base-100 text-base-content border-base-300`; // For Multi-role on non-startup/consultant
	});

	let titleClasses = $derived(() => {
		let base = 'mb-1 text-center text-lg font-semibold';
		if (isActive) {
			if (isStartup) return `${base} text-primary`;
			if (isConsultant) return `${base} text-blue-700`;
			return `${base} text-primary`;
		} else {
			return `${base} text-base-content`;
		}
	});

	let companyClasses = $derived(() => {
		let base = 'mb-2 text-center text-sm font-medium';
		if (isStartup) return `${base} text-violet-600`;
		if (isConsultant) return `${base} text-blue-600`;
		return `${base} text-base-content/80`;
	});

	let dateRangeClasses = $derived('text-center text-xs text-base-content/70');

	// --- End Reactive Style Variables ---

	function getRoleBadgeText() {
		if (hasMultiRole) return 'Multi-role';
		if (isStartup) return 'Startup';
		if (isConsultant) return 'Consultant';
		return '';
	}

	/**
	 * Handle click on the timeline item
	 */
	function handleClick() {
		onSelect(item.id);
	}
</script>

<!-- Timeline Item -->
<div class="timeline-item flex flex-col items-center">
	<!-- Date circle -->
	<div class={dateCircleClasses}>
		{item.date}
	</div>

	<!-- Card container -->
	<div class="card-container pt-2">
		<button
			type="button"
			class={cardClasses}
			onclick={handleClick}
			aria-pressed={isActive}
			aria-label={`Select ${item.isCompanyItem ? item.company : item.title}`}
		>
			<!-- Arrow indicator -->
			{#if isActive}
				<div class={arrowClasses}></div>
			{/if}

			<!-- Role type indicator -->
			{#if hasMultiRole || isStartup || isConsultant}
				<div class="mb-2 flex w-full justify-center">
					<span class={roleBadgeClasses}>
						{getRoleBadgeText()}
					</span>
				</div>
			{/if}

			<!-- Content: Title/Company -->
			{#if item.isCompanyItem}
				<h3 class={titleClasses}>
					{item.company}
				</h3>
				<p class={companyClasses}>
					{item.roles?.length || 0} Positions
				</p>
			{:else}
				<h3 class={titleClasses}>
					{item.title}
				</h3>
				{#if item.company}
					<p class={companyClasses}>
						{item.company}
					</p>
				{/if}
			{/if}

			<!-- Date Range -->
			<p class={dateRangeClasses}>
				{item.dateRange}
			</p>
		</button>
	</div>
</div>

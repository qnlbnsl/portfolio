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
			'date-circle z-10 mb-2 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold border-2';
		if (isActive) {
			if (isStartup) return `${base} border-primary bg-primary text-white`;
			if (isConsultant) return `${base} border-info bg-info text-white`;
			return `${base} border-primary bg-primary text-white`;
		} else {
			if (isStartup) return `${base} border-primary bg-base-200 text-base-content shadow-sm`;
			if (isConsultant) return `${base} border-info bg-base-200 text-base-content shadow-sm`;
			return `${base} border-base-300 bg-base-200 text-base-content shadow-sm`;
		}
	});

	let cardClasses = $derived(() => {
		let base =
			'relative max-w-[280px] min-w-[220px] overflow-hidden rounded-lg p-4 text-left transition-all duration-200 bg-base-200 text-base-content hover:shadow-md hover:bg-[var(--color-card-hover)]';
		if (isActive) {
			if (isStartup) return `${base} border border-primary shadow-md`;
			if (isConsultant) return `${base} border border-info shadow-md`;
			return `${base} border border-primary shadow-md`;
		} else {
			if (isStartup) return `${base} border border-base-300 shadow-sm hover:border-primary`;
			if (isConsultant) return `${base} border border-base-300 shadow-sm hover:border-info`;
			return `${base} border border-base-300 shadow-sm`;
		}
	});

	let arrowClasses = $derived(() => {
		let base = 'absolute inset-x-0 bottom-0 h-1';
		if (isStartup) return `${base} bg-primary`;
		if (isConsultant) return `${base} bg-info`;
		return `${base} bg-primary`;
	});

	let roleBadgeClasses = $derived(() => {
		let base = 'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium border';
		if (isStartup) return `${base} bg-primary/10 text-primary border-primary/20`;
		if (isConsultant) return `${base} bg-info/10 text-info border-info/20`;
		return `${base} bg-base-100 text-base-content border-base-300`; // For Multi-role on non-startup/consultant
	});

	let titleClasses = $derived(() => {
		let base = 'mb-1 text-center text-lg font-semibold';
		if (isActive) {
			if (isStartup) return `${base} text-primary`;
			if (isConsultant) return `${base} text-info`;
			return `${base} text-primary`;
		} else {
			return `${base} text-base-content`;
		}
	});

	let companyClasses = $derived(() => {
		let base = 'mb-2 text-center text-sm font-medium';
		if (isStartup) return `${base} text-primary`;
		if (isConsultant) return `${base} text-info`;
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

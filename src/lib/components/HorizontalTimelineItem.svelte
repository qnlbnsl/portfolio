<!-- src/lib/components/HorizontalTimelineItem.svelte -->
<script>
	import { createEventDispatcher } from 'svelte';
	import { CalendarWeekSolid } from 'flowbite-svelte-icons';

	/** @type {string} */
	export let title;
	/** @type {string} */
	export let date;
	/** @type {string} */
	export let id;
	/** @type {boolean} */
	export let isActive = false;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('itemClick', id);
	}
</script>

<div class="timeline-item flex flex-col items-center">
	<!-- Date circle at the top -->
	<div class="date-circle z-10 mb-2 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
		class:bg-primary-600={isActive}
		class:text-white={isActive}
		class:bg-gray-200={!isActive}
		class:dark:bg-gray-700={!isActive}
		class:text-gray-800={!isActive}
		class:dark:text-gray-100={!isActive}>
		{date}
	</div>

	<!-- Card container -->
	<div class="card-container">
		<button type="button"
			class="relative min-w-[180px] max-w-[220px] rounded-lg border p-4 text-left shadow-sm transition-all duration-200"
			class:bg-primary-50={isActive}
			class:border-primary-500={isActive}
			class:shadow-md={isActive}
			class:hover:bg-primary-100={isActive}
			class:dark:bg-primary-900/20={isActive}
			class:dark:border-primary-400={isActive}
			class:dark:hover:bg-primary-900/30={isActive}
			class:bg-white={!isActive}
			class:border-gray-200={!isActive}
			class:hover:bg-gray-50={!isActive}
			class:dark:bg-gray-800={!isActive}
			class:dark:border-gray-700={!isActive}
			class:dark:hover:bg-gray-700={!isActive}
			on:click={handleClick}
			aria-pressed={isActive}
			aria-label={`Select ${title}`}>
			<h3 class="mb-2 text-center text-lg font-semibold"
				class:text-primary-700={isActive}
				class:dark:text-primary-300={isActive}
				class:text-gray-900={!isActive}
				class:dark:text-white={!isActive}>
				{title}
			</h3>

			<!-- Arrow pointing down at bottom -->
			{#if isActive}
				<div class="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 transform border-b border-r"
					class:border-primary-500={isActive}
					class:dark:border-primary-400={isActive}>
				</div>
			{/if}
		</button>
	</div>
</div>

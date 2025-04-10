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

<li class="relative mb-6 sm:mb-0">
	<div class="flex flex-shrink-0 items-center">
		<div
			class:bg-primary-200={isActive}
			class:dark:bg-primary-900={isActive}
			class:bg-gray-100={!isActive}
			class:dark:bg-gray-700={!isActive}
			class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900"
		>
			<CalendarWeekSolid
				class="h-3 w-3 {isActive
					? 'text-primary-600 dark:text-primary-400'
					: 'text-gray-500 dark:text-gray-400'}"
			/>
		</div>
		<div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div>
	</div>
	<button
		type="button"
		class="flex w-full items-start text-left"
		on:click={handleClick}
		aria-pressed={isActive}
		aria-label={`Select ${title}`}
	>
		<div class="mt-3 flex-grow sm:pe-8">
			<h3
				class:text-primary-700={isActive}
				class:dark:text-primary-300={isActive}
				class:text-gray-900={!isActive}
				class:dark:text-white={!isActive}
				class="text-lg font-semibold"
			>
				{title}
			</h3>
			<time
				class:text-primary-600={isActive}
				class:dark:text-primary-400={isActive}
				class:text-gray-500={!isActive}
				class:dark:text-gray-400={!isActive}
				class="mb-2 block text-sm leading-none font-normal"
			>
				{date}
			</time>
		</div>
	</button>
</li>

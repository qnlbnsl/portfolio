<script>
	/**
	 * @typedef {Object} CardSmallProps
	 * @property {string} name - The name of the card
	 * @property {string} icon - The icon component string identifier
	 */

	/** @type {CardSmallProps} */
	let { name, icon } = $props();
	import Brain from '$lib/svg/brain.svelte';
	import HeartPulse from '$lib/svg/heart-pulse.svelte';
	import Server from '$lib/svg/server.svelte';
	import VrHeadset from '$lib/svg/vr-headset.svelte';

	import { BrainOutline, HeartOutline, ServerOutline } from 'flowbite-svelte-icons';
</script>

<div
	class="skill-card bg-base-300 text-base-content flex h-full w-full flex-col justify-between rounded-lg p-4 text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg md:p-6"
>
	<div class="text-accent mb-3 flex h-8 flex-grow-0 items-center justify-center md:mb-4 md:h-10">
		{#if icon === 'Brain'}
			<div class="h-6 w-6 md:h-8 md:w-8">
				<BrainOutline class="h-6 w-6 md:h-8 md:w-8" />
			</div>
		{:else if icon === 'HeartPulse'}
			<div class="h-6 w-6 md:h-8 md:w-8">
				<HeartOutline class="h-6 w-6 md:h-8 md:w-8" />
			</div>
		{:else if icon === 'Server'}
			<div class="h-6 w-6 md:h-8 md:w-8">
				<ServerOutline class="h-6 w-6 md:h-8 md:w-8" />
			</div>
		{:else if icon === 'VrHeadset'}
			<div class="h-6 w-6 md:h-8 md:w-8">
				<VrHeadset classNames="h-6 w-6 shrink-0 md:h-8 md:w-8" />
			</div>
		{/if}
	</div>

	<h4 class="m-0 flex-grow-0 text-xs font-semibold md:text-sm">{name}</h4>
</div>

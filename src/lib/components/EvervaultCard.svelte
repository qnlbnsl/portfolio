<script lang="ts">
	import { useMotionTemplate, useMotionValue, Motion, type MotionValue } from 'svelte-motion';
	import { cn } from '$lib/utils/cn';
	import { onMount } from 'svelte';

	export let className: string | undefined = undefined;
	export let parentMouseX: MotionValue<number>;
	export let parentMouseY: MotionValue<number>;

	let randomString = '';
	let preGeneratedStrings: string[] = [];
	let currentStringIndex = 0;
	const numStrings = 10;
	const stringLength = 15000;

	onMount(() => {
		for (let i = 0; i < numStrings; i++) {
			preGeneratedStrings.push(generateRandomString(stringLength));
		}
		randomString = preGeneratedStrings[0];
	});

	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const generateRandomString = (length: number) => {
		let result = '';
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		return result;
	};

	const cycleRandomString = () => {
		currentStringIndex = (currentStringIndex + 1) % preGeneratedStrings.length;
		randomString = preGeneratedStrings[currentStringIndex];
	};

	let maskImage = useMotionTemplate`radial-gradient(250px at ${parentMouseX}px ${parentMouseY}px, white, transparent)`;

	$: if (
		parentMouseX &&
		$parentMouseX !== undefined &&
		parentMouseY &&
		$parentMouseY !== undefined
	) {
		cycleRandomString();
	}
</script>

<div
	class={cn(
		'relative flex aspect-square h-full w-full items-center justify-center bg-transparent p-0.5',
		className
	)}
>
	<div
		role="group"
		class="group/card relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-transparent"
	>
		<div class="pointer-events-none">
			<div
				class="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"
			></div>
			<Motion let:motion style={{ maskImage: maskImage, WebkitMaskImage: maskImage }}>
				<div
					use:motion
					class="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 backdrop-blur-xl transition duration-500 group-hover/card:opacity-100"
				></div>
			</Motion>
			<Motion let:motion style={{ maskImage: maskImage, WebkitMaskImage: maskImage }}>
				<div
					use:motion
					class="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
				>
					<p
						class="absolute inset-x-0 h-full font-mono text-xs font-bold break-words whitespace-pre-wrap text-white transition duration-500"
					>
						{randomString}
					</p>
				</div>
			</Motion>
		</div>
	</div>
</div>

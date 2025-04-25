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
	const baseStringLength = 2000; // Length of the base random string

	// Variables to store dimensions
	let width = 0;
	let height = 0;
	let calculatedStringLength = 0; // Store the calculated length
	let lastWidth = 0; // Store the last width used for generation
	let lastHeight = 0; // Store the last height used for generation

	// Regenerate strings when dimensions are known and change
	$: {
		if (width > 0 && height > 0) {
			// Only recalculate if dimensions have actually changed
			if (width !== lastWidth || height !== lastHeight) {
				// Estimate character size
				const charWidthEstimate = 7.2;
				const charHeightEstimate = 16;

				const charsPerWidth = Math.ceil(width / charWidthEstimate);
				const linesPerHeight = Math.ceil(height / charHeightEstimate);

				// Calculate total characters needed (with buffer)
				calculatedStringLength = Math.ceil(charsPerWidth * linesPerHeight * 1.2);
				// console.log(
				// 	'Regenerating strings for dimensions:',
				// 	width,
				// 	height,
				// 	'-> total chars:',
				// 	calculatedStringLength
				// );

				// Calculate how many times the base string needs to be repeated
				const repeatCount = Math.max(1, Math.ceil(calculatedStringLength / baseStringLength));

				preGeneratedStrings = [];
				for (let i = 0; i < numStrings; i++) {
					// Generate a unique base string
					const baseString = generateRandomString(baseStringLength);
					// Repeat the base string to fill the required length
					preGeneratedStrings.push(
						baseString.repeat(repeatCount).substring(0, calculatedStringLength)
					);
				}

				// Set initial string
				if (preGeneratedStrings.length > 0) {
					randomString = preGeneratedStrings[0];
					currentStringIndex = 0;
				}

				// Update last known dimensions
				lastWidth = width;
				lastHeight = height;
			}
		}
	}

	// Removed onMount for string generation as it's handled reactively now

	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const generateRandomString = (length: number) => {
		// Ensure length is at least 1 to avoid errors
		length = Math.max(1, length);
		let result = '';
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	};

	const cycleRandomString = () => {
		// Only cycle if strings have been generated
		if (preGeneratedStrings.length > 0) {
			currentStringIndex = (currentStringIndex + 1) % preGeneratedStrings.length;
			randomString = preGeneratedStrings[currentStringIndex];
		}
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
	bind:clientWidth={width}
	bind:clientHeight={height}
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

<script lang="ts">
	import { Motion, useTransform, AnimatePresence, useMotionValue, useSpring } from 'svelte-motion';
	import { theme } from '$lib/stores/theme'; // Assuming this path and store name
	import { browser } from '$app/environment'; // Import browser
	import { type TechStack } from '$lib/data/tech_stack';

	const { items } = $props<{ items: TechStack[] }>();

	const basedir = '/logos/';
	let hoveredIndex = $state<number>(0); // 0 is not hovered
	const springConfig = { stiffness: 100, damping: 5 };
	const x = useMotionValue(0); // going to set this value on mouse move
	// rotate the tooltip
	const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
	// translate the tooltip
	const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
	const handleMouseMove = (event: MouseEvent) => {
		// @ts-ignore
		const halfWidth = event.target?.offsetWidth / 2;
		x.set(event.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
	};
</script>

<section
	class="hero relative flex min-h-[30vh] flex-col items-center justify-center gap-y-8 overflow-hidden border-t-2 border-white/20 p-8"
>
	<div class="from-secondary to-base-100 absolute inset-0 z-[-2] bg-gradient-to-br"></div>
	<div
		class="gradient-overlay absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_70%_50%,rgba(var(--accent-rgb),0.08)_0%,transparent_70%)]"
	></div>

	<div class="flex flex-col items-center">
		<h2 class="font-secondary mb-12 text-center text-3xl md:text-4xl">Tech Stack</h2>
		<p
			class="mb-4 text-center text-base leading-relaxed md:mb-6 md:text-left md:text-lg md:leading-loose"
		>
			These are the technologies I've used in my projects and work.
		</p>
	</div>
	<div class="group grid grid-cols-4 place-items-center gap-4 md:flex md:flex-row md:gap-0">
		{#each items as item, idx (item.name)}
			<div
				class="relative md:m-2"
				onmouseenter={() => (hoveredIndex = item.id)}
				onmouseleave={() => (hoveredIndex = 0)}
				role="tooltip"
			>
				<AnimatePresence show={true}>
					{#if hoveredIndex === item.id}
						<Motion
							let:motion
							initial={{ opacity: 0, y: 20, scale: 0.6 }}
							animate={{
								opacity: 1,
								y: 0,
								scale: 1,
								transition: {
									type: 'spring',
									stiffness: 260,
									damping: 10
								}
							}}
							exit={{ opacity: 0, y: 20, scale: 0.6 }}
							style={{
								translateX: translateX,
								rotate: rotate,
								whiteSpace: 'nowrap'
							}}
						>
							<div
								use:motion
								class="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
							>
								<div
									class="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
								></div>
								<div
									class="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent"
								></div>
								<div class="relative z-30 text-base font-bold whitespace-nowrap text-white">
									{item.name}
								</div>
								<div class="text-xs whitespace-nowrap text-white">{item.description}</div>
							</div>
						</Motion>
					{/if}
				</AnimatePresence>
				{#if browser}
					<img
						onmousemove={handleMouseMove}
						height={100}
						width={100}
						src={$theme === 'dark' && item.iconDark ? basedir + item.iconDark : basedir + item.icon}
						alt={item.name}
						class="relative !m-0 h-14 w-14 rounded-full object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
					/>
				{/if}
			</div>
		{/each}
	</div>
</section>

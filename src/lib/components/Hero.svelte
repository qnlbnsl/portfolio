<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme.js';
	import { useMotionValue } from 'svelte-motion';

	import EvervaultCard from './EvervaultCard.svelte';

	let heroMouseX = useMotionValue(0);
	let heroMouseY = useMotionValue(0);

	let visible = false;
	onMount(() => {
		visible = true;
	});

	function handleHeroMouseMove(event: MouseEvent) {
		const target = event.currentTarget as HTMLElement;
		if (!target) return;
		const rect = target.getBoundingClientRect();
		heroMouseX.set(event.clientX - rect.left);
		heroMouseY.set(event.clientY - rect.top);
	}
</script>

<section
	class="hero relative flex min-h-[90vh] items-center justify-center overflow-hidden"
	on:mousemove={handleHeroMouseMove}
	role="group"
>
	{#if visible}
		<div
			class="hero-background from-secondary to-base-100 absolute inset-0 z-[-2] bg-gradient-to-br"
		></div>
		<div
			class="gradient-overlay absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_70%_50%,rgba(var(--accent-rgb),0.08)_0%,transparent_70%)]"
		></div>
		<div
			class="hero-content z-10 mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-8 p-4 md:grid-cols-2 md:p-8"
		>
			<div class="absolute inset-0 z-[-1]">
				<EvervaultCard parentMouseX={heroMouseX} parentMouseY={heroMouseY} />
			</div>
			<div
				class="hero-image-container relative order-1 flex items-center justify-center md:order-2"
				in:fade={{ duration: 1200, delay: 500 }}
			>
				<div
					class="hero-image-wrapper relative mx-auto aspect-square w-full max-w-[250px] md:max-w-[350px]"
				>
					<div
						class="blob-shape from-accent to-accent-focus animate-blob absolute top-[-5%] left-[-5%] h-[110%] w-[110%] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bg-gradient-to-br opacity-20"
					></div>
					<div
						class="image-frame relative h-full w-full overflow-hidden rounded-3xl shadow-xl will-change-transform backface-hidden"
					>
						<img
							src={$theme === 'dark' ? '/images/profile_dark.png' : '/images/profile_light.png'}
							alt="Kunal Bansal"
							class="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
						/>
					</div>
				</div>
			</div>
			<div
				class="hero-text order-2 flex flex-col justify-center p-4 text-center md:order-1 md:p-0 md:text-left"
				in:fade={{ duration: 1000, delay: 300 }}
			>
				<h1
					class="font-secondary mb-6 flex flex-col items-center text-4xl leading-tight font-bold md:items-start md:text-5xl"
				>
					<span in:fly={{ y: 30, duration: 800, delay: 500 }}>Welcome to</span>
					<span class="highlight text-accent" in:fly={{ y: 30, duration: 800, delay: 700 }}
						>the journey</span
					>
					<span in:fly={{ y: 30, duration: 800, delay: 900 }}>of a tech innovator</span>
				</h1>
				<p
					class="mx-auto mb-8 max-w-lg text-base leading-relaxed md:mx-0 md:text-lg"
					in:fly={{ y: 20, duration: 800, delay: 1100 }}
				>
					Bridging cutting-edge research with real-world solutions in AR/VR, healthcare technology,
					and AI.
				</p>
				<div
					class="cta-container flex flex-wrap justify-center gap-4 md:justify-start"
					in:fly={{ y: 20, duration: 800, delay: 1300 }}
				>
					<a
						href="/contact"
						class="cta-button btn btn-accent no-animation md:btn-wide flex-1 md:flex-none"
					>
						Let's Collaborate
					</a>
					<a
						href="/projects"
						class="cta-button btn btn-accent no-animation md:btn-wide flex-1 md:flex-none"
					>
						View Projects
					</a>
				</div>
			</div>
		</div>
	{/if}
</section>

<style>
	/* Blob animation */
	@keyframes blob {
		0% {
			border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
		}
		50% {
			border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
		}
		100% {
			border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
		}
	}

	.animate-blob {
		animation: blob 8s ease-in-out infinite;
	}
</style>

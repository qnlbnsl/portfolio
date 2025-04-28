<script>
	/**
	 * @typedef {Object} Skill
	 * @property {string} name - The name of the skill
	 * @property {string} icon - The icon of the skill
	 */

	/** @type {{skills: Skill[]}} */
	let { skills } = $props();

	import CardSmall from './CardSmall.svelte';
</script>

<section class="narrative bg-secondary border-t-2 border-white/20 px-4 py-16 md:py-20">
	<div class="narrative-content mx-auto max-w-[800px]">
		<h2 class="font-secondary mb-6 text-center text-3xl md:mb-8 md:text-4xl">My Story</h2>
		<p
			class="mb-4 text-center text-base leading-relaxed md:mb-6 md:text-left md:text-lg md:leading-loose"
		>
			As a technologist with a passion for innovation, I've dedicated my career to solving complex
			problems at the intersection of emerging technologies and healthcare. My journey began with a
			foundation in cybersecurity and information systems, which evolved into a multifaceted role
			spanning DevOps, software development, and R&D program management.
		</p>
		<p
			class="mb-4 text-center text-base leading-relaxed md:mb-6 md:text-left md:text-lg md:leading-loose"
		>
			What drives me is the potential of technology to transform healthcare delivery and education.
			From developing patented AR/VR solutions for medical training to implementing secure,
			compliant infrastructure for sensitive healthcare data, I've consistently pushed the
			boundaries of what's possible.
		</p>
		<p class="text-center text-base leading-relaxed md:text-left md:text-lg md:leading-loose">
			Today, I continue to explore new frontiers in AI and immersive technologies, always with an
			eye toward practical applications that make a meaningful difference.
		</p>
	</div>

	<div class="skills mx-auto mt-12 max-w-[800px] md:mt-16">
		<h3 class="mb-6 text-center text-xl md:mb-8 md:text-2xl">Key Strengths</h3>
		<div
			class="skills-grid grid grid-cols-2 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] sm:gap-6"
		>
			{#each skills as skill}
				<CardSmall name={skill.name} icon={skill.icon} />
			{/each}
		</div>
	</div>
</section>

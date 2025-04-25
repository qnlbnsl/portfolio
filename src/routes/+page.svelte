<script>
	import Hero from '$lib/components/Hero.svelte';
	import Narrative from '$lib/components/Narrative.svelte';
	import Highlights from '$lib/components/Highlights.svelte';
	import { skills } from '$lib/data/skills';
	import { techStack } from '$lib/data/tech_stack';
	import TechStackComponent from '$lib/components/TechStack.svelte';
	/** @type {import('./$types').PageData} */
	export let data;

	// Access highlights from the data prop passed by the load function
	const { highlights } = data;
</script>

<svelte:head>
	<title>Kunal Bansal - Portfolio</title>
	<meta
		name="description"
		content="Portfolio of Kunal Bansal, innovating at the intersection of AR/VR, healthcare, and AI"
	/>
</svelte:head>

<Hero />
<Narrative {skills} />
<TechStackComponent items={techStack} />
<Highlights {highlights} />

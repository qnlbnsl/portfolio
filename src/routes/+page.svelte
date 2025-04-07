<script>
  import Hero from "$lib/components/Hero.svelte";
  import Narrative from "$lib/components/Narrative.svelte";
  import Highlights from "$lib/components/Highlights.svelte";
  import { highlights } from "$lib/data/highlights";
  import { skills } from "$lib/data/skills";
</script>

<svelte:head>
  <title>Kunal Bansal - Portfolio</title>
  <meta name="description" content="Portfolio of Kunal Bansal, innovating at the intersection of AR/VR, healthcare, and AI" />
</svelte:head>

<Hero />
<Narrative {skills} />
<Highlights {highlights} />

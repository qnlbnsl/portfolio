<script>
  /**
   * @typedef {Object} Skill
   * @property {string} name - The name of the skill
   * @property {string} icon - The icon of the skill
   */

  /** @type {{skills: Skill[]}} */
  let { skills } = $props();

  import CardSmall from "./CardSmall.svelte";
</script>

<section class="narrative bg-secondary py-16 md:py-20 px-4">
  <div class="narrative-content max-w-[800px] mx-auto">
    <h2 class="font-secondary text-3xl md:text-4xl mb-6 md:mb-8 text-center">
      My Story
    </h2>
    <p class="text-base md:text-lg leading-relaxed md:leading-loose mb-4 md:mb-6 text-center md:text-left">
      As a technologist with a passion for innovation, I've dedicated my career to solving complex problems at the intersection of emerging
      technologies and healthcare. My journey began with a foundation in cybersecurity and information systems, which evolved into a
      multifaceted role spanning DevOps, software development, and R&D program management.
    </p>
    <p class="text-base md:text-lg leading-relaxed md:leading-loose mb-4 md:mb-6 text-center md:text-left">
      What drives me is the potential of technology to transform healthcare delivery and education. From developing patented AR/VR solutions
      for medical training to implementing secure, compliant infrastructure for sensitive healthcare data, I've consistently pushed the
      boundaries of what's possible.
    </p>
    <p class="text-base md:text-lg leading-relaxed md:leading-loose text-center md:text-left">
      Today, I continue to explore new frontiers in AI and immersive technologies, always with an eye toward practical applications that
      make a meaningful difference.
    </p>
  </div>

  <div class="skills max-w-[800px] mx-auto mt-12 md:mt-16">
    <h3 class="text-xl md:text-2xl text-center mb-6 md:mb-8">Key Strengths</h3>
    <div class="skills-grid grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 sm:gap-6">
      {#each skills as skill}
        <CardSmall name={skill.name} icon={skill.icon} />
      {/each}
    </div>
  </div>
</section>

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

<section class="narrative">
  <div class="narrative-content">
    <h2>My Story</h2>
    <p>
      As a technologist with a passion for innovation, I've dedicated my career to solving complex problems at the intersection of emerging
      technologies and healthcare. My journey began with a foundation in cybersecurity and information systems, which evolved into a
      multifaceted role spanning DevOps, software development, and R&D program management.
    </p>
    <p>
      What drives me is the potential of technology to transform healthcare delivery and education. From developing patented AR/VR solutions
      for medical training to implementing secure, compliant infrastructure for sensitive healthcare data, I've consistently pushed the
      boundaries of what's possible.
    </p>
    <p>
      Today, I continue to explore new frontiers in AI and immersive technologies, always with an eye toward practical applications that
      make a meaningful difference.
    </p>
  </div>

  <div class="skills">
    <h3>Key Strengths</h3>
    <div class="skills-grid">
      {#each skills as skill}
        <CardSmall name={skill.name} icon={skill.icon} />
      {/each}
    </div>
  </div>
</section>

<style>
  .narrative {
    background-color: var(--secondary);
    padding: 5rem 1rem;
  }

  .narrative-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .narrative-content h2 {
    font-family: var(--font-secondary);
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .narrative-content p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  .skills {
    max-width: 800px;
    margin: 4rem auto 0;
  }

  .skills h3 {
    font-size: 1.75rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
  }

  /* Screens where auto-fit might result in 3 columns, causing an orphan */
  /* We can keep auto-fit here for flexibility, but adjust min */
  @media (max-width: 768px) {
    /* Adjust grid for medium screens */
    .skills-grid {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); /* Adjust min slightly */
      gap: 1rem;
    }

    .narrative-content h2 {
      font-size: 2rem;
      text-align: center;
    }

    .narrative-content p {
      text-align: center;
    }
  }

  /* Force 2 columns below this width to prevent the 3+1 orphan issue */
  @media (max-width: 675px) {
    /* Center the inline-grid within the .skills container */
    .skills {
      text-align: center;
    }

    .skills-grid {
      display: inline-grid; /* Make grid shrink-wrap */
      grid-template-columns: repeat(2, minmax(140px, 1fr));
      gap: 1.5rem;
    }
  }
</style>

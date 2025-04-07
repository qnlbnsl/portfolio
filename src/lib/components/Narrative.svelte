<script>
  /**
   * @typedef {Object} Skill
   * @property {string} name - The name of the skill
   * @property {string} icon - The icon of the skill
   */

  /** @type {{skills: Skill[]}} */
  let { skills } = $props();
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
        <div class="skill-card">
          <div class="skill-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {#if skill.icon === "server"}
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              {:else if skill.icon === "vr-headset"}
                <path d="M3 12h18"></path>
                <path d="M3 12a6.5 6.5 0 0 1 6.5-6.5H12"></path>
                <path d="M21 12a6.5 6.5 0 0 0-6.5-6.5H12"></path>
                <path d="M3 12a6.5 6.5 0 0 0 6.5 6.5H12"></path>
                <path d="M21 12a6.5 6.5 0 0 1-6.5 6.5H12"></path>
              {:else if skill.icon === "heart-pulse"}
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path>
                <path d="M3.22 12H9.5l.5-1 2 4 .5-2 2 2h5.27"></path>
              {:else if skill.icon === "brain"}
                <path
                  d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"
                ></path>
                <path
                  d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"
                ></path>
              {/if}
            </svg>
          </div>
          <h4>{skill.name}</h4>
        </div>
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

  .skill-card {
    background-color: var(--background);
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }

  .skill-icon {
    margin-bottom: 1rem;
    color: var(--accent);
  }

  .skill-card h4 {
    font-weight: 600;
    margin: 0;
  }

  @media (max-width: 768px) {
    .narrative-content h2 {
      font-size: 2rem;
    }
  }
</style>

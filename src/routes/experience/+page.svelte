<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { experience } from "$lib/data/experience";

  let visible = false;
  let activeRole = null;

  onMount(() => {
    visible = true;
  });

  function toggleRole(role) {
    if (activeRole === role.id) {
      activeRole = null;
    } else {
      activeRole = role.id;
    }
  }
</script>

<svelte:head>
  <title>Work Experience | Kunal Bansal</title>
  <meta
    name="description"
    content="Explore Kunal Bansal's professional journey and achievements in AR/VR, healthcare tech, DevOps, and more."
  />
</svelte:head>

<section class="experience">
  <div class="experience-header">
    <h1>Work Experience</h1>
    <p>A journey through my professional roles and achievements</p>
  </div>

  {#if visible}
    <div class="timeline" in:fade={{ duration: 800 }}>
      {#each experience as company, i}
        <div class="timeline-item" in:fly={{ y: 50, duration: 800, delay: i * 200 }}>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="company-header">
              <h2>{company.name}</h2>
              <p class="company-location">{company.location}</p>
              <p class="company-duration">{company.duration}</p>
            </div>

            <div class="roles">
              {#each company.roles as role}
                <div class="role">
                  <button
                    class="role-header {activeRole === role.id ? 'active' : ''}"
                    on:click={() => toggleRole(role)}
                    aria-expanded={activeRole === role.id}
                  >
                    <h3>{role.title}</h3>
                    <svg
                      class="toggle-icon {activeRole === role.id ? 'open' : ''}"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  {#if activeRole === role.id}
                    <div class="role-details" transition:fade={{ duration: 300 }}>
                      <div class="achievements">
                        <h4>Key Achievements</h4>
                        <ul>
                          {#each role.achievements as achievement}
                            <li>{achievement}</li>
                          {/each}
                        </ul>
                      </div>

                      <div class="technologies">
                        <h4>Technologies & Skills</h4>
                        <div class="tech-list">
                          {#each role.technologies as tech}
                            <span class="tech-item">{tech}</span>
                          {/each}
                        </div>
                      </div>

                      {#if role.link}
                        <a href={role.link} class="role-link">Read more about this role</a>
                      {/if}
                    </div>
                  {/if}
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</section>

<style>
  .experience {
    padding: 4rem 1rem;
  }

  .experience-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .experience-header h1 {
    font-family: var(--font-secondary);
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .experience-header p {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
    color: var(--text);
    opacity: 0.8;
  }

  .timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
  }

  .timeline::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20px;
    width: 2px;
    background-color: var(--accent);
  }

  .timeline-item {
    position: relative;
    margin-bottom: 3rem;
    padding-left: 60px;
  }

  .timeline-marker {
    position: absolute;
    top: 0;
    left: 11px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--accent);
    border: 4px solid var(--background);
    z-index: 1;
  }

  .timeline-content {
    background-color: var(--background);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }

  .company-header {
    margin-bottom: 1.5rem;
  }

  .company-header h2 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }

  .company-location {
    font-size: 1rem;
    opacity: 0.8;
    margin-bottom: 0.25rem;
  }

  .company-duration {
    font-size: 1rem;
    font-weight: 500;
    color: var(--accent);
  }

  .roles {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .role {
    border-top: 1px solid var(--border);
    padding-top: 1rem;
  }

  .role-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    text-align: left;
    color: var(--text);
  }

  .role-header h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    transition: color 0.3s ease;
  }

  .role-header:hover h3 {
    color: var(--accent);
  }

  .role-header.active h3 {
    color: var(--accent);
  }

  .toggle-icon {
    transition: transform 0.3s ease;
  }

  .toggle-icon.open {
    transform: rotate(180deg);
  }

  .role-details {
    padding-top: 1.25rem;
  }

  .achievements,
  .technologies {
    margin-bottom: 1.5rem;
  }

  .achievements h4,
  .technologies h4 {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
    color: var(--text);
    opacity: 0.9;
  }

  .achievements ul {
    padding-left: 1.5rem;
  }

  .achievements li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-item {
    background-color: var(--secondary);
    color: var(--text);
    padding: 0.25rem 0.75rem;
    border-radius: 30px;
    font-size: 0.875rem;
  }

  .role-link {
    display: inline-block;
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
    margin-top: 1rem;
    transition: color 0.3s ease;
  }

  .role-link:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    .timeline::before {
      left: 50%;
      margin-left: -1px;
    }

    .timeline-item {
      padding-left: 0;
    }

    .timeline-item:nth-child(odd) {
      padding-right: calc(50% + 30px);
    }

    .timeline-item:nth-child(even) {
      padding-left: calc(50% + 30px);
    }

    .timeline-marker {
      left: 50%;
      margin-left: -10px;
    }
  }

  @media (max-width: 768px) {
    .experience-header h1 {
      font-size: 2.25rem;
    }
  }
</style>

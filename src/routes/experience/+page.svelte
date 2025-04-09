<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { experience } from "$lib/data/experience";
  import { Timeline, TimelineItem } from "flowbite-svelte";
	import { CalendarWeekSolid } from "flowbite-svelte-icons";
  let visible = false;
  /** @type {string | number | null} */
  let activeRole = null;

  onMount(() => {
    visible = false;
  });

  /**
	 * @param {{ id: string; title: string; achievements: string[]; technologies: string[]; link: string; } | { id: string; title: string; achievements: string[]; technologies: string[]; link: null; }} role
	 */
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

<section class="experience py-12 md:py-16 px-4">
  <div class="experience-header text-center mb-16 max-w-2xl mx-auto">
    <h1 class="font-secondary text-4xl md:text-5xl mb-4">Work Experience</h1>
    <p class="text-lg md:text-xl text-base-content/80">A journey through my professional roles and achievements</p>
  </div>
  <Timeline order="horizontal">
    <TimelineItem title="Flowbite Library v1.0.0" date="Released on December 2nd, 2021">
      <svelte:fragment slot="icon">
        <div class="flex items-center">
          <div class="flex z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" ></div>
        </div>
      </svelte:fragment>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
    </TimelineItem>
    <TimelineItem title="Flowbite Library v1.2.0" date="Released on December 23th, 2021">
      <svelte:fragment slot="icon">
        <div class="flex items-center">
          <div class="flex z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
      </svelte:fragment>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
    </TimelineItem>
    <TimelineItem title="Flowbite Library v1.3.0" date="Released on January 5th, 2021">
      <svelte:fragment slot="icon">
        <div class="flex items-center">
          <div class="flex z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
      </svelte:fragment>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
    </TimelineItem>
  </Timeline>
  {#if visible}
    <!-- Timeline Container -->
    <div class="timeline relative max-w-3xl mx-auto" in:fade={{ duration: 800 }}>
      <!-- Central Line -->
      <div class="absolute top-0 bottom-0 left-4 md:left-1/2 md:-ml-px w-0.5 bg-accent hidden md:block"></div>

      {#each experience as company, i}
        <!-- Timeline Item -->
        <div class="timeline-item relative mb-12 pl-12 md:pl-0" in:fly={{ y: 50, duration: 800, delay: i * 150 }}>
          <!-- Mobile Line Connector -->
          <div class="absolute top-0 bottom-0 left-4 w-0.5 bg-accent md:hidden"></div>
          <!-- Marker -->
          <div class="timeline-marker absolute top-1 left-0 md:left-1/2 w-5 h-5 rounded-full bg-accent border-4 border-base-100 z-10 md:-ml-2.5"></div>

          <!-- Content -->
          <div class="timeline-content bg-base-100 border border-base-300/50 rounded-lg p-4 md:p-6 shadow-md
                      md:relative
                      odd:md:left-0 even:md:left-[calc(50%+2rem)]">

            <div class="company-header mb-6">
              <h2 class="text-xl md:text-2xl font-semibold mb-1">{company.name}</h2>
              <p class="text-base-content/80 text-sm mb-0.5">{company.location}</p>
              <p class="text-accent text-sm font-medium">{company.duration}</p>
            </div>

            <div class="roles flex flex-col gap-4">
              {#each company.roles as role}
                <div class="role border-t border-base-300/50 pt-4">
                  <button
                    class="role-header flex justify-between items-center w-full bg-transparent border-none p-0 cursor-pointer text-left group"
                    on:click={() => toggleRole(role)}
                    aria-expanded={activeRole === role.id}
                  >
                    <h3 class="text-base md:text-lg font-semibold m-0 transition-colors group-hover:text-accent {activeRole === role.id ? 'text-accent' : 'text-base-content'}">
                      {role.title}
                    </h3>
                    <svg
                      class="toggle-icon w-5 h-5 text-base-content/70 transition-transform {activeRole === role.id ? 'rotate-180' : ''}"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  {#if activeRole === role.id}
                    <div class="role-details pt-5 text-sm leading-relaxed" transition:fade={{ duration: 300 }}>
                      <div class="achievements mb-6">
                        <h4 class="text-base font-medium mb-3 text-base-content/90">Key Achievements</h4>
                        <ul class="list-disc pl-5 space-y-2">
                          {#each role.achievements as achievement}
                            <li>{achievement}</li>
                          {/each}
                        </ul>
                      </div>

                      <div class="technologies mb-6">
                        <h4 class="text-base font-medium mb-3 text-base-content/90">Technologies & Skills</h4>
                        <div class="tech-list flex flex-wrap gap-2">
                          {#each role.technologies as tech}
                            <span class="tech-item badge badge-secondary badge-outline text-xs py-2.5 px-2.5">{tech}</span>
                          {/each}
                        </div>
                      </div>

                      {#if role.link}
                        <a href={role.link} class="role-link inline-block text-accent font-medium mt-4 hover:underline text-sm">
                          Read more about this role
                        </a>
                      {/if}
                    </div>
                  {/if}
                </div>
              {/each}
            </div>
          </div> <!-- End Timeline Content -->
        </div> <!-- End Timeline Item -->
      {/each}
    </div> <!-- End Timeline -->
  {/if}
</section>

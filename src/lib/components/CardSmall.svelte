<script>
  /**
   * @typedef {Object} CardSmallProps
   * @property {string} name - The name of the card
   * @property {string} icon - The icon component string identifier
   */

  /** @type {CardSmallProps} */
  let { name, icon } = $props();
  import Brain from "$lib/svg/brain.svelte";
  import HeartPulse from "$lib/svg/heart-pulse.svelte";
  import Server from "$lib/svg/server.svelte";
  import VrHeadset from "$lib/svg/vr-headset.svelte";
</script>

<div
  class="skill-card flex flex-col justify-between bg-base-300 text-base-content p-4 md:p-6 rounded-lg text-center w-full h-full transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
>
  <div class="mb-3 md:mb-4 flex justify-center items-center h-8 md:h-10 text-accent flex-grow-0">
    {#if icon === "Brain"}
      <div class="w-6 h-6 md:w-8 md:h-8">
        <Brain />
      </div>
    {:else if icon === "HeartPulse"}
      <div class="w-6 h-6 md:w-8 md:h-8">
        <HeartPulse />
      </div>
    {:else if icon === "Server"}
      <div class="w-6 h-6 md:w-8 md:h-8">
        <Server />
      </div>
    {:else if icon === "VrHeadset"}
      <div class="w-6 h-6 md:w-8 md:h-8">
        <VrHeadset />
      </div>
    {/if}
  </div>

  <h4 class="font-semibold text-xs md:text-sm m-0 flex-grow-0">{name}</h4>
</div>

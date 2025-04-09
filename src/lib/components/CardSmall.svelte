<script>
  /**
   * @typedef {Object} CardSmallProps
   * @property {string} name - The name of the card
   * @property {string} icon - The icon component
   */

  /** @type {CardSmallProps} */
  let { name, icon } = $props();
  import Brain from "$lib/svg/brain.svelte";
  import HeartPulse from "$lib/svg/heart-pulse.svelte";
  import Server from "$lib/svg/server.svelte";
  import VrHeadset from "$lib/svg/vr-headset.svelte";
</script>

<div class="skill-card">
  {#if icon === "Brain"}
    <Brain />
  {:else if icon === "HeartPulse"}
    <HeartPulse />
  {:else if icon === "Server"}
    <Server />
  {:else if icon === "VrHeadset"}
    <VrHeadset />
  {/if}

  <h4>{name}</h4>
</div>

<style>
  .skill-card {
    background-color: var(--background);
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    max-width: 170px;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }

  .skill-card h4 {
    font-weight: 600;
    margin: 0;
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    .skill-card h4 {
      font-size: 0.8rem;
    }
  }
</style>

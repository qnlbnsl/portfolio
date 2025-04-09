<script>
  let { currentColor = "#818cf8" } = $props();
</script>

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
    <path d="M3 12h18"></path>
    <path d="M3 12a6.5 6.5 0 0 1 6.5-6.5H12"></path>
    <path d="M21 12a6.5 6.5 0 0 0-6.5-6.5H12"></path>
    <path d="M3 12a6.5 6.5 0 0 0 6.5 6.5H12"></path>
    <path d="M21 12a6.5 6.5 0 0 1-6.5 6.5H12"></path>
  </svg>
</div>

<style>
  .skill-icon {
    margin-bottom: 1rem;
    color: var(--accent);
    display: flex;
    justify-content: center;
  }
</style>

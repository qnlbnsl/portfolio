<script>
  let { image, title, description, link } = $props();
</script>

<div
  class="highlight-card bg-base-200 border border-base-300/50 rounded-lg overflow-hidden transition duration-300 ease-in-out md:hover:-translate-y-1 md:hover:shadow-xl flex flex-row items-stretch md:flex-col"
>
  <div
    class="highlight-image flex-shrink-0 w-[100px] sm:w-[120px] md:w-full h-auto md:h-[200px] overflow-hidden rounded-l-lg md:rounded-l-none md:rounded-t-lg"
  >
    <img
      src={image || "/placeholder.svg"}
      alt={title}
      class="w-full h-full object-cover transition-transform duration-500 ease-in-out md:hover:scale-105"
    />
  </div>
  <div class="highlight-content flex flex-col flex-grow p-3 sm:p-4 md:p-6">
    <h3 class="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 md:mb-3">{title}</h3>
    <p class="text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3 md:mb-4 flex-grow">{description}</p>
    <a href={link} class="highlight-link text-accent text-sm md:text-base font-medium inline-flex items-center transition-colors duration-300 hover:underline mt-auto">
      Learn more
      <!-- Optional: Add an arrow icon here -->
      <!-- <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> -->
    </a>
  </div>
</div>

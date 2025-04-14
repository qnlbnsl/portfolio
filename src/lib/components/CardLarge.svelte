<script>
	let { image, title, description, link, extraClasses = '' } = $props();
</script>

<div
	class="highlight-card border-base-300/50 flex flex-row items-stretch overflow-hidden rounded-lg border transition duration-300 ease-in-out md:flex-col md:hover:-translate-y-1 md:hover:shadow-xl {extraClasses}"
>
	<div
		class="highlight-image h-auto w-[100px] flex-shrink-0 overflow-hidden rounded-l-lg sm:w-[120px] md:h-[200px] md:w-full md:rounded-t-lg md:rounded-l-none"
	>
		<img
			src={image || '/placeholder.svg'}
			alt={title}
			class="h-full w-full object-cover transition-transform duration-500 ease-in-out md:hover:scale-105"
		/>
	</div>
	<div class="highlight-content flex flex-grow flex-col p-3 sm:p-4 md:p-6">
		<h3 class="mb-1 text-base font-semibold sm:mb-2 sm:text-lg md:mb-3 md:text-xl">{title}</h3>
		<p class="mb-2 flex-grow text-xs leading-relaxed sm:mb-3 sm:text-sm md:mb-4 md:text-base">
			{description}
		</p>
		<a
			href={link}
			class="highlight-link text-accent mt-auto inline-flex items-center text-sm font-medium transition-colors duration-300 hover:underline md:text-base"
		>
			Learn more
			<!-- Optional: Add an arrow icon here -->
			<!-- <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> -->
		</a>
	</div>
</div>

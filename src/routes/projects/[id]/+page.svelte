<script>
	export let data;
	// data.content should contain the compiled .svx component
	// console.log('Data prop in +page.svelte:', data); // Log the whole data object
	// console.log('Content from data:', data.content); // Log the specific content part
</script>

<!-- Wrap the component in a div with the 'prose' class for typography styling -->
<div class="prose dark:prose-invert max-w-none p-4 md:p-8">
	<svelte:component this={data.content} />
</div>

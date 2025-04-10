<script>
	export let data;
</script>

<!-- Wrap the component in a div with the 'prose' class for typography styling -->
<div class="prose max-w-none p-4 md:p-8">
	<svelte:component this={data.content} />
</div>

<script>
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		let currentTheme = 'light'; // Default to light theme initially

		if (savedTheme) {
			currentTheme = savedTheme;
		} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			currentTheme = 'dark';
		}
		theme.set(currentTheme);

		// Apply the theme attribute initially
		// Always set the attribute now
		document.documentElement.setAttribute('data-theme', currentTheme);

		// Update attribute when theme store changes
		const unsubscribe = theme.subscribe((value) => {
			// Always set the attribute to the current theme value
			document.documentElement.setAttribute('data-theme', value);

			// Still save preference to localStorage
			localStorage.setItem('theme', value);
		});

		return () => {
			unsubscribe();
		};
	});
</script>

<div class="app flex min-h-screen flex-col">
	<Navbar />
	<main class="mx-auto w-full max-w-[1280px] flex-1">
		<slot />
	</main>
	<Footer />
</div>

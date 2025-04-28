<script>
	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-secondary text-secondary-content border-t-2 border-white/20 px-4 pt-12 pb-6">
	<div
		class="footer-content mx-auto grid max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12"
	>
		<div class="footer-info md:col-span-1">
			<h2 class="font-secondary mb-3 text-2xl font-semibold">Kunal Bansal</h2>
			<p class="max-w-xs text-sm leading-relaxed opacity-80">
				Innovating at the intersection of AR/VR, healthcare, and AI
			</p>
		</div>

		<div class="footer-links grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-2">
			<div class="link-group">
				<h3
					class="after:bg-accent relative mb-4 text-lg font-medium after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-[30px] after:content-['']"
				>
					Navigation
				</h3>
				<a
					href="/"
					class="hover:text-accent mb-3 block text-sm no-underline opacity-80 transition-opacity hover:opacity-100"
					>Home</a
				>
				<a
					href="/projects"
					class="hover:text-accent mb-3 block text-sm no-underline opacity-80 transition-opacity hover:opacity-100"
					>Projects & Blog</a
				>
				<a
					href="/experience"
					class="hover:text-accent mb-3 block text-sm no-underline opacity-80 transition-opacity hover:opacity-100"
					>Work Experience</a
				>
				<a
					href="/contact"
					class="hover:text-accent mb-3 block text-sm no-underline opacity-80 transition-opacity hover:opacity-100"
					>Contact</a
				>
			</div>

			<div class="link-group">
				<h3
					class="after:bg-accent relative mb-4 text-lg font-medium after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-[30px] after:content-['']"
				>
					Connect
				</h3>
				<a
					href="https://github.com/qnlbnsl"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-accent mb-3 block text-sm no-underline opacity-80 transition-opacity hover:opacity-100"
					>GitHub</a
				>
				<a
					href="https://linkedin.com/in/qnlbnsl"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-accent mb-3 block text-sm no-underline opacity-80 transition-opacity hover:opacity-100"
					>LinkedIn</a
				>
				<a
					href="https://kunalbans.al"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-accent mb-3 block text-sm no-underline opacity-80 transition-opacity hover:opacity-100"
					>Website</a
				>
			</div>

			<!-- Add more link groups if needed, adjusting grid columns -->
		</div>
	</div>

	<div
		class="footer-bottom border-base-300/30 mx-auto mt-1 max-w-screen-xl border-t pt-6 text-center"
	>
		<p class="text-xs opacity-70">&copy; {currentYear} Kunal Bansal. All rights reserved.</p>
	</div>
</footer>

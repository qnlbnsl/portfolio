<script>
	import { page } from '$app/stores';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { MoonOutline, SunOutline } from 'flowbite-svelte-icons';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<nav
	class="bg-base-100/95 border-base-300/50 sticky top-0 z-50 border-b shadow-sm backdrop-blur-sm transition-colors duration-300"
>
	<div class="nav-container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
		<div class="logo">
			<a
				href="/"
				class="font-secondary text-base-content hover:text-accent text-xl font-bold no-underline transition-colors md:text-2xl"
			>
				Kunal Bansal
			</a>
		</div>

		<!-- Hamburger Menu Toggle - Mobile -->
		<button
			class="menu-toggle btn btn-ghost btn-square md:hidden"
			on:click={toggleMenu}
			aria-label="Toggle menu"
		>
			{#if isMenuOpen}
				<!-- X Icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<!-- Menu Icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>

		<!-- Navigation Links & Theme Toggle -->
		<div
			class="nav-links bg-base-100/95 md:gap-auto border-base-300/50 absolute top-16 right-0 left-0
             z-40 flex flex-col items-center gap-6 border-b py-8 backdrop-blur-sm
             transition-opacity duration-300 ease-in-out md:pointer-events-auto
             md:static md:z-auto md:flex md:flex-row
             md:gap-8 md:border-none md:bg-transparent md:py-0 md:opacity-100 md:backdrop-blur-none {isMenuOpen
				? 'opacity-100'
				: 'pointer-events-none hidden opacity-0'}"
		>
			<a
				href="/"
				data-active={$page.url.pathname === '/'}
				on:click={closeMenu}
				class="nav-link text-base-content hover:text-accent data-[active=true]:text-accent after:bg-accent relative
               font-medium no-underline
               transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-['']
               hover:after:w-full data-[active=true]:after:w-full"
			>
				Home
			</a>
			<a
				href="/projects"
				data-active={$page.url.pathname.startsWith('/projects')}
				on:click={closeMenu}
				class="nav-link text-base-content hover:text-accent data-[active=true]:text-accent after:bg-accent relative
               font-medium no-underline
               transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-['']
               hover:after:w-full data-[active=true]:after:w-full"
			>
				Projects & Blog
			</a>
			<a
				href="/experience"
				data-active={$page.url.pathname.startsWith('/experience')}
				on:click={closeMenu}
				class="nav-link text-base-content hover:text-accent data-[active=true]:text-accent after:bg-accent relative
               font-medium no-underline
               transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-['']
               hover:after:w-full data-[active=true]:after:w-full"
			>
				Work Experience
			</a>
			<a
				href="/contact"
				data-active={$page.url.pathname.startsWith('/contact')}
				on:click={closeMenu}
				class="nav-link text-base-content hover:text-accent data-[active=true]:text-accent after:bg-accent relative
               font-medium no-underline
               transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-['']
               hover:after:w-full data-[active=true]:after:w-full"
			>
				Contact
			</a>

			<!-- Theme Toggle Button -->
			<button
				class="theme-toggle btn btn-ghost btn-circle"
				on:click={() => {
					toggleTheme();
					closeMenu();
				}}
				aria-label="Toggle theme"
			>
				{#if $theme === 'mytheme-dark'}
					<!-- Sun Icon -->
					<SunOutline class="h-5 w-5" />
				{:else}
					<!-- Moon Icon -->
					<MoonOutline class="h-5 w-5" />
				{/if}
			</button>
		</div>
	</div>
</nav>

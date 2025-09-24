<script>
	import {
		EnvelopeOpenOutline,
		GithubSolid,
		GlobeOutline,
		LinkedinSolid,
		MapPinAltOutline,
		PhoneOutline
	} from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { enhance } from '$app/forms';

	export let form;

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>Contact | Kunal Bansal</title>
	<meta
		name="description"
		content="Get in touch with Kunal Bansal for collaborations, projects, or inquiries related to AR/VR, healthcare tech, and AI."
	/>
</svelte:head>

{#if visible}
	<section class="contact px-4 py-12 md:py-16" in:fade={{ duration: 800 }}>
		<div
			class="contact-header mx-auto mb-12 max-w-2xl text-center"
			in:fly={{ y: 50, duration: 800 }}
		>
			<h1 class="font-secondary mb-4 text-4xl md:text-5xl">Get in Touch</h1>
			<p class="text-base-content/80 text-lg md:text-xl">
				Have a project in mind or want to discuss potential collaborations? I'd love to hear from
				you!
			</p>
		</div>

		<div
			class="contact-container mx-auto grid max-w-screen-lg grid-cols-1 gap-8 md:grid-cols-2 md:gap-12"
		>
			<div class="contact-info" in:fly={{ x: -50, duration: 800, delay: 200 }}>
				<div
					class="info-card bg-secondary text-secondary-content flex h-full flex-col rounded-lg p-6 md:p-8"
				>
					<h2 class="mb-6 text-2xl font-semibold md:text-3xl">Contact Information</h2>
					<div class="info-item mb-5 flex items-center gap-4">
						<PhoneOutline class="text-accent h-6 w-6" />
						<p class="m-0">415-966-7699</p>
					</div>
					<div class="info-item mb-5 flex items-center gap-4">
						<EnvelopeOpenOutline class="text-accent h-6 w-6" />
						<p class="m-0">contact@kunalbans.al</p>
					</div>
					<div class="info-item mb-5 flex items-center gap-4">
						<MapPinAltOutline class="text-accent h-6 w-6" />
						<p class="m-0">Alabama, USA</p>
					</div>

					<div class="social-links my-8 flex flex-wrap gap-3">
						<a
							href="https://github.com/qnlbnsl"
							target="_blank"
							rel="noopener noreferrer"
							class="social-link btn btn-outline btn-sm gap-2 rounded-full normal-case"
						>
							<GithubSolid class="h-5 w-5" />
							GitHub
						</a>
						<a
							href="https://linkedin.com/in/qnlbnsl"
							target="_blank"
							rel="noopener noreferrer"
							class="social-link btn btn-outline btn-sm gap-2 rounded-full normal-case"
						>
							<LinkedinSolid class="h-5 w-5" />
							LinkedIn
						</a>
						<a
							href="https://kunalbans.al"
							target="_blank"
							rel="noopener noreferrer"
							class="social-link btn btn-outline btn-sm gap-2 rounded-full normal-case"
						>
							<GlobeOutline class="h-5 w-5" />
							Website
						</a>
					</div>
				</div>
			</div>

			<div class="contact-form" in:fly={{ x: 50, duration: 800, delay: 200 }}>
				{#if form?.success}
					<div class="status-message alert alert-success mb-6 shadow-lg" transition:fade>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 shrink-0 stroke-current"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>{form.responseMessage}</span>
					</div>
				{/if}

				{#if form?.error}
					<div class="status-message alert alert-error mb-6 shadow-lg" transition:fade>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 shrink-0 stroke-current"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>{form.responseMessage}</span>
					</div>
				{/if}

				<form method="POST" use:enhance class="flex flex-col gap-6">
					<div class="form-group form-control w-full">
						<label for="name" class="label">
							<span class="label-text">Name</span>
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={form?.name ?? ''}
							required
							class="input input-bordered w-full"
						/>
					</div>

					<div class="form-group form-control w-full">
						<label for="email" class="label">
							<span class="label-text">Email</span>
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={form?.email ?? ''}
							required
							class="input input-bordered w-full"
						/>
					</div>

					<div class="form-group form-control w-full">
						<label for="message" class="label">
							<span class="label-text">Message</span>
						</label>
						<textarea
							id="message"
							name="message"
							rows="6"
							required
							class="textarea textarea-bordered h-36 w-full">{form?.message ?? ''}</textarea
						>
					</div>

					<button type="submit" class="submit-button btn btn-accent w-full"> Send Message </button>
				</form>
			</div>
		</div>
	</section>
{/if}

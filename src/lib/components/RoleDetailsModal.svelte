<!-- src/lib/components/RoleDetailsModal.svelte -->
<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { fly } from 'svelte/transition';
	import {
		CloseOutline,
		CalendarEditSolid,
		ClockSolid,
		BriefcaseSolid
	} from 'flowbite-svelte-icons';

	/**
	 * @typedef {Object} Role
	 * @property {string} id - Role ID
	 * @property {string} title - Role title
	 * @property {string} dateRange - Date range
	 * @property {string[]} achievements - List of achievements
	 * @property {string[]} technologies - List of technologies
	 * @property {string|null} link - Optional link to project
	 */

	/** @type {Role | null} */
	let { role = null, isOpen = false, onClose } = $props();

	/**
	 * Close the modal
	 */
	function closeModal() {
		onClose?.();
	}

	/**
	 * Prevent body scroll when modal is open
	 */
	$effect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		// Cleanup on component destroy
		return () => {
			document.body.style.overflow = '';
		};
	});

	/**
	 * Handle backdrop click
	 * @param {MouseEvent} event - Click event
	 */
	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}

	/**
	 * Handle escape key
	 * @param {KeyboardEvent} event - Keyboard event
	 */
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}

	/**
	 * Calculate duration in a readable format
	 * @param {string} dateRange - The date range string
	 * @returns {string} - Formatted duration
	 */
	function getDuration(dateRange: string): string {
		// Extract years and months from the date range
		const match = dateRange.match(/(\d+)\s*yrs?\s*(\d+)?\s*mos?/);
		if (match) {
			const years = match[1];
			const months = match[2] || '0';
			return `${years} year${years !== '1' ? 's' : ''} ${months} month${months !== '1' ? 's' : ''}`;
		}
		return dateRange;
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen && role}
	<!-- Modal Backdrop -->
	<div
		class="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
		onclick={handleBackdropClick}
		onkeydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
		tabindex="-1"
		transition:fade={{ duration: 200 }}
	>
		<!-- Modal Content -->
		<div
			class="modal-content bg-base-100 border-base-300 relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border shadow-2xl"
			transition:scale={{ duration: 200, start: 0.95 }}
		>
			<!-- Modal Header -->
			<div
				class="modal-header border-base-300 from-primary/5 to-primary/10 border-b bg-gradient-to-r p-6"
			>
				<div class="flex items-start justify-between">
					<div class="flex-1">
						<h2 id="modal-title" class="text-base-content mb-2 text-2xl font-bold">
							{role.title}
						</h2>
						<div class="text-base-content/70 flex items-center gap-4 text-sm">
							<div class="flex items-center gap-1">
								<CalendarEditSolid class="h-4 w-4" />
								<span>{role.dateRange}</span>
							</div>
							<div class="flex items-center gap-1">
								<ClockSolid class="h-4 w-4" />
								<span>{getDuration(role.dateRange)}</span>
							</div>
						</div>
					</div>
					<button
						class="bg-base-200 text-base-content hover:bg-base-300 ml-4 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
						onclick={closeModal}
						aria-label="Close modal"
					>
						<CloseOutline class="h-5 w-5" />
					</button>
				</div>
			</div>

			<!-- Modal Body -->
			<div class="modal-body max-h-[calc(90vh-120px)] overflow-y-auto p-6">
				<!-- Achievements Section -->
				<div class="mb-8">
					<div class="mb-4 flex items-center">
						<BriefcaseSolid class="text-primary mr-2 h-5 w-5" />
						<h3 class="text-base-content text-xl font-semibold">Key Achievements</h3>
					</div>
					<div class="space-y-3">
						{#each role.achievements as achievement, index}
							<div
								class="achievement-item bg-base-100 border-base-300 rounded-lg border p-4 shadow-sm"
								transition:fly={{ y: 20, duration: 300, delay: index * 100 }}
							>
								<div class="flex items-start gap-3">
									<div class="flex-shrink-0">
										<div
											class="bg-primary/10 text-primary border-primary/20 flex h-8 w-8 items-center justify-center rounded-lg border text-sm font-semibold"
										>
											{index + 1}
										</div>
									</div>
									<p class="text-base-content text-sm leading-relaxed">{achievement}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Technologies Section -->
				{#if role.technologies && role.technologies.length > 0}
					<div class="mb-8">
						<h3 class="text-base-content mb-4 text-xl font-semibold">Technologies & Skills</h3>
						<div class="flex flex-wrap gap-2">
							{#each role.technologies as tech}
								<span
									class="bg-primary/10 text-primary border-primary/20 rounded-full border px-3 py-1 text-sm font-medium"
									transition:fly={{ y: 10, duration: 200, delay: Math.random() * 200 }}
								>
									{tech}
								</span>
							{/each}
						</div>
					</div>
				{/if}

				<!-- Project Link Section -->
				{#if role.link}
					<div class="mb-8">
						<h3 class="text-base-content mb-4 text-xl font-semibold">Related Project</h3>
						<a
							href={role.link}
							class="bg-primary text-primary-content hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							View Project
							<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
						</a>
					</div>
				{/if}
			</div>

			<!-- Modal Footer -->
			<div class="modal-footer border-base-300 bg-base-200 border-t p-4">
				<div class="flex items-center justify-between">
					<p class="text-base-content/70 text-sm">Click outside or press ESC to close</p>
					<button
						class="bg-primary text-primary-content hover:bg-primary/90 rounded-lg px-6 py-2 font-semibold transition-colors"
						onclick={closeModal}
					>
						Close
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-content {
		animation: modalSlideIn 0.2s ease-out;
	}

	@keyframes modalSlideIn {
		from {
			opacity: 0;
			transform: scale(0.95) translateY(-20px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	/* Custom scrollbar for modal body */
	.modal-body::-webkit-scrollbar {
		width: 6px;
	}

	.modal-body::-webkit-scrollbar-track {
		background: hsl(var(--b2));
		border-radius: 3px;
	}

	.modal-body::-webkit-scrollbar-thumb {
		background: hsl(var(--bc) / 0.3);
		border-radius: 3px;
	}

	.modal-body::-webkit-scrollbar-thumb:hover {
		background: hsl(var(--bc) / 0.5);
	}
</style>

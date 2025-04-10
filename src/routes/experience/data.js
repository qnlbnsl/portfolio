// {#if visible}
// 	<!-- Timeline Container -->
// 	<div class="timeline relative mx-auto max-w-3xl" in:fade={{ duration: 800 }}>
// 		<!-- Central Line -->
// 		<div
// 			class="bg-accent absolute top-0 bottom-0 left-4 hidden w-0.5 md:left-1/2 md:-ml-px md:block"
// 		></div>

// 		{#each experience as company, i}
// 			<!-- Timeline Item -->
// 			<div
// 				class="timeline-item relative mb-12 pl-12 md:pl-0"
// 				in:fly={{ y: 50, duration: 800, delay: i * 150 }}
// 			>
// 				<!-- Mobile Line Connector -->
// 				<div class="bg-accent absolute top-0 bottom-0 left-4 w-0.5 md:hidden"></div>
// 				<!-- Marker -->
// 				<div
// 					class="timeline-marker bg-accent border-base-100 absolute top-1 left-0 z-10 h-5 w-5 rounded-full border-4 md:left-1/2 md:-ml-2.5"
// 				></div>

// 				<!-- Content -->
// 				<div
// 					class="timeline-content bg-base-100 border-base-300/50 rounded-lg border p-4 shadow-md md:relative
//                       md:p-6
//                       odd:md:left-0 even:md:left-[calc(50%+2rem)]"
// 				>
// 					<div class="company-header mb-6">
// 						<h2 class="mb-1 text-xl font-semibold md:text-2xl">{company.name}</h2>
// 						<p class="text-base-content/80 mb-0.5 text-sm">{company.location}</p>
// 						<p class="text-accent text-sm font-medium">{company.duration}</p>
// 					</div>

// 					<div class="roles flex flex-col gap-4">
// 						{#each company.roles as role}
// 							<div class="role border-base-300/50 border-t pt-4">
// 								<button
// 									class="role-header group flex w-full cursor-pointer items-center justify-between border-none bg-transparent p-0 text-left"
// 									on:click={() => toggleRole(role)}
// 									aria-expanded={activeRole === role.id}
// 								>
// 									<h3
// 										class="group-hover:text-accent m-0 text-base font-semibold transition-colors md:text-lg {activeRole ===
// 										role.id
// 											? 'text-accent'
// 											: 'text-base-content'}"
// 									>
// 										{role.title}
// 									</h3>
// 									<svg
// 										class="toggle-icon text-base-content/70 h-5 w-5 transition-transform {activeRole ===
// 										role.id
// 											? 'rotate-180'
// 											: ''}"
// 										xmlns="http://www.w3.org/2000/svg"
// 										viewBox="0 0 24 24"
// 										fill="none"
// 										stroke="currentColor"
// 										stroke-width="2"
// 										stroke-linecap="round"
// 										stroke-linejoin="round"
// 									>
// 										<polyline points="6 9 12 15 18 9"></polyline>
// 									</svg>
// 								</button>

// 								{#if activeRole === role.id}
// 									<div
// 										class="role-details pt-5 text-sm leading-relaxed"
// 										transition:fade={{ duration: 300 }}
// 									>
// 										<div class="achievements mb-6">
// 											<h4 class="text-base-content/90 mb-3 text-base font-medium">
// 												Key Achievements
// 											</h4>
// 											<ul class="list-disc space-y-2 pl-5">
// 												{#each role.achievements as achievement}
// 													<li>{achievement}</li>
// 												{/each}
// 											</ul>
// 										</div>

// 										<div class="technologies mb-6">
// 											<h4 class="text-base-content/90 mb-3 text-base font-medium">
// 												Technologies & Skills
// 											</h4>
// 											<div class="tech-list flex flex-wrap gap-2">
// 												{#each role.technologies as tech}
// 													<span
// 														class="tech-item badge badge-secondary badge-outline px-2.5 py-2.5 text-xs"
// 														>{tech}</span
// 													>
// 												{/each}
// 											</div>
// 										</div>

// 										{#if role.link}
// 											<a
// 												href={role.link}
// 												class="role-link text-accent mt-4 inline-block text-sm font-medium hover:underline"
// 											>
// 												Read more about this role
// 											</a>
// 										{/if}
// 									</div>
// 								{/if}
// 							</div>
// 						{/each}
// 					</div>
// 				</div>
// 				<!-- End Timeline Content -->
// 			</div>
// 			<!-- End Timeline Item -->
// 		{/each}
// 	</div>
// 	<!-- End Timeline -->
// {/if}
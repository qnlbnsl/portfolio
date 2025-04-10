/**
 * @typedef {import('$lib/types/work_experience.js').WorkExperienceData} WorkExperienceData
 * @typedef {import('$lib/types/work_experience.js').WorkExperienceMetadata} WorkExperienceMetadata
 */

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	// Use import.meta.glob to eagerly load all project markdown files
	// NOTE: We cast the module type within the loop as TS generics aren't standard JS
	const modules = import.meta.glob('$lib/work_experience/*.svx', { eager: true });
	/** @type {WorkExperienceData[]} */
	const workExperiences = [];

	for (const path in modules) {
		const mod = modules[path];
		// Extract the slug (filename without extension) from the path
		const slug = path.split('/').pop()?.split('.').shift();
		// Check if the module has metadata and slug is valid
		if (slug && mod && typeof mod === 'object' && 'metadata' in mod) {
			/** @type {WorkExperienceMetadata} */
			const metadata = /** @type {any} */ (mod).metadata;
			// Add the slug (as id) along with the metadata to our projects array
			workExperiences.push({
				id: slug,
				...metadata
			});
		}
	}

	// Optional: Sort projects by published date (newest first)
	workExperiences.sort(
		(a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
	);

	// Return the processed list of projects
	return {
		workExperiences
	};
};
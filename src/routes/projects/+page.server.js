/**
 * @typedef {import('$lib/types/project.js').ProjectData} ProjectData
 * @typedef {import('$lib/types/project.js').ProjectMetadata} ProjectMetadata
 */

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	// Use import.meta.glob to eagerly load all project markdown files
	// NOTE: We cast the module type within the loop as TS generics aren't standard JS
	const modules = import.meta.glob('$lib/posts/*.svx', { eager: true });

	/** @type {ProjectData[]} */
	const projects = [];

	for (const path in modules) {
		const mod = modules[path];
		// Extract the slug (filename without extension) from the path
		const slug = path.split('/').pop()?.split('.').shift();

		// Check if the module has metadata and slug is valid
		if (slug && mod && typeof mod === 'object' && 'metadata' in mod) {
			/** @type {ProjectMetadata} */
			const metadata = /** @type {any} */ (mod).metadata;

			// Add the slug (as id) along with the metadata to our projects array
			projects.push({
				id: slug,
				...metadata
			});
		}
	}

	// Optional: Sort projects by published date (newest first)
	projects.sort(
		(a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
	);

	// Return the processed list of projects
	return {
		projects
	};
};
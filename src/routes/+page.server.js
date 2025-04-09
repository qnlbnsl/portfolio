/**
 * Represents a highlight item shown on the homepage.
 * @typedef {object} Highlight
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} image
 * @property {string} link
 */

/**
 * Temporary structure to hold highlight data before final processing.
 * @typedef {object} PotentialHighlight
 * @property {string} slug
 * @property {any} metadata
 */

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	const modules = import.meta.glob('$lib/posts/*.svx', { eager: true });

	/** @type {PotentialHighlight[]} */
	let potentialHighlights = [];

	for (const path in modules) {
		const mod = modules[path];
		const slug = path.split('/').pop()?.split('.').shift();

		if (slug && mod && typeof mod === 'object' && 'metadata' in mod) {
			/** @type {any} */
			const metadata = mod.metadata;

			// Collect all posts marked for highlight
			if (metadata && metadata.highlight === true && metadata.publishedDate) {
				potentialHighlights.push({ slug, metadata });
			}
		}
	}

	// Sort by date (newest first) if more than 4 highlights
	if (potentialHighlights.length > 4) {
		potentialHighlights.sort((a, b) => {
			// Ensure publishedDate exists and is valid before creating Date objects
			const dateA = a.metadata.publishedDate ? new Date(a.metadata.publishedDate) : new Date(0);
			const dateB = b.metadata.publishedDate ? new Date(b.metadata.publishedDate) : new Date(0);
			return dateB.getTime() - dateA.getTime(); // Descending order
		});

		// Keep only the latest 4
		potentialHighlights = potentialHighlights.slice(0, 4);
	}

	// Map the selected (and potentially sorted/sliced) posts to the final Highlight structure
	const highlights = potentialHighlights.map(item => ({
		id: item.slug,
		title: item.metadata.title ?? 'Untitled Highlight',
		description: item.metadata.shortDescription ?? '',
		image: item.metadata.thumbnail ?? '/placeholder.svg',
		link: `/projects/${item.slug}`
	}));

	return {
		highlights
	};
};
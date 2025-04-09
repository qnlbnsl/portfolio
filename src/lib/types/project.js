/**
 * @typedef {object} ProjectMetadata
 * @property {string} title
 * @property {string} shortDescription
 * @property {string[]} categories - Corresponds to category IDs used for filtering
 * @property {string} [thumbnail] - Optional path to thumbnail image
 * @property {string} [image] - Optional path to main project image (used in detail page)
 * @property {string} [github] - Optional URL to GitHub repository
 * @property {boolean} [highlight] - Optional flag for highlighting project
 * @property {string} publishedDate - Date string for sorting
 * @property {string[]} [technologies] - Optional list of technologies
 */

/**
 * @typedef {ProjectMetadata & {id: string}} ProjectData - Project metadata including the slug/id
 */

/**
 * @typedef {import('svelte').ComponentType} ComponentType
 */

/**
 * @typedef {object} ProjectPageData
 * @property {ProjectMetadata} metadata
 * @property {ComponentType} content - The compiled Svelte component from mdsvex
 */

// Export empty objects or values for JSDoc import() to work correctly
// without causing runtime errors if this file were accidentally imported.
export const ProjectMetadata = {};
export const ProjectData = {};
export const ProjectPageData = {};
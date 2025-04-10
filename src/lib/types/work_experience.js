/**
 * @typedef {object} WorkExperienceMetadata
 * @property {string} title
 * @property {string} company
 * @property {string} location
 * @property {string} duration
 * @property {string} shortDescription
 * @property {string} startDate
 * @property {string} endDate
 * @property {string[]} [technologies] - Optional list of technologies
 * @property {string} [type] - Optional type of work experience
 */

/**
 * @typedef {WorkExperienceMetadata & {id: string}} WorkExperienceData - Work experience metadata including the slug/id
 */

/**
 * @typedef {import('svelte').Component} ComponentType
 */

/**
 * @typedef {object} WorkExperiencePageData
 * @property {WorkExperienceMetadata} metadata
 * @property {ComponentType} content - The compiled Svelte component from mdsvex
 */

// Export empty objects or values for JSDoc import() to work correctly
// without causing runtime errors if this file were accidentally imported.
export const WorkExperienceMetadata = {};
export const WorkExperienceData = {};
export const WorkExperiencePageData = {};
/**
 * @typedef {import('$lib/types/work_experience.js').WorkExperienceData} WorkExperienceData
 * @typedef {import('$lib/types/work_experience.js').WorkExperienceMetadata} WorkExperienceMetadata
 */

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	// Load experience data from the experience.js file
	const { experience } = await import('$lib/data/experience.js');

	// Transform the experience data to match the expected structure
	/** @type {WorkExperienceData[]} */
	const workExperiences = experience.map((company) => {
		// Extract the earliest start date and latest end date from roles
		const startDates = company.roles.map((role) => {
			const match = role.period.match(/(\d{4}-\d{2})/);
			return match ? match[1] : '2019-12';
		});
		const earliestStart = startDates.sort()[0];

		// Create a company-level experience item
		return {
			id: company.name.toLowerCase().replace(/\s+/g, '-'),
			title: company.name,
			company: company.name,
			location: company.location,
			duration: company.duration,
			shortDescription: `Multiple roles at ${company.name}`,
			startDate: earliestStart,
			endDate: 'Present',
			type: 'startup', // Default to startup for now
			roles: company.roles.map((role) => ({
				...role,
				dateRange: role.period
			}))
		};
	});

	// Sort by start date (newest first)
	workExperiences.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

	// Return the processed list of experiences
	return {
		workExperiences
	};
};

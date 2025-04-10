/**
 * Utility functions for processing and displaying work experience data
 */

/**
 * @typedef {Object} TimelineItem
 * @property {string} id - Unique identifier
 * @property {string} title - Job title
 * @property {string} company - Company name
 * @property {string} date - Year of start date
 * @property {string} dateRange - Formatted date range
 * @property {Date} startDate - Start date
 * @property {Date} endDate - End date
 * @property {string} type - Type of experience (startup, consultant, regular)
 * @property {boolean} [isCompanyItem] - Whether this item represents a company with multiple roles
 * @property {TimelineItem[]} [roles] - Array of roles for company items
 */

/**
 * @typedef {Object} ProcessedExperienceData
 * @property {TimelineItem[]} timelineData - Processed timeline items
 * @property {Record<string, TimelineItem[]>} companyGroups - Timeline items grouped by company
 * @property {Record<string, number>} companyCounts - Count of roles per company
 * @property {Record<string, string>} companyTypes - Type of each company
 * @property {string[]} startupCompanies - List of startup companies
 * @property {string[]} consultantCompanies - List of consultant companies
 * @property {string[]} multiRoleCompanies - List of companies with multiple roles
 */

/**
 * @typedef {Object} IconComponents
 * @property {any} UsersGroupSolid - Startup icon
 * @property {any} BriefcaseSolid - Consultant icon
 * @property {any} BuildingSolid - Corporate icon
 */

/**
 * Format a date range and calculate duration
 * @param {string} startDate - Start date string
 * @param {string} endDate - End date string or "Present"
 * @returns {string} Formatted date range with duration
 */
export function formatDateRange(startDate, endDate) {
	if (!startDate) return '';

	// Ensure proper date format for partial dates like '2019-12'
	let startDateStr = startDate;
	// If it's a partial date like YYYY-MM, append -01 for the day
	if (startDateStr.match(/^\d{4}-\d{2}$/)) {
		startDateStr += '-01';
	}

	let endDateStr = endDate;
	if (endDateStr && endDateStr.toLowerCase() !== 'present' && endDateStr.match(/^\d{4}-\d{2}$/)) {
		endDateStr += '-01';
	}

	const start = new Date(startDateStr);
	const end = endDateStr && endDateStr.toLowerCase() !== 'present' ? new Date(endDateStr) : new Date();

	// Format as MMM YYYY
	const startStr = start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
	const endStr =
		endDateStr && endDateStr.toLowerCase() !== 'present'
			? end.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
			: 'Present';

	// Calculate duration
	const months =
		(end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
	const years = Math.floor(months / 12);
	const remainingMonths = months % 12;

	let duration = '';
	if (years > 0) {
		duration += `${years} yr${years > 1 ? 's' : ''}`;
	}
	if (remainingMonths > 0 || years === 0) {
		if (duration) duration += ' ';
		duration += `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
	}

	return `${startStr} - ${endStr} · ${duration}`;
}

/**
 * Processes raw work experience data into timeline format
 * @param {Array<any>} workExperiences - Raw work experience data
 * @returns {ProcessedExperienceData} Processed timeline data and related information
 */
export function processExperienceData(workExperiences = []) {
	// Sort experiences by date (newest first)
	const sortedExperiences = [...(workExperiences || [])].sort((a, b) => {
		return new Date(b.startDate || '').getTime() - new Date(a.startDate || '').getTime();
	});

	// Process experiences with additional metadata
	/** @type {TimelineItem[]} */
	const timelineData = sortedExperiences.map((experience) => {
		// Ensure proper date format for partial dates like '2019-12'
		let startDateStr = experience.startDate || '';
		// If it's a partial date like YYYY-MM, append -01 for the day
		if (startDateStr.match(/^\d{4}-\d{2}$/)) {
			startDateStr += '-01';
		}

		const startDate = startDateStr ? new Date(startDateStr) : new Date();

		return {
			id: experience.id || '',
			title: experience.title || '',
			company: experience.company || '',
			date: startDateStr ? startDate.getFullYear().toString() : '',
			dateRange: formatDateRange(startDateStr, experience.endDate),
			startDate: startDate,
			endDate:
				experience.endDate && experience.endDate.toLowerCase() !== 'present'
					? new Date(experience.endDate)
					: new Date(),
			type: experience.type || 'regular', // Default to regular if type not specified
			isCompanyItem: false, // Flag to identify single role items
			roles: [] // Initialize roles as an empty array
		};
	});

	// Group experiences by company
	/** @type {Record<string, TimelineItem[]>} */
	const companyGroups = timelineData.reduce((acc, item) => {
		if (item.company) {
			if (!acc[item.company]) {
				acc[item.company] = [];
			}
			acc[item.company].push(item);
		}
		return acc;
	}, /** @type {Record<string, TimelineItem[]>} */ ({}));

	// Sort groups by most recent start date
	Object.keys(companyGroups).forEach((company) => {
		companyGroups[company].sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
	});

	// Count roles by company
	/** @type {Record<string, number>} */
	const companyCounts = Object.keys(companyGroups).reduce((acc, company) => {
		acc[company] = companyGroups[company].length;
		return acc;
	}, /** @type {Record<string, number>} */ ({}));

	// Classify companies by type
	/** @type {Record<string, string>} */
	const companyTypes = Object.keys(companyGroups).reduce((acc, company) => {
		// If any role in the company is marked as startup/consultant, classify the whole company as such
		const types = companyGroups[company].map((item) => item.type);

		if (types.includes('startup')) {
			acc[company] = 'startup';
		} else if (types.some(type => type?.toLowerCase().includes('consult'))) {
			acc[company] = 'consultant';
		} else {
			acc[company] = 'regular';
		}

		return acc;
	}, /** @type {Record<string, string>} */ ({}));

	// Create company-level timeline items for companies with multiple roles
	let processedTimelineData = [...timelineData];

	// Get companies by each classification
	const startupCompanies = Object.keys(companyTypes).filter(
		(company) => companyTypes[company] === 'startup'
	);
	const consultantCompanies = Object.keys(companyTypes).filter(
		(company) => companyTypes[company] === 'consultant'
	);
	const multiRoleCompanies = Object.keys(companyCounts).filter(
		(company) => companyCounts[company] > 1
	);

	// Create company-level timeline items for multi-role companies and replace individual items
	if (multiRoleCompanies.length > 0) {
		// Filter out individual role items from multi-role companies
		processedTimelineData = timelineData.filter(
			item => !multiRoleCompanies.includes(item.company)
		);

		// Add company-level items for multi-role companies
		multiRoleCompanies.forEach(company => {
			const roles = companyGroups[company];
			// Find the earliest start date and latest end date
			const earliestStartDate = new Date(Math.min(...roles.map(r => r.startDate.getTime())));
			const latestEndDate = new Date(Math.max(...roles.map(r => r.endDate.getTime())));

			// Format dates for date range
			const startDateStr = earliestStartDate.toISOString().split('T')[0];
			const endDateStr = latestEndDate.getTime() === new Date().getTime() ? 'Present' : latestEndDate.toISOString().split('T')[0];

			// Create a company-level timeline item
			processedTimelineData.push({
				id: `company-${company.toLowerCase().replace(/\s+/g, '-')}`,
				title: company,
				company: company,
				date: earliestStartDate.getFullYear().toString(),
				dateRange: formatDateRange(startDateStr, endDateStr),
				startDate: earliestStartDate,
				endDate: latestEndDate,
				type: companyTypes[company],
				isCompanyItem: true,
				roles: roles // Store the individual roles
			});
		});

		// Resort the timeline data by date (newest first)
		processedTimelineData.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
	}

	return {
		timelineData: processedTimelineData,
		companyGroups,
		companyCounts,
		companyTypes,
		startupCompanies,
		consultantCompanies,
		multiRoleCompanies
	};
}

/**
 * Get the company type
 * @param {string | undefined} company - Company name
 * @param {Record<string, string>} companyTypes - Mapping of companies to their types
 * @returns {string} Type of company (startup, consultant, or regular)
 */
export function getCompanyType(company, companyTypes) {
	if (!company) return 'regular';

	const type = companyTypes[company];
	if (!type) return 'regular';

	// Normalize the type value for consistent comparison
	const normalizedType = type.toLowerCase();

	// Check for consultant type with various possible values
	if (normalizedType.includes('consult')) return 'consultant';

	// Check for startup type
	if (normalizedType.includes('startup')) return 'startup';

	// Return the original type or default to regular
	return type;
}

/**
 * Check if a company has multiple roles
 * @param {string | undefined} company - Company name
 * @param {Record<string, number>} companyCounts - Mapping of companies to their role counts
 * @returns {boolean} Whether company has multiple roles
 */
export function hasMultipleRoles(company, companyCounts) {
	return !!company && !!companyCounts[company] && companyCounts[company] > 1;
}

/**
 * Get icon and label for a company type
 * @param {string} type - Company type
 * @param {IconComponents} icons - Icon components to use
 * @returns {{ icon: any, label: string, colors: string }} Icon component and label
 */
export function getTypeDetails(type, icons) {
	const { UsersGroupSolid, BriefcaseSolid, BuildingSolid } = icons;

	// Return classes for light mode, expecting DaisyUI to handle dark mode via variables
	switch (type) {
		case 'startup':
			return {
				icon: UsersGroupSolid,
				label: 'Startup Experience',
				colors: 'bg-violet-50 text-violet-800 border-violet-200' // Specific light colors
			};
		case 'consultant':
			return {
				icon: BriefcaseSolid,
				label: 'Consulting Work',
				colors: 'bg-blue-50 text-blue-800 border-blue-200' // Specific light colors
			};
		default:
			return {
				icon: BuildingSolid,
				label: 'Corporate Experience',
				// Use DaisyUI variables for default light theme
				colors: 'bg-base-100 text-base-content border-base-300'
			};
	}
}

/**
 * Loads the content for a selected timeline item
 * @param {string} itemId - The ID of the item to load
 * @param {TimelineItem[]} timelineData - The timeline data array
 * @returns {Promise<{ activeItemId: string, activeExperience: TimelineItem|null, ActiveComponent: any|null, isCompanyView: boolean }>}
 */
export async function loadExperienceContent(itemId, timelineData) {
	const activeExperience = timelineData.find((item) => item.id === itemId) || null;
	let ActiveComponent = null;
	let isCompanyView = false;

	if (activeExperience?.isCompanyItem) {
		// For company items, we'll use the multi-role component
		isCompanyView = true;
		// No need to load a specific SVX file - the multi-role component will handle display
	} else {
		try {
			// Load the SVX file based on the selected experience ID
			const expModule = await import(`$lib/work_experience/${itemId}.svx`);
			// Set the component to the default export from the SVX file
			ActiveComponent = expModule.default;
		} catch (err) {
			console.error(`Error loading experience ${itemId}:`, err);
			// Keep ActiveComponent as null to show the error state
		}
	}

	return {
		activeItemId: itemId,
		activeExperience,
		ActiveComponent,
		isCompanyView
	};
}
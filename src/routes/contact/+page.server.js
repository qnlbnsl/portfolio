import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private'; // To read environment variables

// IMPORTANT: You need to create a .env file in your project root
// and add your Todoist API Key like this:
// TODOIST_API_KEY=your_actual_api_key_here

export const actions = {
	/** @param {import('@sveltejs/kit').RequestEvent} event */
	default: async (event) => {
		const { request } = event;
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');

		if (!name || !email || !message) {
			return fail(400, {
				error: 'Missing required fields.',
				name, // Return values to repopulate form
				email,
				message
			});
		}

		const todoistApiKey = env.TODOIST_API_KEY;
		const projectId = env.TODOIST_PROJECT_ID;

		if (!todoistApiKey) {
			console.error('Todoist API Key is not configured in environment variables.');
			// Return a generic error to the user, but log the specific issue
			return fail(500, {
				error: 'Configuration error. Could not process the request.',
				name,
				email,
				message
			});
		}

		const taskContent = `New contact form submission from: ${name} (${email})`;
		const taskDescription = `Message: ${message}`;

		try {
			const response = await fetch('https://todoist.com/api/v1/tasks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${todoistApiKey}`
				},
				body: JSON.stringify({
					content: taskContent,
					description: taskDescription,
					project_id: projectId
				})
			});

			if (!response.ok) {
				const errorBody = await response.text();
				console.error(`Todoist API Error (${response.status}): ${errorBody}`);
				console.error(
					`Todoist API Key: ${todoistApiKey}, Project ID: ${projectId}, Task Content: ${taskContent}, Task Description: ${taskDescription}`
				);
				return fail(response.status, {
					error: 'Failed to create Todoist task.',
					name,
					email,
					message
				});
			}

			// Task created successfully - SvelteKit form actions automatically clear
			// the form on success unless told otherwise. We just return the success message.
			return {
				success: true,
				responseMessage:
					'Message sent successfully! Thank you for reaching out. We will get back to you shortly.'
			};
		} catch (error) {
			console.error('Error submitting to Todoist:', error);
			return fail(500, {
				error: 'An unexpected error occurred while creating the task.',
				name,
				email,
				message
			});
		}
	}
};

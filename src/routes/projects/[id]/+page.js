import { error } from '@sveltejs/kit';

export async function load({ params }) {
	console.log(`Attempting to load project with id: ${params.id}`);
	try {
		const postModule = await import(`$lib/posts/${params.id}.svx`);
		console.log('Successfully imported module:', postModule);
		console.log('Module default export:', postModule.default);
		return {
			content: postModule.default
		};
	} catch (e) {
		console.error('Error loading SVX file:', e);
		throw error(404, 'Not found');
	}
}

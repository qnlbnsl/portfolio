import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const postModule = await import(`$lib/posts/${params.id}.svx`);
		return {
			content: postModule.default
		};
	} catch (e) {
		console.error('Error loading SVX file:', e);
		throw error(404, 'Not found');
	}
}

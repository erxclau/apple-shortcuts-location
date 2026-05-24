import { error, json, type RequestHandler } from '@sveltejs/kit';

import { Location } from '$lib';
import { prettifyError } from 'zod';

export const POST: RequestHandler = async ({ request, platform }) => {
	let data: unknown = undefined;
	try {
		data = await request.json();
	} catch (e: unknown) {
		console.error(e);
		error(400, { message: 'Could not parse JSON request body.' });
	}

	const location = Location.safeParse(data);

	if (!location.success) {
		return error(400, { message: prettifyError(location.error) });
	}

	for (const [key, value] of Object.entries(location.data)) {
		platform?.env.APPLE_SHORTCUTS_LOCATION.put(key, value);
	}

	return json({
		message: location.data
	});
};

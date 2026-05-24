import type { PageServerLoad } from './$types';
import { Location } from '$lib';

export const load: PageServerLoad = async ({ platform }) => {
	const location = await platform?.env.APPLE_SHORTCUTS_LOCATION.get(Object.keys(Location.shape));

	if (location === undefined || location.values().every((d) => d === null)) {
		return {
			location: null
		};
	}

	return {
		location: Location.parse(Object.fromEntries(location))
	};
};

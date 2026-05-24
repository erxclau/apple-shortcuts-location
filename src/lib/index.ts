// place files you want to import through the `$lib` alias in this folder.

import * as z from 'zod';

export const Location = z
	.object({
		city: z.string(),
		state: z.string(),
		region: z.string(),
		temperature: z.string(),
		condition: z.string(),
		lastUpdated: z.string(),
		deviceName: z.string()
	})
	.required();

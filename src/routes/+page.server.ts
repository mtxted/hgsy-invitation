import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions = {
	rsvp: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('fullname')?.toString().trim();

		if (!name) {
			return fail(400, { missingName: true });
		}

		return { success: true };
	}
} satisfies Actions;

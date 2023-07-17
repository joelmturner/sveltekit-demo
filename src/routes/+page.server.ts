import { getIllustrations } from '$lib/posts';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return {
		post: await getIllustrations()
	};
}) satisfies PageServerLoad;

import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const resp = await fetch(`/api/posts`);

	const posts = await resp.json();

	return {
		posts
	};
}) satisfies PageServerLoad;

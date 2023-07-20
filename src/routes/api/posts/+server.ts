import { json } from '@sveltejs/kit';
import { getIllustrations } from '$lib/posts';

export async function GET({ setHeaders }) {
	setHeaders({
		'cache-control': 'max-age=60'
	});

	const posts = await getIllustrations();

	return json(posts);
}

import cloudinary from 'cloudinary';
import type { CloudinaryResponse, IllustrationTag, Illustrations } from './types';

cloudinary.v2.config({
	cloud_name: import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
	api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
	secure: true
});

export async function getIllustrations(): Promise<Illustrations> {
	const imageResults: Illustrations = {
		handletteredabcs_2016: [],
		inktober2017: [],
		inktober2018: [],
		inktober2019: [],
		inktober2021: [],
		inktober2022: [],
		joelmturner_abcs2017: [],
		joelmturner_featured: [],
		letterclash: []
	};

	await cloudinary.v2.search
		.expression('folder:illustration')
		.sort_by('public_id', 'asc')
		.max_results(800)
		.with_field('tags')
		.execute()
		.then((result: CloudinaryResponse) => {
			for (const imageResult of result.resources) {
				const image = {
					id: imageResult.asset_id,
					url: imageResult.secure_url,
					tags: JSON.parse(JSON.stringify(imageResult.tags)),
					width: imageResult.width,
					height: imageResult.height
				};

				for (const tag of imageResult.tags) {
					const prev = imageResults[tag as IllustrationTag] || [];
					imageResults[`${tag as IllustrationTag}`] = [...prev, image];
				}
			}
		});

	return imageResults;
}

import type { IllustrationTag } from './types';

export const ILLUSTRATION_CATEGORIES = {
	handletteredabcs_2016: 'handletteredabcs_2016',
	inktober2017: 'inktober2017',
	inktober2018: 'inktober2018',
	inktober2019: 'inktober2019',
	inktober2021: 'inktober2021',
	inktober2022: 'inktober2022',
	joelmturner_abcs2017: 'joelmturner_abcs2017',
	joelmturner_featured: 'joelmturner_featured',
	letterclash: 'letterclash'
} as const;

export const CATEGORY_SORT_ORDER: IllustrationTag[] = [
	'joelmturner_featured',
	'letterclash',
	'inktober2022',
	'inktober2021',
	'inktober2019',
	'inktober2018',
	'inktober2017',
	'joelmturner_abcs2017',
	'handletteredabcs_2016'
];

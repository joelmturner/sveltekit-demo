import { CATEGORY_SORT_ORDER } from './constants';
import type { IllustrationTag } from './types';

export function sortCategories(a: string, b: string): number {
	return (
		CATEGORY_SORT_ORDER.indexOf(a as IllustrationTag) -
		CATEGORY_SORT_ORDER.indexOf(b as IllustrationTag)
	);
}

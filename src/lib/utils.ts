import { CATEGORY_SORT_ORDER } from './constants';

export function sortCategories(a, b) {
	return CATEGORY_SORT_ORDER.indexOf(a) - CATEGORY_SORT_ORDER.indexOf(b);
}

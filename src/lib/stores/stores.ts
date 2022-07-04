import { writable } from 'svelte/store';

const categories: string[] = [];
const filters = {
	searchTerm: '',
	categories: {}
};

export const categoryStore = writable(categories);
export const filtersStore = writable(filters);

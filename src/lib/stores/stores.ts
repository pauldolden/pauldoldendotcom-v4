import { writable } from 'svelte/store';

const categories: string[] = [];
const filters = {};

export const categoryStore = writable(categories);
export const filtersStore = writable(filters);
export const searchTerm = writable('');

import type { PostMetadata } from './../types/PostMetadata';
export function filterByCategory(post: PostMetadata, filters: string[]) {
	if (filters.length > 0) {
		console.log('here');
		return post.category.some((category) => filters.includes(category));
	}
	return true;
}

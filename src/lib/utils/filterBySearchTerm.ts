import type { PostMetadata } from './../types/PostMetadata';
export function filterBySearchTerm(post: PostMetadata, searchTerm: string) {
	const normalisedTerm = searchTerm.toLowerCase().trim();
	const normalisedTitle = post.title.toLowerCase().trim();
	const normalisedDescription = post.description.toLowerCase().trim();

	if (searchTerm) {
		if (
			normalisedTitle.includes(normalisedTerm) ||
			normalisedDescription.includes(normalisedTerm)
		) {
			return true;
		} else {
			return false;
		}
	}
	return true;
}

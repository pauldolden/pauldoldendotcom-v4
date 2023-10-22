import { categoryStore } from '$lib/stores/stores';
import type { PostMetadata } from '$lib/types';
const allPosts = import.meta.glob('./*.md');

const body: Promise<PostMetadata>[] = [];
// Fetch all metadata from .md blog posts
for (const path in allPosts) {
	const metadata = allPosts[path]().then(({ metadata }: { metadata: PostMetadata }) => metadata);
	body.push(metadata);
}
// Loader
export const load = async () => {
	let allPosts = await Promise.all(body);
	if (import.meta.env.PROD) {
		allPosts = allPosts.filter((post) => post.stage === 'published');
	}
	allPosts.sort((a, b) => {
		const dateB = new Date(b.date);
		const dateA = new Date(a.date);
		return dateB.getTime() - dateA.getTime();
	});
	// Build up post categories dynamically based on unique categories that exist.
	allPosts.forEach((post) => {
		categoryStore.update((categories) => {
			const newCategories = post.category.filter((category) => !categories.includes(category));

			return [...categories, ...newCategories];
		});
	});
	return {
		allPosts
	};
};

import { categoryStore } from '$lib/stores/stores';
// @ts-ignore
const allPosts = import.meta.glob('./*.md');

let body: Promise<PostMetadata>[] = [];
// Fetch all metadata from .md blog posts
for (const path in allPosts) {
	const metadata = allPosts[path]().then(({ metadata }: { metadata: PostMetadata }) => metadata);
	body.push(metadata);
}
// Loader
export const load = async () => {
	let allPosts = await Promise.all(body);
	// @ts-ignore
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
	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
	return {
		allPosts
	};
};

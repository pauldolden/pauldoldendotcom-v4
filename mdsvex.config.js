import remarkHtml from 'remark-html';
import rehypeInferReadingTimeMeta from 'rehype-infer-reading-time-meta';

export const mdsvexConfig = {
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [remarkHtml],
	rehypePlugins: [rehypeInferReadingTimeMeta],
	layout: {
		blog: './src/lib/components/Post.svelte'
	}
};

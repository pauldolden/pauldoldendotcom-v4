import remarkHtml from 'remark-html';

export const mdsvexConfig = {
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [remarkHtml],
	rehypePlugins: [],
	layout: {
		blog: './src/lib/components/Post.svelte'
	}
};

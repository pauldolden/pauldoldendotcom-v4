module.exports = {
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [],
	rehypePlugins: [],
	layout: {
		blog: './src/lib/components/Post.svelte'
	}
};

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				palette: {
					background: '#1A1B25',
					'bg-lighter': '#16161f',
					accent: '#E8985E',
					'accent-darker': '#e38541',
					text: '#F1E9DB',
					light: '#F1E9DB',
					dark: '#0D090A',
					brands: {
						typescript: '#2E79C7',
						comic: '#E52630',
						twitter: '#1DA1F2',
						linkedin: '#0077b5',
						twitch: '#6441a5',
						github: '#238636',
						svelte: '#FF3B00',
						aws: '#FF9900',
						react: '#61dbfb',
						blog: '#E8985E'
					}
				}
			},
			fontFamily: {
				rubik: 'Rubik'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

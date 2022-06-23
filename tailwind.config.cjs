module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				palette: {
					background: '#2D2A32',
					accent: '#BB2903',
					text: '#F1E9DB',
					brands: {
						typescript: '#2E79C7',
						comic: '#E52630',
						twitter: '#1DA1F2',
						linkedin: '#0077b5',
						twitch: '#6441a5',
						github: '#238636',
						svelte: '#FF3B00'
					}
				}
			},
			fontFamily: {
				rubik: 'Rubik'
			}
		}
	},
	plugins: []
};

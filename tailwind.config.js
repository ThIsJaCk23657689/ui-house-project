/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			'3xl': '1600px'
		},
		extend: {
			colors: {
				'primary': {
					100: '#119ECC', // 主題淺藍
					200: '#c9caca', // 主題淺灰
					300: '#555656', // 主題深灰
					400: '#b2b2b2', // 主題淺灰
					500: '#f5ff00', // 主題黃
					600: '#37a9a5', // 主題藍綠
				}
			},
			backgroundImage: {
				'map-button-to-r': 'linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
				'map-button-to-l': 'linear-gradient(to left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
			}
		},
	},
	plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'primary': {
					100: '#119ECC', // 主題淺藍
				}
			}
		},
	},
	plugins: [],
}


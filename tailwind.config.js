/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				Nunito: ['Nunito', 'sans-serif'],
				Montserrat: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
};

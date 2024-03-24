/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"azul": "#588cc0",
				"claro": "#e7ebec",
				"verde": "#8aa8ab",
				"violeta": "#676695",
				"azul_oscuro": "#2a3b54"
			}
		},
	},
	plugins: [],
}

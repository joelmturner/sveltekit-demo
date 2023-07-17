import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
	'html, body': {
		color: 'gray.100',
		lineHeight: '1.5',
		bg: 'gray.900'
	}
});

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,jsx,ts,tsx,svelte}', './pages/**/*.{js,jsx,ts,tsx,svelte}'],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {}
	},

	// The output directory for your css system
	outdir: 'styled-system',
	globalCss
});

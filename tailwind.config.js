module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		screens: {
			xs: '475px',
			sm: '500px',
			md: [
				// Sidebar appears at 768px, so revert to `sm:` styles between 768px
				// and 868px, after which the main content area is wide enough again to
				// apply the `md:` styles.
				{ min: '668px', max: '767px' },
				{ min: '868px' },
			],
			lg: '1100px',
			xl: '1400px',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}

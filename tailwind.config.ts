import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'dark-green': 'rgb(20 83 45)',
				'light-green': 'rgb(74 222 128)',
				'dark-gray': 'rgb(51 65 85)',
				'light-gray': 'rgb(203 213 225)',
			},
		},
	},
	plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				sans: ['"Open Sans"', ...fontFamily.sans],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
				"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"login-gradient":
				"linear-gradient(15deg, #866C9A 0%, #F2F1E7 45%, #F2F1E7 100%)",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					100: '#E1D2E6', // Lightest shade
					200: '#D0B4D3',
					300: '#C09FBF',
					400: '#A88BAE',
					500: '#866C9A', // Main light purple
					600: '#735C86',
					700: '#614B73',
					800: '#4D3B5D',
					900: '#3A2C48', // Darkest shade
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					100: '#F7F6F4', // Lightest shade
					200: '#F3EDE9',
					300: '#E8E3D8',
					400: '#E3D8C7',
					500: '#F2F1E7', // Main cream color
					600: '#D6D5D2',
					700: '#C9C8C1',
					800: '#BDBDBA',
					900: '#B2B2B0', // Darkest shade
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				neutral: {
					0: '#EFEFF4',
					50: '#F0F0F5',
					100: '#E1E1EA',
					200: '#C3C3D5',
					300: '#A4A4C1',
					400: '#8686AC',
					500: '#EFEFF4',
					600: '#535379',
					700: '#3E3E5B',
					800: '#2A2A3C',
					900: '#15151E',
					950: '#0A0A0F',
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ addBase, theme }) {
			addBase({
				'.heading-large': {
					color: '#2E2E2E',
					fontFamily: '"Open Sans", sans-serif',
					fontSize: '5.938rem',
					fontStyle: 'normal',
					fontWeight: '400',
					lineHeight: '118.75px',
				},
				'.title': {
					color: '#2E2E2E',
					fontFamily: '"Open Sans", sans-serif',
					fontSize: '4.750rem',
					fontStyle: 'normal',
					fontWeight: '900',
					lineHeight: '95px',
				},
				'.heading-medium': {
					color: '#2E2E2E',
					fontFamily: '"Open Sans", sans-serif',
					fontSize: '3.062rem',
					fontStyle: 'normal',
					fontWeight: '400',
					lineHeight: '76.25px',
				},
				'.h1': {
					color: '#2E2E2E',
					fontFamily: '"Open Sans", sans-serif',
					fontSize: '2.438rem',
					fontStyle: 'normal',
					fontWeight: '600',
					lineHeight: '61.25px',
				},
				'.h2': {
					color: '#2E2E2E',
					fontFamily: '"Open Sans", sans-serif',
					fontSize: '2.438rem',
					fontStyle: 'normal',
					fontWeight: '600',
					lineHeight: '48.75px',
				},
				'.h3': {
					color: '#2E2E2E',
					fontFamily: '"Open Sans", sans-serif',
					fontSize: '1.938rem',
					fontStyle: 'normal',
					fontWeight: '600',
					lineHeight: '38.75px',
				},
				'.subtitle': {
					color: '#2E2E2E',
					fontFamily: '"Open Sans", sans-serif',
					fontSize: '1.562rem',
					fontStyle: 'normal',
					fontWeight: '600',
					lineHeight: '31.25px',
				},
				'.body-large': {
					color: '#2E2E2E',
					fontFamily: '"Open Sans", sans-serif',
					fontSize: '1.250rem',
					fontStyle: 'normal',
					fontWeight: '400',
					lineHeight: '25px',
				},
				'.body-medium': {
					color: '#2E2E2E',
					fontFamily: '"Open Sans", sans-serif',
					fontSize: '1rem',
					fontStyle: 'normal',
					fontWeight: '400',
					lineHeight: '20px',
				},
				'.links': {
					color: '#2E2E2E',
					fontFamily: '"Open Sans", sans-serif',
					fontSize: '0.812rem',
					fontStyle: 'normal',
					fontWeight: '400',
					lineHeight: '16.25px',
				},
				'.caption': {
					color: '#2E2E2E',
					fontFamily: '"Open Sans", sans-serif',
					fontSize: '0.625rem',
					fontStyle: 'normal',
					fontWeight: '400',
					lineHeight: '12.5px',
				},
			});
		}
	],
};

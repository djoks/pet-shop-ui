import type { Config } from "tailwindcss";

export default <Partial<Config>>{
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#4EC690",
					50: "#D9F3E7",
					100: "#C9EEDD",
					200: "#ABE4CA",
					300: "#8CDAB7",
					400: "#6DD0A3",
					500: "#4EC690",
					600: "#36A674",
					700: "#287C56",
					800: "#1A5139",
					900: "#0D271B",
					950: "#06120C",
				},
				"blue-smoke": {
					DEFAULT: "#69817B",
					50: "#CCD6D3",
					100: "#C1CCC9",
					200: "#AABAB6",
					300: "#94A8A3",
					400: "#7D958F",
					500: "#69817B",
					600: "#50625E",
					700: "#374340",
					800: "#1D2423",
					900: "#040505",
					950: "#000000",
				},
			},
		},
	},
	plugins: [],
	content: [
		`./components/**/*.{vue,js,ts}`,
		`./layouts/**/*.vue`,
		`./pages/**/*.vue`,
		`./composables/**/*.{js,ts}`,
		`./plugins/**/*.{js,ts}`,
		`./utils/**/*.{js,ts}`,
		`./App.{js,ts,vue}`,
		`./app.{js,ts,vue}`,
		`./Error.{js,ts,vue}`,
		`./error.{js,ts,vue}`,
		`./app.config.{js,ts}`,
	],
};

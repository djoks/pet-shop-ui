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

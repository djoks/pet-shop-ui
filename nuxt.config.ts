// https://nuxt.com/docs/api/configuration/nuxt-config
import { existsSync, readFileSync } from "node:fs";

export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			link: [
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
				},
			],
		},
	},
	css: ["@/assets/css/main.css"],
	modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "vue3-carousel-nuxt"],
	plugins: ["@/plugins/directives.ts", "@/plugins/modal.ts"],
	vite: {
		vue: {
			script: {
				fs: {
					fileExists(file: string) {
						return existsSync(file);
					},
					readFile(file: string) {
						return readFileSync(file, "utf-8");
					},
				},
			},
		},
	},
});

// https://nuxt.com/docs/api/configuration/nuxt-config
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
});

import { defineNuxtPlugin } from "#app";
import ellipsize from "~/directives/ellipsize";
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive("ellipsize", ellipsize);
	nuxtApp.vueApp.use(FloatingVue);
});

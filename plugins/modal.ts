import { defineNuxtPlugin } from "#app";
import Modal from "../components/Modal/Modal.vue";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component("Modal", Modal);
});

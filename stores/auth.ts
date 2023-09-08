import { defineStore } from "pinia";

const isClient = typeof window !== "undefined";

export const useAuthStore = defineStore({
	id: "auth",
	state: () => ({
		token: isClient ? localStorage.getItem("jwt") : null,
		user: isClient ? JSON.parse(localStorage.getItem("user") || "null") : null,
	}),
	actions: {
		setToken(token: string) {
			this.token = token;
			if (isClient) {
				localStorage.setItem("jwt", token);
			}
		},
		setUser(user: any) {
			this.user = user;
			if (isClient) {
				localStorage.setItem("user", JSON.stringify(user));
			}
		},
		removeToken() {
			this.token = null;
			if (isClient) {
				localStorage.removeItem("jwt");
			}
		},
		isLoggedIn() {
			return !!this.token;
		},
	},
});

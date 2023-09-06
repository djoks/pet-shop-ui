import { ref } from "vue";

export const useMenu = () => {
	const menuItems = ref([]);

	if (menuType === "top") {
		menuItems.value = [
			{ id: 1, label: "Products", link: "" },
			{ id: 2, label: "Promotion", link: "" },
			{ id: 3, label: "Blog", link: "" },
		];
	} else if (menuType === "side") {
		menuItems.value = [
			{ id: 1, icon: "dashboard", label: "Dashboard", link: "/dashboard" },
			{ id: 2, icon: "all-tickets", label: "All Tickets", link: "" },
			{ id: 3, icon: "shipment-locator", label: "Shipment Locator", link: "" },
			{ id: 4, icon: "customers", label: "Customers", link: "" },
			{ id: 5, icon: "products", label: "Products", link: "" },
		];
	}

	return {
		menuItems,
	};
};

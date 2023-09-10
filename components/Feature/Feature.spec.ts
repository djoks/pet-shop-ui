import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Feature from "./Feature.vue";

describe("Feature.vue", () => {
	it("renders the caption and imageSrc props", () => {
		const imageSrc = "test-image.jpg";
		const caption = "Test Caption";
		const wrapper = mount(Feature, {
			props: { caption, imageSrc },
			global: {
				stubs: {
					NuxtLink: true, // stubbing NuxtLink
				},
			},
		});
		expect(wrapper.text()).toContain(caption);
		expect(wrapper.find("img").attributes("src")).toBe(imageSrc);
	});

	it("renders the actionText prop", () => {
		const actionText = "Click Me";
		const wrapper = mount(Feature, {
			props: {
				imageSrc: "test-image.jpg",
				caption: "Test Caption",
				actionText,
			},
			global: {
				stubs: {
					NuxtLink: {
						template: "<a><slot /></a>",
					},
				},
			},
		});
		expect(wrapper.text()).toContain(actionText);
	});

	it("renders with imagePosition left by default", () => {
		const wrapper = mount(Feature, {
			props: { imageSrc: "test-image.jpg", caption: "Test Caption" },
			global: {
				stubs: {
					NuxtLink: true, // stubbing NuxtLink
				},
			},
		});
		expect(wrapper.classes()).not.toContain("flex-row-reverse");
	});

	it("renders with imagePosition right when set", () => {
		const wrapper = mount(Feature, {
			props: {
				imageSrc: "test-image.jpg",
				caption: "Test Caption",
				imagePosition: "right",
			},
			global: {
				stubs: {
					NuxtLink: true, // stubbing NuxtLink
				},
			},
		});
		expect(wrapper.classes()).toContain("flex-row-reverse");
	});
});

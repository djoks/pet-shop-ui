import { mount } from "@vue/test-utils";
import FooterSection from "./FooterSection.vue";
import { describe, it, expect } from "vitest";

describe("FooterSection", () => {
	it("renders the footer section", () => {
		const title = "Sample Title";
		const wrapper = mount(FooterSection, {
			props: {
				props: { title },
			},
		});

		expect(wrapper.exists()).toBe(true);
	});
});

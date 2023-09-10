import { mount } from "@vue/test-utils";
import Footer from "./Footer.vue";
import { describe, it, expect } from "vitest";

describe("Footer", () => {
	it("renders the footer", () => {
		const wrapper = mount(Footer);

		expect(wrapper.exists()).toBe(true);
	});
});

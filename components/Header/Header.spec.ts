import { mount } from "@vue/test-utils";
import Header from "./Header.vue";
import { describe, it, expect } from "vitest";

describe("Header", () => {
	it("renders the header", () => {
		const wrapper = mount(Header);

		expect(wrapper.exists()).toBe(true);
	});
});

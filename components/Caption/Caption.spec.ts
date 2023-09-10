import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Caption from "./Caption.vue";

describe("Caption.vue", () => {
	it("renders the title and content props", () => {
		const title = "Test Title";
		const content = "Test Content";
		const wrapper = mount(Caption, {
			props: {
				title,
				content,
			},
		});

		expect(wrapper.text()).toContain(title);
		expect(wrapper.text()).toContain(content);
	});
});

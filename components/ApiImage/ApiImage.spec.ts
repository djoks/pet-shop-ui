import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ApiImage from "./ApiImage.vue";

describe("ApiImage.vue", () => {
	it("renders without crashing", () => {
		const wrapper = mount(ApiImage, {
			propsData: {
				uuid: "test-uuid",
			},
		});
		expect(wrapper.exists()).toBe(true);
	});
});

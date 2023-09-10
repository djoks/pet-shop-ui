import { mount } from "@vue/test-utils";
import CheckBoxInput from "./CheckBoxInput.vue";
import { describe, it, expect } from "vitest";

describe("CheckBoxInput", () => {
	it("renders the checkbox with initial value", () => {
		const wrapper = mount(CheckBoxInput, {
			props: {
				modelValue: true,
			},
		});

		expect(wrapper.exists()).toBe(true);
	});
});

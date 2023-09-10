import { mount } from "@vue/test-utils";
import TextInput from "./TextInput.vue";
import { describe, it, expect } from "vitest";

describe("TextInput", () => {
	it("renders the text input with initial value", () => {
		const wrapper = mount(TextInput, {
			props: {
				modelValue: "Test Value",
			},
		});

		expect(wrapper.exists()).toBe(true);
	});
});

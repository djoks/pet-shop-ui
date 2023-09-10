import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Logo from "./Logo.vue";

describe("Logo.vue", () => {
	it("renders with default props", () => {
		const wrapper = mount(Logo);
		expect(wrapper.props().variant).toBe("primary");
		expect(wrapper.props().alignment).toBe("vertical");
		expect(wrapper.props().size).toBe("md");
	});

	it("renders with custom props", () => {
		const wrapper = mount(Logo, {
			propsData: {
				variant: "white",
				alignment: "horizontal",
				size: "sm",
			},
		});
		expect(wrapper.props().variant).toBe("white");
		expect(wrapper.props().alignment).toBe("horizontal");
		expect(wrapper.props().size).toBe("sm");
	});
});

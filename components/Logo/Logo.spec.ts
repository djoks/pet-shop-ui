import { mount } from "@vue/test-utils";
import Logo from "./Logo.vue";

describe("Logo.vue", () => {
	// Test for default props
	it("renders with default props", () => {
		const wrapper = mount(Logo);
		expect(wrapper.props().variant).toBe("primary");
		expect(wrapper.props().alignment).toBe("vertical");
		expect(wrapper.props().size).toBe("md");
	});

	// Test for custom props
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

	// Test for SVG elements based on props
	// Test for SVG elements based on props
	it("renders SVG elements based on props", () => {
		const wrapper = mount(Logo, {
			propsData: {
				variant: "white",
			},
		});
		const svgElements = wrapper.findAll("svg");
		const firstSvgElement = svgElements.at(0);

		if (firstSvgElement.exists()) {
			expect(firstSvgElement.classes()).toContain("fill-white");
		} else {
			fail("SVG element not found");
		}
	});
});

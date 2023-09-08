import { mount } from "@vue/test-utils";
import Feature from "./Feature.vue";

describe("Feature.vue", () => {
	it("renders the caption prop", () => {
		const caption = "Test Caption";
		const wrapper = mount(Feature, {
			props: { caption },
		});
		expect(wrapper.text()).toContain(caption);
	});

	it("renders the actionText prop", () => {
		const actionText = "Click Me";
		const wrapper = mount(Feature, {
			props: { actionText },
		});
		expect(wrapper.text()).toContain(actionText);
	});

	it("renders the imageSrc prop", () => {
		const imageSrc = "test-image.jpg";
		const wrapper = mount(Feature, {
			props: { imageSrc },
		});
		expect(wrapper.find("img").attributes("src")).toBe(imageSrc);
	});

	it("renders with imagePosition left by default", () => {
		const wrapper = mount(Feature);
		expect(wrapper.classes()).toContain("flex-row");
	});

	it("renders with imagePosition right when set", () => {
		const wrapper = mount(Feature, {
			props: { imagePosition: "right" },
		});
		expect(wrapper.classes()).toContain("flex-row-reverse");
	});
});

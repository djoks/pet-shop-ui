import { mount } from "@vue/test-utils";
import Button from "./Button.vue";

describe("Button.vue", () => {
	it("renders button content via slot", () => {
		const wrapper = mount(Button, {
			slots: {
				default: "Click Me",
			},
		});
		expect(wrapper.text()).toBe("Click Me");
	});

	it("handles click when not disabled", async () => {
		const mockClick = jest.fn();
		const wrapper = mount(Button, {
			props: {
				onClick: mockClick,
			},
		});

		await wrapper.trigger("click");
		expect(mockClick).toHaveBeenCalled();
	});

	it("does not handle click when disabled", async () => {
		const mockClick = jest.fn();
		const wrapper = mount(Button, {
			props: {
				disabled: true,
				onClick: mockClick,
			},
		});

		await wrapper.trigger("click");
		expect(mockClick).not.toHaveBeenCalled();
	});

	it("sets button type to submit when submit prop is true", () => {
		const wrapper = mount(Button, {
			props: {
				submit: true,
			},
		});

		expect(wrapper.attributes("type")).toBe("submit");
	});

	// Add more tests to cover other props and their combinations
});

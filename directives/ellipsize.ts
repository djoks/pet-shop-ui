import { Directive } from "vue";

const ellipsize: Directive = {
	beforeMount(el, binding) {
		el.classList.add("truncate");
		el.classList.add("overflow-hidden");
		el.style.display = "-webkit-box";
		el.style.webkitBoxOrient = "vertical";

		if (binding.value) {
			el.style.webkitLineClamp = String(binding.value);
		} else {
			el.style.webkitLineClamp = "2"; // Default to 2 lines if no value is provided
		}
	},
	updated(el, binding) {
		if (binding.value !== binding.oldValue) {
			el.style.webkitLineClamp = String(binding.value);
		}
	},
};

export default ellipsize;

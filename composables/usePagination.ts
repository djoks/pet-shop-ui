import { ref, computed, watchEffect, Ref } from "vue";
import type { PaginationResponse } from "../types/api/pagination/PaginationResponse";

export function usePagination<T>(data: Ref<T | PaginationResponse<T> | null>) {
	const paginatedData = ref<T[] | null>(null);

	const isPaginated = (data: any): data is PaginationResponse<T> => {
		return data?.current_page !== undefined;
	};

	watchEffect(() => {
		if (data.value) {
			paginatedData.value = isPaginated(data.value)
				? data.value.data
				: [data.value];
		} else {
			paginatedData.value = null;
		}
	});

	return {
		isPaginated: computed(() => isPaginated(data.value)),
		paginatedData,
	};
}

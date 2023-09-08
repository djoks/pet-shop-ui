import { ref, Ref } from "vue";
import type { FetchState } from "../types/api/FetchState";
import type { PaginationResponse } from "../types/api/pagination/PaginationResponse";

export function useFetchApi<T>(
	baseUrl: string,
	queryParams: Record<string, any> = {}
): FetchState<Ref<T | PaginationResponse<T> | null>> {
	const loading = ref(true);
	const data: Ref<T | PaginationResponse<T> | null> = ref(null);
	const error = ref<Error | null>(null);

	const queryString = new URLSearchParams(queryParams).toString();
	const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;

	fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((result) => {
			data.value = result as T | PaginationResponse<T>;
			loading.value = false;
		})
		.catch((err: Error) => {
			error.value = err;
			loading.value = false;
		});

	return {
		loading,
		data,
		error,
	};
}

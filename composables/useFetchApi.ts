import { ref, Ref } from "vue";
import type { FetchState } from "../types/api/FetchState";
import type { PaginationResponse } from "../types/api/pagination/PaginationResponse";
import { useAuthStore } from "../stores/auth";

export function useFetchApi<T>(
	endpoint: string,
	queryParams: Record<string, any> = {},
	method: "GET" | "POST" = "GET",
	postData: Record<string, any> | null = null,
	errorHandler: (error: any) => void = () => {}
): FetchState<Ref<T | PaginationResponse<T> | null>> {
	const loading = ref(true);
	const data: Ref<T | PaginationResponse<T> | null> = ref(null);
	const error = ref<Error | null>(null);
	const auth = useAuthStore();

	const queryString = new URLSearchParams(queryParams).toString();
	const url = queryString
		? `https://pet-shop.buckhill.com.hr/api/v1/${endpoint}?${queryString}`
		: `https://pet-shop.buckhill.com.hr/api/v1/${endpoint}`;

	const fetchOptions: RequestInit = {
		method,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${auth.token}`,
		},
	};

	if (method === "POST" && postData) {
		fetchOptions.body = JSON.stringify(postData);
	}

	fetch(url, fetchOptions)
		.then((response) => {
			if (!response.ok) {
				return response.json().then((json) => {
					throw new Error(json.message || "Network response was not ok");
				});
			}
			return response.json();
		})
		.then((result) => {
			data.value = result as T | PaginationResponse<T>;
			loading.value = false;
		})
		.catch((err: Error) => {
			console.log({ err });
			error.value = err;
			loading.value = false;
		});

	return {
		loading,
		data,
		error,
	};
}

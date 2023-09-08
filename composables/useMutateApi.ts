import { ref } from "vue";

export function useMutateApi<T>() {
	const loading = ref(false);
	const data = ref<T | null>(null);
	const error = ref<Error | null>(null);

	const execute = async (endpoint: string, body: any) => {
		loading.value = true;
		try {
			const response = await fetch(
				`https://pet-shop.buckhill.com.hr/api/v1/${endpoint}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(body),
				}
			);
			if (!response.ok) {
				const json = await response.json();
				throw new Error(json.message || "Network response was not ok");
			}
			data.value = await response.json();
		} catch (err) {
			error.value = err;
		} finally {
			loading.value = false;
		}
	};

	return { execute, loading, data, error };
}

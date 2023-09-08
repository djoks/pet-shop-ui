import { Ref } from "vue";

export interface FetchState<T> {
	loading: Ref<boolean>;
	data: Ref<T | null>;
	error: Ref<Error | null>;
}

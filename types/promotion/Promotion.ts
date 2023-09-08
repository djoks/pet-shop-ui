import { MetaData } from "./MetaData";

export interface Promotion {
	uuid: string;
	title: string;
	content: string;
	metadata: MetaData;
	created_at: string;
	updated_at: string;
}

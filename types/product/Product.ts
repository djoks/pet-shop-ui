import { MetaData } from "./MetaData";
import { Category } from "../Category";

export type Product = {
	category_uuid: string;
	title: string;
	uuid: string;
	price: number;
	description: string;
	metadata: MetaData;
	created_at: string;
	updated_at: string;
	deleted_at: null | string;
	category: Category;
};

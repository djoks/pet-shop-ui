import { Product } from "./product/Product";

export type Category = {
	uuid: string;
	title: string;
	slug: string;
	products?: Product[];
	created_at: string;
	updated_at: string;
};

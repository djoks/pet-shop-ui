import { MenuItemProps } from "../MenuItem/MenuItem.types";

export interface MenuProps {
	items: MenuItemProps[];
	variant?: "light" | "dark";
	alignment?: "horizontal" | "vertical";
	uppercase?: true | false;
	fontSize?: "sm" | "md" | "lg";
	hoverClass?: string;
	activeClass?: string;
}

export interface MenuItemProps {
	variant?: "light" | "dark";
	icon?: string;
	label: string;
	link?: string;
	uppercase?: boolean;
	fontSize?: "sm" | "md" | "lg";
	subItems?: MenuItemProps[];
	hoverClass?: string;
	activeClass?: string;
}

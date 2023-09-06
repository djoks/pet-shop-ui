export interface ButtonProps {
	type?: "outline" | "raised";
	variant?: "primary" | "secondary" | "white";
	size?: "sm" | "md" | "full";
	disabled?: boolean;
	uppercase?: boolean;
	onClick?: () => void;
}

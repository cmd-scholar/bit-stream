import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const truncateString = (
	address: string | undefined,
	startLength: number = 6,
	endLength: number = 4,
	ellipsis: string = "...",
): string => {
	if (!address) return "";
	if (address.length <= startLength + endLength) return address;
	return `${address.slice(0, startLength)}${ellipsis}${address.slice(-endLength)}`;
};

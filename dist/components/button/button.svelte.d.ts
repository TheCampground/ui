import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
import { type VariantProps } from "tailwind-variants";
import { type WithElementRef } from "../../utils.js";
export declare const buttonVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        primary: string;
        secondary: string;
        outline: string;
        ghost: string;
        danger: string;
        link: string;
    };
    size: {
        default: string;
        small: string;
        icon: string;
    };
}, undefined, "rounded-input inline-flex items-center scale-3d justify-center text-sm font-semibold disabled:pointer-events-none disabled:opacity-70 active:scale-[0.992] will-change-scale disabled:cursor-not-allowed transition-all cursor-pointer text-foreground", {
    variant: {
        default: string;
        primary: string;
        secondary: string;
        outline: string;
        ghost: string;
        danger: string;
        link: string;
    };
    size: {
        default: string;
        small: string;
        icon: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        primary: string;
        secondary: string;
        outline: string;
        ghost: string;
        danger: string;
        link: string;
    };
    size: {
        default: string;
        small: string;
        icon: string;
    };
}, undefined, "rounded-input inline-flex items-center scale-3d justify-center text-sm font-semibold disabled:pointer-events-none disabled:opacity-70 active:scale-[0.992] will-change-scale disabled:cursor-not-allowed transition-all cursor-pointer text-foreground", unknown, unknown, undefined>>;
export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
export type ButtonSize = VariantProps<typeof buttonVariants>["size"];
export type ButtonProps = WithElementRef<HTMLButtonAttributes> & WithElementRef<HTMLAnchorAttributes> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
};
import { Button } from "bits-ui";
declare const Button: import("svelte").Component<ButtonProps, {}, "ref">;
type Button = ReturnType<typeof Button>;
export default Button;

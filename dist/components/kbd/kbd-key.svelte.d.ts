import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
import { type VariantProps } from "tailwind-variants";
import { type WithElementRef } from "../../utils.js";
export declare const keyboardVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        primary: string;
        secondary: string;
        danger: string;
    };
    size: {
        default: string;
        small: string;
        large: string;
    };
}, undefined, "font-mono font-normal leading-none flex items-center justify-center select-none", {
    variant: {
        default: string;
        primary: string;
        secondary: string;
        danger: string;
    };
    size: {
        default: string;
        small: string;
        large: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        primary: string;
        secondary: string;
        danger: string;
    };
    size: {
        default: string;
        small: string;
        large: string;
    };
}, undefined, "font-mono font-normal leading-none flex items-center justify-center select-none", unknown, unknown, undefined>>;
export type KeyboardVariant = VariantProps<typeof keyboardVariants>["variant"];
export type KeyboardSize = VariantProps<typeof keyboardVariants>["size"];
export type KeyboardProps = WithElementRef<HTMLButtonAttributes> & WithElementRef<HTMLAnchorAttributes> & {
    variant?: KeyboardVariant;
    size?: KeyboardSize;
    hideOnMobile?: boolean;
};
declare const KbdKey: import("svelte").Component<KeyboardProps, {}, "">;
type KbdKey = ReturnType<typeof KbdKey>;
export default KbdKey;

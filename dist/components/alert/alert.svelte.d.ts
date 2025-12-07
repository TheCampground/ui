import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
import type { IconSource } from "@steeze-ui/phosphor-icons";
import { type VariantProps } from "tailwind-variants";
import { type WithElementRef } from "../../utils.js";
import type { Snippet } from "svelte";
export declare const alertVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        success: string;
        info: string;
        secondary: string;
        danger: string;
    };
}, undefined, "flex gap-3 p-3 items-start rounded-lg w-full text-sm leading-4.5", {
    variant: {
        default: string;
        success: string;
        info: string;
        secondary: string;
        danger: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        success: string;
        info: string;
        secondary: string;
        danger: string;
    };
}, undefined, "flex gap-3 p-3 items-start rounded-lg w-full text-sm leading-4.5", unknown, unknown, undefined>>;
export type AlertVariant = VariantProps<typeof alertVariants>["variant"];
export type AlertProps = WithElementRef<HTMLButtonAttributes> & WithElementRef<HTMLAnchorAttributes> & {
    variant?: AlertVariant;
    children?: Snippet;
    icon?: IconSource;
};
declare const Alert: import("svelte").Component<AlertProps, {}, "">;
type Alert = ReturnType<typeof Alert>;
export default Alert;

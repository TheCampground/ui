import type { IconSource } from "@steeze-ui/phosphor-icons";
import type { HTMLInputAttributes } from "svelte/elements";
import { type WithElementRef } from "../../utils.js";
type InputAllowedTypes = "text" | "file" | "number" | "email" | "password" | "search" | "tel" | "url" | "week";
type BaseProps = {
    value?: any;
    placeholder?: string;
    type?: Exclude<InputAllowedTypes, "range" | "color" | "date" | "datetime-local" | "time">;
};
type PropsWithIcon = BaseProps & {
    icon: IconSource;
    position: "left" | "right";
};
type PropsWithoutIcon = BaseProps & {
    icon?: never;
    position?: never;
};
type Props = WithElementRef<HTMLInputAttributes> & (PropsWithIcon | PropsWithoutIcon);
declare const Input: import("svelte").Component<Props, {}, "value">;
type Input = ReturnType<typeof Input>;
export default Input;

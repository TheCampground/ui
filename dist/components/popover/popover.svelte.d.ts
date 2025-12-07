import { type ButtonSize, type ButtonVariant } from "../button/button.svelte";
import { type IconSource } from "@steeze-ui/svelte-icon";
import { Popover, type WithoutChild } from "bits-ui";
type PopoverWithTrigger = {
    buttonText: string | IconSource;
    buttonClass?: string;
    buttonVariant?: ButtonVariant;
    buttonSize?: ButtonSize;
    contentProps?: WithoutChild<Popover.ContentProps>;
    useTrigger?: true;
    useOverlay?: boolean;
    anchor?: never;
};
type PopoverWithoutTrigger = {
    buttonText?: never;
    buttonClass?: never;
    buttonVariant?: never;
    buttonSize?: never;
    contentProps?: WithoutChild<Popover.ContentProps>;
    useTrigger?: false;
    useOverlay?: boolean;
    anchor?: HTMLElement;
};
type Props = Popover.RootProps & (PopoverWithTrigger | PopoverWithoutTrigger);
declare const Popover: import("svelte").Component<Props, {}, "open">;
type Popover = ReturnType<typeof Popover>;
export default Popover;

import type { Snippet } from "svelte";
import { Dialog, type WithoutChild } from "bits-ui";
import { type ButtonSize, type ButtonVariant } from "../button/button.svelte";
type DialogWithTrigger = {
    buttonText: string;
    buttonVariant?: ButtonVariant;
    buttonSize?: ButtonSize;
    title: Snippet;
    description: Snippet;
    contentProps?: WithoutChild<Dialog.ContentProps>;
    useTrigger?: true;
};
type DialogWithoutTrigger = {
    buttonText?: never;
    buttonVariant?: never;
    buttonSize?: never;
    title: Snippet;
    description: Snippet;
    contentProps?: WithoutChild<Dialog.ContentProps>;
    useTrigger?: false;
};
type Props = Dialog.RootProps & (DialogWithTrigger | DialogWithoutTrigger);
declare const Dialog: import("svelte").Component<Props, {}, "open">;
type Dialog = ReturnType<typeof Dialog>;
export default Dialog;

import { type ButtonSize, type ButtonVariant } from "../button/button.svelte";
import { AlertDialog, type WithoutChild } from "bits-ui";
import type { Snippet } from "svelte";
type AlertDialogWithTrigger = {
    buttonText: string;
    buttonVariant?: ButtonVariant;
    buttonSize?: ButtonSize;
    title: Snippet;
    description: Snippet;
    contentProps?: WithoutChild<AlertDialog.ContentProps>;
    useTrigger?: true;
};
type AlertDialogWithoutTrigger = {
    buttonText?: never;
    buttonVariant?: never;
    buttonSize?: never;
    title: Snippet;
    description: Snippet;
    contentProps?: WithoutChild<AlertDialog.ContentProps>;
    useTrigger?: false;
};
type Props = AlertDialog.RootProps & (AlertDialogWithTrigger | AlertDialogWithoutTrigger);
declare const AlertDialog: import("svelte").Component<Props, {}, "open">;
type AlertDialog = ReturnType<typeof AlertDialog>;
export default AlertDialog;

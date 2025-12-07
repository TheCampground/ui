import { Checkbox, Label, type WithoutChildrenOrChild } from "bits-ui";
import type { Snippet } from "svelte";
type PropsAsSnippet = {
    for: string;
    label?: never;
    children: Snippet;
};
type PropsAsParam = {
    for: string;
    label?: string;
    children?: never;
};
type $$ComponentProps = WithoutChildrenOrChild<Checkbox.RootProps> & (PropsAsSnippet | PropsAsParam);
declare const Label: import("svelte").Component<$$ComponentProps, {}, "ref" | "checked">;
type Label = ReturnType<typeof Label>;
export default Label;

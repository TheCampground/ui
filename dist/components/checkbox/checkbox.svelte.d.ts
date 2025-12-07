import type { Snippet } from "svelte";
import { Checkbox, type WithoutChildrenOrChild } from "bits-ui";
type PropsAsSnippet = {
    label?: never;
    labelRef?: HTMLLabelElement | null;
    children: Snippet;
};
type PropsAsParam = {
    label?: string;
    labelRef?: HTMLLabelElement | null;
    children?: never;
};
type $$ComponentProps = WithoutChildrenOrChild<Checkbox.RootProps> & (PropsAsSnippet | PropsAsParam);
declare const Checkbox: import("svelte").Component<$$ComponentProps, {}, "ref" | "checked" | "labelRef">;
type Checkbox = ReturnType<typeof Checkbox>;
export default Checkbox;

import { Switch, type WithoutChildrenOrChild } from "bits-ui";
import type { Snippet } from "svelte";
type PropsAsSnippet = {
    label?: never;
    size?: "default" | "small";
    labelRef?: HTMLLabelElement | null;
    children: Snippet;
};
type PropsAsParam = {
    label?: string;
    size?: "default" | "small";
    labelRef?: HTMLLabelElement | null;
    children?: never;
};
type $$ComponentProps = WithoutChildrenOrChild<Switch.RootProps> & (PropsAsSnippet | PropsAsParam);
declare const Switch: import("svelte").Component<$$ComponentProps, {}, "ref" | "checked" | "labelRef">;
type Switch = ReturnType<typeof Switch>;
export default Switch;

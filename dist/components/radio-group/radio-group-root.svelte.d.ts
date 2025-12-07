import { RadioGroup as BitsRadioGroup, type WithoutChildrenOrChild } from "bits-ui";
import type { Snippet } from "svelte";
export type RadioGroupItemProps = {
    value: string;
    label: string;
    disabled?: boolean;
};
type RadioGroupAsProp = {
    children?: never;
    items: RadioGroupItemProps[];
};
type RadioGroupAsItems = {
    children: Snippet;
    items?: never;
};
type $$ComponentProps = WithoutChildrenOrChild<BitsRadioGroup.RootProps> & (RadioGroupAsProp | RadioGroupAsItems);
declare const RadioGroupRoot: import("svelte").Component<$$ComponentProps, {}, "value" | "ref">;
type RadioGroupRoot = ReturnType<typeof RadioGroupRoot>;
export default RadioGroupRoot;

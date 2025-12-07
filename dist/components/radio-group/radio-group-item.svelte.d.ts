import { RadioGroup, type WithoutChildrenOrChild } from "bits-ui";
import type { Snippet } from "svelte";
type $$ComponentProps = WithoutChildrenOrChild<RadioGroup.ItemProps> & {
    children?: Snippet;
};
declare const RadioGroupItem: import("svelte").Component<$$ComponentProps, {}, "">;
type RadioGroupItem = ReturnType<typeof RadioGroupItem>;
export default RadioGroupItem;

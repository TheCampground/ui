import { type IconSource } from "@steeze-ui/phosphor-icons";
import { DropdownMenu } from "bits-ui";
import type { Snippet } from "svelte";
type $$ComponentProps = DropdownMenu.CheckboxItemProps & {
    children?: Snippet;
    class?: string;
    icon?: IconSource;
};
declare const DropdownMenuCheckboxItem: import("svelte").Component<$$ComponentProps, {}, "checked">;
type DropdownMenuCheckboxItem = ReturnType<typeof DropdownMenuCheckboxItem>;
export default DropdownMenuCheckboxItem;

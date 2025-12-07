import type { IconSource } from "@steeze-ui/phosphor-icons";
import { DropdownMenu } from "bits-ui";
type $$ComponentProps = DropdownMenu.ItemProps & {
    class?: string;
    icon?: IconSource;
    keybind?: string | string[];
};
declare const DropdownMenuItem: import("svelte").Component<$$ComponentProps, {}, "">;
type DropdownMenuItem = ReturnType<typeof DropdownMenuItem>;
export default DropdownMenuItem;

import { type IconSource } from "@steeze-ui/svelte-icon";
import type { Snippet } from "svelte";
type Props = {
    icon: IconSource;
    title: String;
    description: Snippet;
    children?: Snippet;
};
declare const Empty: import("svelte").Component<Props, {}, "">;
type Empty = ReturnType<typeof Empty>;
export default Empty;

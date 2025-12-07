export declare const RadioGroup: {
    Root: import("svelte").Component<Omit<Omit<import("bits-ui").RadioGroupRootProps, "child">, "children"> & ({
        children?: never;
        items: import("./radio-group-root.svelte").RadioGroupItemProps[];
    } | {
        children: import("svelte").Snippet;
        items?: never;
    }), {}, "value" | "ref">;
    Item: import("svelte").Component<Omit<Omit<import("bits-ui").RadioGroupItemProps, "child">, "children"> & {
        children?: import("svelte").Snippet;
    }, {}, "">;
};
export default RadioGroup;

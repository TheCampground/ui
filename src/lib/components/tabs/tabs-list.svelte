
<script lang="ts">
	import { cn } from "$lib/utils.js"
    import { Tabs } from "bits-ui"

    let {
        children,
        title,
        class: className,
        ...restProps
    }: Tabs.ListProps & { class?: string } = $props()
</script>

<Tabs.List
    {...restProps}
    class={cn(className, "rounded-9px bg-dark-10 shadow-mini-inset dark:bg-background grid w-full grid-cols-2 gap-1 p-1 text-sm font-semibold leading-[0.01em] dark:border dark:border-neutral-600/30")}
>
    {@render children?.()}
</Tabs.List>

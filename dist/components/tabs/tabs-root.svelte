
<script lang="ts">
	import { cn } from "../../utils.js"
    import { Tabs } from "bits-ui"

    let {
        value = $bindable(),
        children,
        title,
        class: className,
        ...restProps
    }: Tabs.RootProps & { class?: string } = $props()
</script>

<Tabs.Root
    bind:value
    {...restProps}
    class={cn(className, "rounded-card border-card-alt bg-card shadow-card w-[390px] border p-3")}
>
    {@render children?.()}
</Tabs.Root>

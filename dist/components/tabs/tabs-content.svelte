
<script lang="ts">
	import { cn } from "../../utils.js"
    import { Tabs } from "bits-ui"

    let {
        value,
        children,
        title,
        class: className,
        ...restProps
    }: Tabs.ContentProps & { class?: string } = $props()
</script>

<Tabs.Content
    {value}
    {...restProps}
    class={cn(className, "select-none pt-3")}
>
    {@render children?.()}
</Tabs.Content>

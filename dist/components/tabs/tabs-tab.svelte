
<script lang="ts">
	import { cn } from "../../utils.js"
    import { Tabs } from "bits-ui"

    let {
        value,
        children,
        title,
        class: className,
        ...restProps
    }: Tabs.TriggerProps & { class?: string } = $props()
</script>

<Tabs.Trigger
    {value}
    {...restProps}
    class={cn(className, "data-[state=active]:shadow-mini h-8 rounded-[7px] bg-transparent py-2 data-[state=active]:bg-brand data-[state=active]:text-brand-foreground")}
>
    {@render children?.()}
</Tabs.Trigger>

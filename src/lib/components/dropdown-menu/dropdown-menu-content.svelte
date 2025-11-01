
<script lang="ts">
	import { cn } from "$lib/utils.ts"
    import { DropdownMenu } from "bits-ui"

    let {
        children,
        title,
        class: className,
        sideOffset = 0,
        ...restProps
    }: DropdownMenu.ContentProps & { class?: string, sideOffset?: number } = $props()
</script>

<DropdownMenu.Content
    {sideOffset}
    {...restProps}
    class={cn(className, "border-muted bg-background shadow-popover outline-hidden focus-visible:outline-hidden w-[229px] rounded-xl border px-1 py-1.5 z-100")}
>
    <DropdownMenu.Arrow />
    {@render children?.()}
</DropdownMenu.Content>

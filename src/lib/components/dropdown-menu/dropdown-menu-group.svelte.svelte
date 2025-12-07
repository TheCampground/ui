
<script lang="ts">
	import { cn } from "$lib/utils.js"
    import { DropdownMenu } from "bits-ui"

    let {
        children,
        title,
        class: className,
        ...restProps
    }: DropdownMenu.GroupProps & { class?: string, title: string } = $props()
</script>

<DropdownMenu.Group
    {...restProps}
    class={cn(className, "flex flex-col w-full gap-1 text-sm font-semibold leading-[0.01em] dark:border-neutral-600/30")}
>
    <DropdownMenu.GroupHeading class="px-2 pt-1 text-xs font-bold text-foreground-alt">{title}</DropdownMenu.GroupHeading>
    {@render children?.()}
</DropdownMenu.Group>

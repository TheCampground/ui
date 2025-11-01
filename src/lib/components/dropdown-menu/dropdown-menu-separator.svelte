<script lang="ts">
    import { DropdownMenu } from "bits-ui"
    import { cn } from "$lib/utils.ts"

    let {
        class: className,
        ...restProps
    }: DropdownMenu.SeparatorProps = $props()
</script>

<DropdownMenu.Separator
    {...restProps}
    class={cn(className, "my-1.5 h-px bg-muted -mx-1 w-[calc(100%+var(--spacing)*2)]")}
/>

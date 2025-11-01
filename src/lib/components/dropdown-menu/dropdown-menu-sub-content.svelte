
<script lang="ts">
    import { DropdownMenu } from "bits-ui"
	import type { Snippet } from "svelte"
	import { cn } from "$lib/utils.ts"

    let {
        children,
        class: className,
        ...restProps
    }: DropdownMenu.SubContentProps & { class?: string, children?: Snippet } = $props()
</script>

<DropdownMenu.SubContent
    {...restProps}
    class={cn(className, "border-muted bg-background shadow-popover outline-hidden focus-visible:outline-hidden w-[229px] rounded-xl border px-1 py-1.5 z-100")}
>
    <DropdownMenu.Arrow />
    <DropdownMenu.Portal>
        {@render children?.()}
    </DropdownMenu.Portal>
</DropdownMenu.SubContent>

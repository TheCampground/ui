
<script lang="ts">
	import { fly } from "svelte/transition"
    import { DropdownMenu } from "bits-ui"
	import { cn } from "$lib/utils.ts"

    let {
        children,
        class: className,
        ...restProps
    }: DropdownMenu.SubContentProps & { class?: string } = $props()
</script>

<DropdownMenu.Portal>
    <DropdownMenu.SubContent
        {...restProps}
        class={cn(className, "border-muted bg-background shadow-popover outline-hidden focus-visible:outline-hidden w-[229px] rounded-xl border px-1 py-1.5 z-100")}
    >
        {#snippet child({ wrapperProps, props, open })}
            {#if open}
                <div {...wrapperProps}>
                    <div {...props} transition:fly={{ duration: 300 }}>
                        {@render children?.()}
                    </div>
                    <DropdownMenu.Arrow />
                </div>
            {/if}
        {/snippet}
    </DropdownMenu.SubContent>
</DropdownMenu.Portal>

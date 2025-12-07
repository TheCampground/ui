
<script lang="ts">
	import { fly } from "svelte/transition"
    import { DropdownMenu } from "bits-ui"
	import { cn } from "../../utils.js"

    let {
        children,
        title,
        class: className,
        anchor,
        ...restProps
    }: DropdownMenu.ContentProps & {
        class?: string,
        anchor?: HTMLElement
    } = $props()
</script>

<DropdownMenu.Portal>
    <DropdownMenu.Content
        forceMount
        {...restProps}
        customAnchor={anchor}
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
    </DropdownMenu.Content>
</DropdownMenu.Portal>

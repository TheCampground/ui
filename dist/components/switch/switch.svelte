<script lang="ts">
	import { cn } from "../../utils.js"
    import { Switch, Label, useId, type WithoutChildrenOrChild } from "bits-ui"
   	import type { Snippet } from "svelte"

    type PropsAsSnippet = {
        label?: never
        size?: "default" | "small"
        labelRef?: HTMLLabelElement | null
        children: Snippet
    }
    type PropsAsParam = {
        label?: string
        size?: "default" | "small"
        labelRef?: HTMLLabelElement | null
        children?: never
    }

    let {
        id = useId(),
        checked = $bindable(false),
        ref = $bindable(null),
        labelRef = $bindable(null),
        label,
        children,
        size = "default",
        ...restProps
    }: WithoutChildrenOrChild<Switch.RootProps> & (PropsAsSnippet | PropsAsParam) = $props()
</script>

<div class="flex items-center gap-2">
    <Switch.Root
        bind:checked
        bind:ref
        {id}
        {...restProps}
        class={cn(
            size === "small" ? "h-5 min-h-5 w-8" : "h-6 min-h-6 w-10",
            "focus-visible:ring-foreground focus-visible:ring-offset-background data-[state=checked]:bg-brand data-[state=unchecked]:bg-dark-10 focus-visible:outline-hidden peer inline-flex shrink-0 cursor-pointer items-center rounded-full px-[3px] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        )}
    >
        <Switch.Thumb
            class={cn(
                size === "small" ? "size-3.5 data-[state=checked]:translate-x-3" : "size-4.5 data-[state=checked]:translate-x-4",
                "bg-background data-[state=unchecked]:translate-x-0 dark:border-background/30 dark:bg-foreground pointer-events-none block shrink-0 rounded-full transition-transform top-1/2"
            )}
        />
    </Switch.Root>
    {#if label || children}
        <Label.Root for={id} bind:ref={labelRef} class={cn("text-sm", restProps.disabled && "opacity-60!")}>
            {#if label}
                {label}
            {:else}
                {@render children?.()}
            {/if}
        </Label.Root>
    {/if}
</div>

<script lang="ts">
	import { cn } from "$lib/utils.ts"
    import {
        Checkbox,
        Label,
        useId,
        type WithoutChildrenOrChild,
    } from "bits-ui"
	import type { Snippet } from "svelte"

    type PropsAsSnippet = {
        for: string
        label?: never
        children: Snippet
    }
    type PropsAsParam = {
        for: string
        label?: string
        children?: never
    }

    let {
        for: forId = useId(),
        checked = $bindable(false),
        ref = $bindable(null),
        label,
        children,
        ...restProps
    }: WithoutChildrenOrChild<Checkbox.RootProps> & (PropsAsSnippet | PropsAsParam) = $props()
</script>

<Label.Root for={forId} bind:ref class={cn("text-sm", restProps.disabled && "opacity-60!")}>
    {#if label}
        {label}
    {:else}
        {@render children?.()}
    {/if}
</Label.Root>

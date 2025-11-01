<script lang="ts">
	import { cn } from "$lib/utils.ts"
	import { Check, Minus, Tilde } from "@steeze-ui/phosphor-icons"
	import { Icon } from "@steeze-ui/svelte-icon"
    import {
        Checkbox,
        Label,
        useId,
        type WithoutChildrenOrChild,
    } from "bits-ui"
	import type { Snippet } from "svelte"

    type PropsAsSnippet = {
        label?: never
        labelRef?: HTMLLabelElement | null
        children: Snippet
    }
    type PropsAsParam = {
        label?: string
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
        ...restProps
    }: WithoutChildrenOrChild<Checkbox.RootProps> & (PropsAsSnippet | PropsAsParam) = $props()
</script>

<div class="flex items-center gap-2">
    <Checkbox.Root {id} bind:checked bind:ref {...restProps} class="disabled:opacity-60">
        {#snippet children({ checked, indeterminate })}
            {@const icon = indeterminate ? Minus : checked ? Check : Tilde}
            <div class={cn(
                "size-6 bg-foreground-alt/5 border rounded-lg flex items-center justify-center",
                indeterminate ? "" : checked ? "bg-button-primary! border-button-primary-dark text-black" : "bg-button-primary/20 dark:text-button-primary"
            )}>
                <Icon src={icon} theme="bold" class="size-4" />
            </div>
        {/snippet}
    </Checkbox.Root>
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

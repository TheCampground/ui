<script lang="ts">
	import { Check, X, Tilde } from "@steeze-ui/phosphor-icons"
	import { Icon } from "@steeze-ui/svelte-icon"
    import type { Snippet } from "svelte"
	import { cn } from "$lib/utils.ts"
    import {
        Checkbox,
        Label,
        useId,
        type WithoutChildrenOrChild,
    } from "bits-ui"

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
            {@const icon = indeterminate ? Tilde : checked ? Check : X}
            <div class={cn(
                "size-6 bg-foreground-alt/5 border rounded-lg flex items-center justify-center",
                indeterminate ? "" : "bg-button-primary! border-button-primary-dark text-black"
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


<script lang="ts">
    import type { Snippet } from "svelte";
    import { Popover, type WithoutChild } from "bits-ui";
	import { buttonVariants, type ButtonSize, type ButtonVariant } from "@core/button/button.svelte"
	import { Icon, type IconSource } from "@steeze-ui/svelte-icon"
	import { cn } from "$lib/utils.ts"

    type PopoverWithTrigger = {
        buttonText: string | IconSource
        buttonClass?: string
        buttonVariant?: ButtonVariant
        buttonSize?: ButtonSize
        contentProps?: WithoutChild<Popover.ContentProps>
        useTrigger?: true
        useOverlay?: boolean
        anchor?: never
    }
    type PopoverWithoutTrigger = {
        buttonText?: never
        buttonClass?: never
        buttonVariant?: never
        buttonSize?: never
        contentProps?: WithoutChild<Popover.ContentProps>
        useTrigger?: false
        useOverlay?: boolean
        anchor?: HTMLElement
    }

    type Props = Popover.RootProps & (PopoverWithTrigger | PopoverWithoutTrigger)

    let {
        open = $bindable(false),
        children,
        buttonText,
        buttonClass,
        buttonVariant = "primary",
        buttonSize,
        contentProps,
        useTrigger = true,
        useOverlay = false,
        anchor,
        ...restProps
    }: Props = $props()
</script>

<Popover.Root bind:open {...restProps}>
    {#if useTrigger}
        <Popover.Trigger class={cn(buttonClass, buttonVariants({ variant: buttonVariant, size: buttonSize }))}>
            {#if typeof buttonText === "string"}
                {buttonText}
            {:else if typeof buttonText === "object"}
                <Icon src={buttonText} theme="bold" class="size-4" />
            {/if}
        </Popover.Trigger>
    {/if}
    <Popover.Portal>
        {#if useOverlay}
            <Popover.Overlay class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/30" />
        {/if}
        <Popover.Content
            customAnchor={anchor}
            {...restProps}
            class="border-dark-10 bg-background shadow-popover data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--bits-popover-content-transform-origin) z-50 w-full min-w-[200px] rounded-xl border p-4"
            sideOffset={8}
        >
            {@render children?.()}
            <Popover.Arrow class="z-50" />
        </Popover.Content>
    </Popover.Portal>
</Popover.Root>


<script lang="ts">
    import type { Snippet } from "svelte";
    import { Dialog, type WithoutChild } from "bits-ui";
	import { buttonVariants, type ButtonSize, type ButtonVariant } from "@core/button/button.svelte"

    type DialogWithTrigger = {
        buttonText: string
        buttonVariant?: ButtonVariant
        buttonSize?: ButtonSize
        title: Snippet
        description: Snippet
        contentProps?: WithoutChild<Dialog.ContentProps>
        useTrigger?: true
    }
    type DialogWithoutTrigger = {
        buttonText?: never
        buttonVariant?: never
        buttonSize?: never
        title: Snippet
        description: Snippet
        contentProps?: WithoutChild<Dialog.ContentProps>
        useTrigger?: false
    }

    type Props = Dialog.RootProps & (DialogWithTrigger | DialogWithoutTrigger)

    let {
        open = $bindable(false),
        children,
        buttonText,
        buttonVariant = "primary",
        buttonSize,
        contentProps,
        title,
        description,
        useTrigger = true,
        ...restProps
    }: Props = $props()
</script>

<Dialog.Root bind:open {...restProps}>
    {#if useTrigger}
        <Dialog.Trigger class={buttonVariants({ variant: buttonVariant, size: buttonSize })}>
            {buttonText}
        </Dialog.Trigger>
    {/if}
    <Dialog.Portal>
        <Dialog.Overlay class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/40" />
        <Dialog.Content {...contentProps} class="rounded-card-lg bg-background shadow-popover data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 outline-hidden fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 border p-7 sm:max-w-lg md:w-full">
            <Dialog.Title class="text-lg font-semibold tracking-tight">
                {@render title()}
            </Dialog.Title>
            <Dialog.Description class="text-foreground-alt text-sm">
                {@render description()}
            </Dialog.Description>
            {@render children?.()}
        </Dialog.Content>
    </Dialog.Portal>
</Dialog.Root>

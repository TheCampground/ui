
<script lang="ts">
	import { buttonVariants, type ButtonSize, type ButtonVariant } from "@core/button/button.svelte"
    import { DropdownMenu, type WithoutChild } from "bits-ui"

    type DropdownMenuWithTrigger = {
        buttonText: string
        buttonVariant?: ButtonVariant
        buttonSize?: ButtonSize
        contentProps?: WithoutChild<DropdownMenu.ContentProps>
        useTrigger?: true
    }
    type DropdownMenuWithoutTrigger = {
        buttonText?: never
        buttonVariant?: never
        buttonSize?: never
        contentProps?: WithoutChild<DropdownMenu.ContentProps>
        useTrigger?: false
    }

    type Props = DropdownMenu.RootProps & (DropdownMenuWithTrigger | DropdownMenuWithoutTrigger) & {
        class?: string
    }

    let {
        open = $bindable(),
        children,
        class: className,
        buttonText,
        buttonVariant = "primary",
        buttonSize,
        useTrigger = true,
        ...restProps
    }: Props = $props()
</script>

<DropdownMenu.Root
    bind:open
    {...restProps}
>
    {#if useTrigger}
    <DropdownMenu.Trigger class={buttonVariants({ variant: buttonVariant, size: buttonSize })}>
        {buttonText}
    </DropdownMenu.Trigger>
    {/if}
    <DropdownMenu.Portal>
        {@render children?.()}
    </DropdownMenu.Portal>
</DropdownMenu.Root>

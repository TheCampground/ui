
<script lang="ts">
    import { buttonVariants } from "@core/button/button.svelte"
    import { AlertDialog, type WithoutChild } from "bits-ui"
    import type { Snippet } from "svelte"
	import { cn } from "$lib/utils.ts"

    type Props = AlertDialog.RootProps & {
        buttonText: string
        title: Snippet
        description: Snippet
        contentProps?: WithoutChild<AlertDialog.ContentProps>
    }

    let {
        open = $bindable(false),
        children,
        buttonText,
        contentProps,
        title,
        description,
        ...restProps
    }: Props = $props()
</script>

<AlertDialog.Root bind:open {...restProps}>
    <AlertDialog.Trigger class={buttonVariants({ variant: "primary" })}>{buttonText}</AlertDialog.Trigger>
    <AlertDialog.Portal>
        <AlertDialog.Overlay class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/40" />
        <AlertDialog.Content class="rounded-card-lg bg-background shadow-popover data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 outline-hidden fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 border p-7 sm:max-w-lg md:w-full" {...contentProps}>
            <AlertDialog.Title class="text-lg font-semibold tracking-tight">
                {@render title()}
            </AlertDialog.Title>
            <AlertDialog.Description class="text-foreground-alt text-sm">
                {@render description()}
            </AlertDialog.Description>
            {@render children?.()}
            <div class="flex w-full items-center justify-center gap-2 mt-5">
                <AlertDialog.Action class={cn("rounded-xl w-full!", buttonVariants({ variant: "primary" }))}>
                    Confirm
                </AlertDialog.Action>
                <AlertDialog.Cancel class={cn("rounded-xl w-full!", buttonVariants({ variant: "default" }))}>
                    Cancel
                </AlertDialog.Cancel>
            </div>
        </AlertDialog.Content>
    </AlertDialog.Portal>
</AlertDialog.Root>


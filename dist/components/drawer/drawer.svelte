<script lang="ts">
	import { buttonVariants, type ButtonSize, type ButtonVariant } from "../button/button.svelte"
	import { Icon, type IconSource } from "@steeze-ui/svelte-icon"
	import { fly } from "svelte/transition"
	import type { Snippet } from "svelte"
    import { Drawer } from "vaul-svelte"
	import { cn } from "../../utils.js"

    type DrawerProps = {
        useTrigger: boolean
        children?: Snippet
        // DISABLED: due to issues
        shouldScaleBackground?: never
        backgroundColor?: never
    }
    type DrawerAsTrigger = {
        useTrigger: undefined | true
        trigger: {
            variant?: ButtonVariant
            size?: ButtonSize
            text: string | IconSource
            class?: string
        }
    }
    type DrawerAsNoTrigger = {
        useTrigger?: false
        trigger?: never
    }

    type Props = Drawer.Props & DrawerProps & (DrawerAsTrigger | DrawerAsNoTrigger)

    let {
        open = $bindable(false),
        activeSnapPoint = $bindable(),
        children,
        trigger,
        useTrigger = true,
        ...restProps
    }: Props = $props()
</script>

<Drawer.Root
    bind:open
    backgroundColor="bg-background"
    {activeSnapPoint}
    {...restProps}
>
    {#if useTrigger && trigger}
        <Drawer.Trigger class={cn(trigger.class, buttonVariants({ variant: trigger.variant, size: trigger.size }))}>
            {#if typeof trigger.text === "string"}
                {trigger.text}
            {:else if typeof trigger.text === "object"}
                <Icon src={trigger.text} theme="bold" class="size-4" />
            {/if}
        </Drawer.Trigger>
    {/if}
	<Drawer.Portal>
        <Drawer.Overlay
            transition={fly}
            class="fixed inset-0 z-999 bg-black/40"
        />
        <Drawer.Content class="fixed bottom-0 left-0 right-0 mt-24 z-9999 flex min-h-20 flex-col rounded-t-2xl border bg-background items-center justify-center">
            <div class="mx-auto mt-4 h-1.5 w-[100px] rounded-full bg-muted"></div>
            {@render children?.()}
		</Drawer.Content>
	</Drawer.Portal>
</Drawer.Root>

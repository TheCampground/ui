<script lang="ts">
    import { Toaster as Sonner, type ToasterProps as SonnerProps } from "svelte-sonner"
	import { buttonVariants } from "@core/button/index.js"
    import { mode } from "mode-watcher"
	import { cn } from "$lib/utils.js"

    let { closeButton = true, ...restProps }: SonnerProps = $props()
</script>

<Sonner
    theme={mode.current}
    class="toaster group"
    toastOptions={{
        unstyled: true,
        classes: {
            toast: "group toast p-4 rounded-2xl min-w-40 md:min-w-100 max-w-[95vw] bg-card md:max-w-100 shadow-card border relative transition-all pr-8",
            title: "inline-flex text-sm font-semibold",
            description: "text-sm text-foreground-alt",
            actionButton: cn(buttonVariants({ size: "small" }), "text-xs h-6 rounded-md mt-4 transition-all!"),
            cancelButton: cn(buttonVariants({ variant: "secondary", size: "small" }), "text-xs h-6 rounded-md mt-4 transition-all!"),
            closeButton: "[&>svg]:size-4 [&>svg]:stroke-foreground-alt hover:[&>svg]:stroke-foreground! [&>svg]:transition-all! transition-all! size-6 rounded-lg font-bold! bg-background! flex items-center justify-center border absolute top-2.5 right-2.5 cursor-pointer",
            icon: "w-fit!",
            success: "[&>[data-icon]>svg]:fill-success!",
            error: "[&>[data-icon]>svg]:fill-button-danger!",
            info: "[&>[data-icon]>svg]:fill-info!",
            warning: "[&>[data-icon]>svg]:fill-brand!",
            loader: "relative!",
        }
    }}
    {closeButton}
    {...restProps}
/>

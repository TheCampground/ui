<script lang="ts" module>
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements"
    import { type VariantProps, tv } from "tailwind-variants"
    import { cn, type WithElementRef } from "$lib/utils.js"
    import { page } from "$app/state"

    export const buttonVariants = tv({
        base: "rounded-input inline-flex items-center scale-3d justify-center text-sm font-semibold disabled:pointer-events-none disabled:opacity-70 active:scale-[0.98] will-change-scale disabled:cursor-not-allowed transition-all cursor-pointer text-foreground",
        variants: {
            variant: {
                default: "bg-dark text-background shadow-mini hover:bg-button-default-hover hover:shadow-button-default-hove active:bg-dark",
                primary: "bg-button-primary hover:bg-button-primary-hover hover:shadow-button-primary-hover active:bg-button-primary",
                secondary: "bg-button-secondary hover:bg-button-secondary-hover hover:shadow-button-secondary-hover active:bg-button-secondary",
                ghost: "hover:bg-button-ghost-hover",
                danger: "bg-button-danger text-white",
                link: "hover:underline"
            },
            size: {
                default: "h-9 w-fit px-3",
                small: "h-8 w-fit px-2",
                icon: "h-9 w-9"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    })

    export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"]
    export type ButtonSize = VariantProps<typeof buttonVariants>["size"]

    export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
		}
</script>

<script lang="ts">
    import { Button } from "bits-ui"
    let {
        children,
        class: className,
        variant = "default",
        size = "default",
        ref = $bindable(null),
        href = undefined,
        type = "button",
        disabled,
        ...restProps
    }: ButtonProps = $props()
</script>

{#if href}
    <a
        bind:this={ref}
        class={cn(buttonVariants({ variant, size }), className)}
        href={disabled ? page.url.pathname : href}
        aria-disabled={disabled}
        role={disabled ? "link" : undefined}
        tabindex={disabled ? -1 : undefined}
        {...restProps}
    >
        {@render children?.()}
    </a>
{:else}
    <Button.Root
        class={cn(buttonVariants({ variant, size }), className)}
        {type}
        {disabled}
        {...restProps}
    >
        {@render children?.()}
    </Button.Root>
{/if}

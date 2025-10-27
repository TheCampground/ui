<script lang="ts" module>
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements"
    import { type VariantProps, tv } from "tailwind-variants"
    import { cn, type WithElementRef } from "$lib/utils.js"
    import { page } from "$app/state"

    export const buttonVariants = tv({
        base: "rounded-input inline-flex items-center justify-center text-sm font-semibold disabled:pointer-events-none disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98] transition-all cursor-pointer",
        variants: {
            variant: {
                default: "bg-dark text-background shadow-mini hover:bg-dark/95",
                primary: "bg-button-primary text-black",
                secondary: "bg-button-secondary text-black",
                ghost: "hover:bg-button-secondary text-black",
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

<script lang="ts" module>
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements"
    import { type VariantProps, tv } from "tailwind-variants"
    import { cn, type WithElementRef } from "../../utils.js"

    export const keyboardVariants = tv({
        base: "font-mono font-normal leading-none flex items-center justify-center select-none",
        variants: {
            variant: {
                default: "border dark:border-brand-foreground shadow-kbd",
                primary: "border border-brand bg-brand/20 shadow-kbd-primary",
                secondary: "border border-button-secondary bg-button-secondary/20 shadow-kbd-secondary",
                danger: "border border-button-danger bg-button-danger/20 shadow-kbd-danger",
            },
            size: {
                default: "text-sm min-w-4 w-fit h-5 max-h-5 min-h-5 px-1.5 rounded-md",
                small: "text-xs min-w-4 w-fit h-4.5 max-h-4.5 min-h-4.5 px-1 rounded",
                large: "min-w-4 w-fit h-6 max-h-6 min-h-6 px-2 rounded-md"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    })

    export type KeyboardVariant = VariantProps<typeof keyboardVariants>["variant"]
    export type KeyboardSize = VariantProps<typeof keyboardVariants>["size"]

    export type KeyboardProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: KeyboardVariant
			size?: KeyboardSize
            hideOnMobile?: boolean
		}
</script>

<script lang="ts">
    let {
        children,
        variant = "default",
        size = "default",
        hideOnMobile = true
    }: KeyboardProps = $props()
</script>

<kbd class={cn(hideOnMobile && "hidden! md:flex!", keyboardVariants({ variant, size }))}>
    {@render children?.()}
</kbd>

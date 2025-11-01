<script lang="ts" module>
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements"
    import type { IconSource } from "@steeze-ui/phosphor-icons"
    import { type VariantProps, tv } from "tailwind-variants"
    import { cn, type WithElementRef } from "$lib/utils.js"
	import type { Snippet } from "svelte"

    export const alertVariants = tv({
        base: "flex gap-3 p-3 items-start rounded-lg w-full text-sm leading-4.5",
        variants: {
            variant: {
                default: "bg-brand/30 dark:bg-brand/10 border border-brand/60 dark:border-brand/40 text-brand-foreground dark:text-brand",
                success: "border border-success/60 dark:border-success/40 bg-success/30 dark:bg-success/10 text-brand-foreground dark:text-success",
                info: "border border-info/60 dark:border-info/40 bg-info/30 dark:bg-info/10 text-brand-foreground dark:text-info",
                secondary: "border border-button-secondary bg-button-secondary/60 dark:bg-button-secondary/20 text-text dark:text-foreground-alt",
                danger: "border border-button-danger/40 bg-button-danger/10 text-button-danger",
            }
        },
        defaultVariants: {
            variant: "default"
        }
    })

    export type AlertVariant = VariantProps<typeof alertVariants>["variant"]

    export type AlertProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: AlertVariant,
            children?: Snippet
            icon?: IconSource
		}
</script>

<script lang="ts">
	import { Icon } from "@steeze-ui/svelte-icon"

    let { children, icon, variant }: AlertProps = $props()
</script>

<div class={cn(alertVariants({ variant }))}>
    {#if icon}
        <Icon src={icon} theme="bold" class="min-h-4.5 max-h-4.5 h-4.5 w-4.5 min-w-4.5 max-w-4.5" />
    {/if}
    {@render children?.()}
</div>

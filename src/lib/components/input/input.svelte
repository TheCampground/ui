<script lang="ts">
	import type { IconSource } from "@steeze-ui/phosphor-icons"
    import type { HTMLInputAttributes } from "svelte/elements"
    import { cn, type WithElementRef } from "$lib/utils.js"
	import { Icon } from "@steeze-ui/svelte-icon"

    type InputAllowedTypes = "text" | "file" | "number" | "email" | "password" | "search" | "tel" | "url" | "week"

    type BaseProps = {
        value?: any
        placeholder?: string
        type?: Exclude<InputAllowedTypes, "range" | "color" | "date" | "datetime-local" | "time">
    }
    type PropsWithIcon = BaseProps & {
        icon: IconSource
        position: "left" | "right"
    }
    type PropsWithoutIcon = BaseProps & {
        icon?: never
        position?: never
    }

    type Props = WithElementRef<HTMLInputAttributes> & (PropsWithIcon | PropsWithoutIcon)
    let {
        class: className,
        value = $bindable(),
        placeholder,
        type = "text",
        icon,
        position = "left",
        ...restProps
    }: Props = $props()

</script>

{#if icon}
    <div class="relative w-full">
        {@render input()}
        <Icon
            src={icon}
            theme="bold"
            class={cn(
                "absolute size-5 top-1/2 -translate-y-1/2 text-dark/30 pointer-events-none",
                position === "left" ? "left-2 md:left-4" : "right-2 md:right-4"
            )}
        />
    </div>
{:else}
    {@render input()}
{/if}

{#snippet input()}
    <input
        bind:value
        {...restProps}
        {placeholder}
        {type}
        class={cn(
            className,
            icon && position === "left" && "pl-8! md:pl-11!",
            icon && position === "right" && "pr-8! md:pr-11!",
            "h-input-xs md:h-input-sm rounded-card-sm border-border-input bg-background placeholder:text-foreground-alt/50 hover:border-dark-40 focus:ring-foreground focus:ring-offset-background focus:outline-hidden inline-flex items-center align-middle border px-4 text-sm focus:ring-2 focus:ring-offset-2 sm:text-sm disabled:opacity-60 disabled:pointer-events-none disabled:cursor-not-allowed w-full"
        )}
    />
{/snippet}

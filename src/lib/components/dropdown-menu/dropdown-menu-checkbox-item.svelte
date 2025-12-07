
<script lang="ts">
    import { Check, Minus, type IconSource } from "@steeze-ui/phosphor-icons"
	import { Icon } from "@steeze-ui/svelte-icon"
    import { DropdownMenu } from "bits-ui"
	import type { Snippet } from "svelte"
	import { cn } from "$lib/utils.js"

    let {
        children,
        checked = $bindable(),
        indeterminate,
        class: className,
        icon,
        ...restProps
    }: DropdownMenu.CheckboxItemProps & { children?: Snippet, class?: string, icon?: IconSource } = $props()
</script>

<DropdownMenu.CheckboxItem
    bind:checked
    {...restProps}
    class={cn(className, "group cursor-pointer rounded-lg data-highlighted:bg-brand data-highlighted:text-brand-foreground transition-all ring-0! ring-transparent! flex h-8 select-none w-full items-center justify-between py-2 pl-2 pr-1.5 text-sm font-medium focus-visible:outline-none")}
>
    <div class="flex items-center gap-2">
        {#if icon}
            <Icon src={icon} theme="bold" class="min-h-4 min-w-4 h-4 w-4 text-inherit" />
        {/if}
        {@render children?.()}
    </div>
    {#if indeterminate || checked}
        <Icon src={indeterminate ? Minus : Check} theme="bold" class="min-h-4 min-w-4 h-4 w-4 mr-1" />
    {/if}
</DropdownMenu.CheckboxItem>

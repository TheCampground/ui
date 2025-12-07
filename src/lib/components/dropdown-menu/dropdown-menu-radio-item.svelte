
<script lang="ts">
	import type { IconSource } from "@steeze-ui/phosphor-icons"
	import { Icon } from "@steeze-ui/svelte-icon"
    import { DropdownMenu } from "bits-ui"
	import { cn } from "$lib/utils.js"

    let {
        children,
        value,
        class: className,
        icon,
        ...restProps
    }: DropdownMenu.RadioItemProps & { class?: string, icon?: IconSource } = $props()
</script>

<DropdownMenu.RadioItem
    {value}
    {...restProps}
    class={cn(className, "group cursor-pointer rounded-lg data-highlighted:bg-brand data-highlighted:text-brand-foreground transition-all ring-0! ring-transparent! flex h-8 select-none w-full items-center justify-between py-2 pl-2 pr-1.5 text-sm font-medium focus-visible:outline-none")}
>
    {#snippet children({ checked })}
        <div class="flex items-center gap-2">
            {#if icon}
                <Icon src={icon} theme="bold" class="min-h-4 min-w-4 h-4 w-4 text-inherit" />
            {/if}
            {value}
        </div>
        {#if checked}
            <span class="size-2 border-2 group-data-highlighted:border-brand-foreground border-foreground rounded-full mr-1 transition-all"></span>
        {/if}
    {/snippet}
</DropdownMenu.RadioItem>

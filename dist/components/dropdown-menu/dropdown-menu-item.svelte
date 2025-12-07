
<script lang="ts">
	import type { IconSource } from "@steeze-ui/phosphor-icons"
	import { Icon } from "@steeze-ui/svelte-icon"
    import { DropdownMenu } from "bits-ui"
	import { cn } from "../../utils.js"
	import { Kbd } from "../../index.js"

    let {
        children,
        class: className,
        icon,
        keybind,
        ...restProps
    }: DropdownMenu.ItemProps & { class?: string, icon?: IconSource, keybind?: string | string[] } = $props()
</script>

<DropdownMenu.Item
    {...restProps}
    class={cn(className, "group cursor-pointer rounded-lg data-highlighted:bg-brand data-highlighted:text-brand-foreground transition-all ring-0! ring-transparent! flex gap-2 h-8 select-none w-full justify-between items-center py-2 pl-2 pr-1.5 text-sm font-medium focus-visible:outline-none")}
>
    <div class="flex items-center gap-2">
        {#if icon}
            <Icon src={icon} theme="bold" class="min-h-4 min-w-4 h-4 w-4 text-inherit" />
        {/if}
        {@render children?.()}
    </div>
    <div class="flex gap-1">
        {#if keybind}
            {#each keybind as key}
                <Kbd.Key size="small">{key}</Kbd.Key>
            {/each}
        {/if}
    </div>
</DropdownMenu.Item>

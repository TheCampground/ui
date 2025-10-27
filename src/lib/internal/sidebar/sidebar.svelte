<script lang="ts">
	import { clickOutside } from "@internal/actions/clickOutside.ts"
	import { SidebarSimple } from "@steeze-ui/phosphor-icons"
    import { sidebar } from "@internal/stores/index.ts"
	import { Button } from "@core/button/index.ts"
    import { docs, components } from "./routes.ts"
	import { Icon } from "@steeze-ui/svelte-icon"
	import { onNavigate } from "$app/navigation"
	import { cn } from "$lib/utils.ts"
	import { page } from "$app/state"

    onNavigate(() => sidebar.set(false))
</script>

<div
    use:clickOutside={{ onClose: () => sidebar.set(false) }}
    class={cn(
        "min-w-64 md:min-w-56 h-screen border-r z-40 md:z-30 overflow-auto flex flex-col p-3 md:p-5 pt-10 md:pt-5 select-none",
        "fixed md:relative left-0 top-0 md:top-[61px] bg-background transition-all md:transition-none duration-600",
        $sidebar ? "left-0 opacity-100" : "-left-100 md:left-0 opacity-0 md:opacity-100"
    )}
>
    <Button variant="secondary" size="icon" class="flex md:hidden absolute top-2 right-2 size-7" onclick={() => sidebar.set(!$sidebar)}>
        <Icon src={SidebarSimple} class="size-4" />
    </Button>
    <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-2 w-full">
            <p class="text-[11px] font-bold text-foreground/70 uppercase">
                {docs.title}
            </p>
            <div class="flex flex-col w-full gap-1">
                {#each docs.items as item, i (i)}
                    {@const isCurrent = item.path === page.url.pathname}
                    <Button
                        variant={isCurrent ? "secondary" : "ghost"}
                        size="small"
                        class={cn(
                            "w-full gap-2 justify-start",
                            item?.icon ? "" : "h-7"
                        )}
                        href={item.path}
                    >
                        {#if item?.icon}
                            <Icon src={item.icon} theme="bold" class="size-4" />
                        {/if}
                        <p class={item?.icon ? "" : "font-normal text-xs"}>
                            {item.name}
                        </p>
                    </Button>
                {/each}
            </div>
        </div>
        <div class="flex flex-col gap-2 w-full">
            <p class="text-[11px] font-bold text-foreground/70 uppercase">
                {components.title}
            </p>
            <div class="flex flex-col w-full gap-1">
                {#each components.items as item, i (i)}
                    {@const isCurrent = item.path === page.url.pathname}
                    <Button
                        variant={isCurrent ? "secondary" : "ghost"}
                        size="small"
                        class="w-full gap-2 justify-start h-7"
                        href={item.path}
                    >
                        <p class="font-normal text-xs">
                            {item.name}
                        </p>
                    </Button>
                {/each}
            </div>
        </div>
    </div>
</div>

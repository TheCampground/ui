<script lang="ts">
	import { Button } from "@core/button/index.ts"
	import { Icon } from "@steeze-ui/svelte-icon"
    import { routes } from "./routes.ts"
	import { page } from "$app/state"
	import { cn } from "$lib/utils.ts"
</script>

<div class="min-w-56 h-screen border-r z-999 overflow-auto flex flex-col p-5">
    {#each routes as route, i (i)}
        {#if route?.separator}
            <span class="w-full py-5 opacity-0"></span>
        {/if}
        <div class="flex flex-col gap-2 w-full">
            <p class="text-xs font-bold text-muted-foreground uppercase">
                {route.title}
            </p>
            <div class="flex flex-col w-full gap-1">
                {#each route.items as item, i (i)}
                    {@const isCurrent = item.path === page.url.pathname}
                    <Button
                        variant={isCurrent ? "primary" : "ghost"}
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
    {/each}
</div>

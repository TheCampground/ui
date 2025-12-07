<script lang="ts">
    import { List, MoonStars, Sun } from "@steeze-ui/phosphor-icons"
    import { Campground, GitHub } from "../icons/index.ts"
	import { getCurrentRoute } from "../utils.ts"
	import { sidebar } from "../stores/index.ts"
	import { Button, type ButtonVariant } from "../../components/button/index.ts"
	import { Icon } from "@steeze-ui/svelte-icon"
    import { setMode, mode } from "mode-watcher"
	import { page } from "$app/state"

    function currentRoute(path: string): ButtonVariant {
        return getCurrentRoute(page.url.pathname)?.path?.includes(path) ? "secondary" : "ghost"
    }

    let routes = [
        {
            name: "Docs",
            path: "/docs",
            variant: currentRoute("/docs")
        },
        {
            name: "Components",
            path: "/components",
            variant: currentRoute("/components")
        }
    ]
</script>

<div class="w-full border-b p-3 flex items-center justify-between fixed left-0 top-0 backdrop-blur-lg z-45 bg-background/70">
    <div class="flex items-center">
        <Button variant="ghost" size="icon" class="flex md:hidden" onclick={() => sidebar.set(!$sidebar)}>
            <Icon src={List} theme="bold" class="size-5" />
        </Button>
        <Button variant="link" href="/" class="gap-3">
            <Icon src={Campground} class="size-5 md:size-6 text-icon-brand" />
            <p class="text-lg md:text-xl font-bold">campground/ui</p>
        </Button>
        <div class="hidden md:flex items-center gap-1">
            {#each routes as route}
                <Button variant={route.variant} size="small" class="rounded-full! h-6!" href={route.path}>
                    <p class="text-xs font-normal">{route.name}</p>
                </Button>
            {/each}
        </div>
    </div>
    <div class="flex gap-1">
        <Button variant="ghost" size="icon" href="https://github.com/thecampground/ui" target="_blank">
            <Icon src={GitHub} class="size-4.5 text-icon-github" />
        </Button>
        <Button variant="ghost" size="icon" onclick={() => setMode(mode.current === "light" ? "dark" : "light")}>
            <Icon src={mode.current === "dark" ? Sun : MoonStars} theme="bold" class="min-w-5 min-h-5 max-w-5 max-h-5 pointer-events-none group-hover:text-primary transition-all" />
            <span class="sr-only">Toggle theme</span>
        </Button>
    </div>
</div>

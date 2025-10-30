<script lang="ts">
	import { List, MoonStars, Sun } from "@steeze-ui/phosphor-icons"
	import { sidebar } from "@internal/stores/index.ts"
	import { Button } from "@core/button/index.ts"
	import { Icon } from "@steeze-ui/svelte-icon"
    import { setMode, mode } from "mode-watcher"
</script>

<div class="w-full border-b p-3 flex items-center justify-between fixed left-0 top-0 backdrop-blur-lg z-45 bg-background/70">
    <div class="flex items-center">
        <Button variant="ghost" size="icon" class="flex md:hidden" onclick={() => sidebar.set(!$sidebar)}>
            <Icon src={List} theme="bold" class="size-5" />
        </Button>
        <Button variant="link" href="/" class="gap-3">
            <img
                src="/favicon{mode.current === "light" ? "-dark" : ""}.png"
                class="size-5 md:size-6 select-none pointer-events-none"
                draggable="false"
                alt=""
            />
            <p class="text-lg md:text-xl font-bold">campground/ui</p>
        </Button>
        <div class="hidden md:flex items-center">
            <Button variant="link" href="/docs/introduction">
                <p class="text-xs font-normal">Docs</p>
            </Button>
            <Button variant="link" href="/components">
                <p class="text-xs font-normal">Components</p>
            </Button>
        </div>
    </div>
    <div class="flex gap-1">
        <Button variant="ghost" size="icon" href="https://github.com/thecampground/ui" target="_blank">
            <img
                src="/github_{mode.current === "light" ? "dark" : "light"}.png"
                class="size-5 select-none pointer-events-none"
                draggable="false"
                alt=""
            />
        </Button>
        <Button variant="ghost" size="icon" onclick={() => setMode(mode.current === "light" ? "dark" : "light")}>
            <Icon src={mode.current === "dark" ? Sun : MoonStars} theme="bold" class="min-w-5 min-h-5 max-w-5 max-h-5 pointer-events-none group-hover:text-primary transition-all" />
            <span class="sr-only">Toggle theme</span>
        </Button>
    </div>
</div>

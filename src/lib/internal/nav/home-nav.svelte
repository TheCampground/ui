<script lang="ts">
    import { Campground, GitHub } from "@internal/icons/index.ts"
	import { MoonStars, Sun } from "@steeze-ui/phosphor-icons"
	import { Button } from "@core/button/index.ts"
	import { Icon } from "@steeze-ui/svelte-icon"
    import { setMode, mode } from "mode-watcher"
</script>

<div class="w-full p-3 flex items-center justify-between fixed left-0 top-0 backdrop-blur-lg z-45 bg-background/70">
    <div class="flex gap-4 items-center">
        <Button variant="link" href="/" class="gap-3">
            <Icon src={Campground} class="size-5 md:size-6 text-icon-brand" />
            <p class="text-lg md:text-xl font-bold hidden md:block">campground/ui</p>
        </Button>
        <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full flex items-center justify-center gap-1">
            <Button variant="secondary" size="small" class="rounded-full! h-6!" href="/">
                <p class="text-xs font-normal">Home</p>
            </Button>
            <Button variant="ghost" size="small" class="rounded-full! h-6!" href="/docs/introduction">
                <p class="text-xs font-normal">Docs</p>
            </Button>
            <Button variant="ghost" size="small" class="rounded-full! h-6!" href="/components">
                <p class="text-xs font-normal">Components</p>
            </Button>
        </div>
    </div>
    <div class="flex gap-1">
         <Button variant="ghost" size="icon" href="https://github.com/thecampground/ui" target="_blank" class="hidden md:flex">
            <Icon src={GitHub} class="size-4.5 text-icon-github" />
        </Button>
        <Button variant="ghost" size="icon" onclick={() => setMode(mode.current === "light" ? "dark" : "light")}>
            <Icon src={mode.current === "dark" ? Sun : MoonStars} theme="bold" class="min-w-5 min-h-5 max-w-5 max-h-5 pointer-events-none group-hover:text-primary transition-all" />
            <span class="sr-only">Toggle theme</span>
        </Button>
    </div>
</div>

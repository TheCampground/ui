<script lang="ts">
	import { Button } from "@core/button/index.ts"
</script>

<div class="w-full p-3 flex items-center justify-between fixed left-0 top-0 backdrop-blur-sm z-45 bg-background/50">
    <div class="flex gap-4 items-center">
        <Button variant="link" href="/" class="gap-3">
            <img
                src="/favicon-dark.png"
                class="size-5 md:size-6 select-none pointer-events-none"
                draggable="false"
                alt=""
            />
            <p class="hidden md:flex text-lg md:text-xl font-bold">campground/ui</p>
        </Button>
        <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
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
    <Button variant="ghost" size="icon" href="https://github.com/thecampground/ui" target="_blank">
        <img
            src="/github_dark.png"
            class="size-5 select-none pointer-events-none"
            draggable="false"
            alt=""
        />
    </Button>
</div>

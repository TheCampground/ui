<script lang="ts">
	import { Button } from "@core/button/index.ts"
</script>

<div class="w-full border-b p-3 flex items-center justify-between sticky left-0 top-0 backdrop-blur-sm z-999">
    <div class="flex items-center">
        <Button variant="link" href="/" class="gap-3">
            <img
                src="/favicon-dark.png"
                class="size-6 select-none pointer-events-none"
                draggable="false"
                alt=""
            />
            <p class="text-xl font-bold">campground/ui</p>
        </Button>
        <Button variant="link" href="/docs/introduction">
            <p class="text-xs font-normal">Docs</p>
        </Button>
        <Button variant="link" href="/components">
            <p class="text-xs font-normal">Components</p>
        </Button>
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

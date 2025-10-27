<script lang="ts">
	import { sidebar } from "@internal/stores/index.ts"
	import { List } from "@steeze-ui/phosphor-icons"
	import { Button } from "@core/button/index.ts"
	import { Icon } from "@steeze-ui/svelte-icon"
</script>

<div class="w-full border-b p-3 flex items-center justify-between fixed left-0 top-0 backdrop-blur-sm z-45">
    <div class="flex items-center">
        <Button variant="ghost" size="icon" class="flex md:hidden" onclick={() => sidebar.set(!$sidebar)}>
            <Icon src={List} theme="bold" class="size-5" />
        </Button>
        <Button variant="link" href="/" class="gap-3">
            <img
                src="/favicon-dark.png"
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
    <Button variant="ghost" size="icon" href="https://github.com/thecampground/ui" target="_blank">
        <img
            src="/github_dark.png"
            class="size-5 select-none pointer-events-none"
            draggable="false"
            alt=""
        />
    </Button>
</div>

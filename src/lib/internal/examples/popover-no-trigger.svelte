<script lang="ts">
    import { Popover, Input, Button } from "$lib/index.ts"

	import { ArrowsHorizontal, ArrowsInSimple, ArrowsVertical } from "@steeze-ui/phosphor-icons"
	import { Icon } from "@steeze-ui/svelte-icon"

    let open = $state(false)
    let anchor = $state<HTMLElement>(null!)
</script>

<div bind:this={anchor}>
    <Button variant="primary" size="icon" onclick={() => open = !open}>
        <Icon src={ArrowsInSimple} theme="bold" class="size-5" />
    </Button>
</div>

<Popover {anchor} useTrigger={false} bind:open>
    <div class="flex flex-col gap-4">
        <div class="flex flex-col">
            <p class="text-lg font-semibold tracking-tight">Resize Image</p>
            <p class="text-foreground-alt text-sm">Resize your photos easily</p>
        </div>
        <div class="flex items-center gap-2">
            <Input
                id="width"
                value="1920"
                type="number"
                icon={ArrowsHorizontal}
                position="left"
                class="w-30!"
            />
            <Input
                id="height"
                value="1080"
                type="number"
                icon={ArrowsVertical}
                position="left"
                class="w-30!"
            />
        </div>
    </div>
</Popover>

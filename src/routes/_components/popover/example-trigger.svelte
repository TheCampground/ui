<script lang="ts">
    import { Popover, Input } from "$lib/index.ts"
	import { ArrowsHorizontal, ArrowsVertical } from "@steeze-ui/phosphor-icons"
</script>

<Popover buttonText="Resize">
    <div class="flex flex-col gap-4">
        <div class="flex flex-col">
            <p class="text-lg font-semibold tracking-tight">Resize Image</p>
            <p class="text-foreground-alt text-sm">Resize your photos easily</p>
        </div>
        <div class="flex items-center gap-2 w-full">
            <Input
                id="width"
                value="1920"
                type="number"
                icon={ArrowsHorizontal}
                position="left"
                class="w-30! md:w-full!"
            />
            <Input
                id="height"
                value="1080"
                type="number"
                icon={ArrowsVertical}
                position="left"
                class="w-30! md:w-full!"
            />
        </div>
    </div>
</Popover>

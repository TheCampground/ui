<script lang="ts">
    import { Button } from "$lib/index.ts"
</script>

<div class="flex gap-10 flex-wrap">
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Default</p>
        <Button variant="primary" size="default">
            Campground
        </Button>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Icon</p>
        <Button variant="primary" size="icon">
            <img src="/favicon-dark.png" class="size-5 select-none pointer-events-none" alt="" draggable="false" />
        </Button>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Small</p>
        <Button variant="primary" size="small">
            Campground
        </Button>
    </div>
</div>

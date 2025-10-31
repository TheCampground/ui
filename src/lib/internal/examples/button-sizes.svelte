<script lang="ts">
    import { Button } from "$lib/index.ts"

    import { Campground } from "@internal/icons/index.ts"
    import { Icon } from "@steeze-ui/svelte-icon"
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
            <Icon src={Campground} class="size-5 text-brand-foreground" />
        </Button>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Small</p>
        <Button variant="primary" size="small">
            Campground
        </Button>
    </div>
</div>

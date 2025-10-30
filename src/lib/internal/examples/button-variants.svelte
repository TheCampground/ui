<script lang="ts">
    import { Button } from "$lib/index.ts"
</script>

<div class="flex gap-10 flex-wrap">
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Default</p>
        <Button variant="default" size="default">
            Campground
        </Button>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Primary</p>
        <Button variant="primary" size="default">
            Campground
        </Button>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Secondary</p>
        <Button variant="secondary" size="default">
            Campground
        </Button>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Danger</p>
        <Button variant="danger" size="default">
            Campground
        </Button>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Outline</p>
        <Button variant="outline" size="default">
            Campground
        </Button>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Ghost</p>
        <Button variant="ghost" size="default">
            Campground
        </Button>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Link</p>
        <Button variant="link" size="default">
            Campground
        </Button>
    </div>
</div>

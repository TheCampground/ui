<script lang="ts">
    import { Kbd } from "$lib/index.ts"
</script>

<div class="flex gap-10 flex-wrap">
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Default</p>
        <Kbd.Key variant="default" size="default">⌘ c</Kbd.Key>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Primary</p>
        <Kbd.Key variant="primary" size="default">⌘ c</Kbd.Key>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Secondary</p>
        <Kbd.Key variant="secondary" size="default">⌘ c</Kbd.Key>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Danger</p>
        <Kbd.Key variant="danger" size="default">⌘ c</Kbd.Key>
    </div>
</div>

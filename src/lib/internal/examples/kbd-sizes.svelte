<script lang="ts">
    import { Kbd } from "$lib/index.ts"
</script>

<div class="flex gap-10 flex-wrap">
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Large</p>
        <Kbd.Key size="large">⌘ c</Kbd.Key>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Default</p>
        <Kbd.Key size="default">⌘ c</Kbd.Key>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-foreground-alt text-sm">Small</p>
        <Kbd.Key size="small">⌘ c</Kbd.Key>
    </div>
</div>

<script lang="ts">
    import type { Snippet } from "svelte"
	import { cn } from "$lib/utils.ts"

    type Props = {
        class?: string
        media?: string
        children: Snippet
    }
    let { class: className, media, children }: Props = $props()
</script>

<div class={cn(
    media ? "p-0" : "p-7",
    "rounded-card-lg bg-background shadow-popover dark:shadow-none gap-4 border overflow-hidden"
)}>
    {#if media}
        <img src={media} class="min-h-30 -mt-10 b-20 w-full h-fit mask-[linear-gradient(to_bottom,black_50%,transparent_95%)] [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_95%)] pointer-events-none select-none" alt="" draggable="false" />
    {/if}
    <span class={cn(className, media ? "-mt-20 p-7" : "p-0", "w-full")}>
        {@render children?.()}
    </span>
</div>

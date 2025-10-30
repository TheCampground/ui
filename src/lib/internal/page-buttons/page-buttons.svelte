<script lang="ts">
    import { getNextRoute, getPreviousRoute } from "@internal/utils.ts"
	import { goto } from "$app/navigation"
	import { cn } from "$lib/utils.ts"
	import { page } from "$app/state"

	const next = $derived(getNextRoute(page.url.pathname))
	const prev = $derived(getPreviousRoute(page.url.pathname))
</script>

<div class={cn(
    "flex gap-2 md:gap-4 w-full",
    next ? "justify-end" : "justify-start"
)}>
    <button
        onclick={() => goto(prev.path)}
        class="flex flex-col justify-center items-start gap-1 flex-1 bg-foreground-alt/5 hover:bg-foreground-alt/10 transition-all border-2 rounded-xl max-w-1/2 p-3 cursor-pointer disabled:pointer-events-none disabled:opacity-60"
        disabled={!prev}
    >
        <p class="text-xs text-foreground-alt leading-none">Previous</p>
        {#if prev?.name}
            <p class="text-sm font-bold leading-none">{prev.name}</p>
        {/if}
    </button>
    <button
        onclick={() => goto(next.path)}
        class="flex flex-col justify-center items-end gap-1 flex-1 bg-foreground-alt/5 hover:bg-foreground-alt/10 transition-all border-2 rounded-xl max-w-1/2 p-3 cursor-pointer disabled:pointer-events-none disabled:opacity-60"
        disabled={!next}
    >
        <p class="text-xs text-foreground-alt leading-none">Next</p>
        {#if next?.name}
            <p class="text-sm font-bold leading-none">{next.name}</p>
        {/if}
    </button>
</div>

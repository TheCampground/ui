<script lang="ts">
	import { cn } from "$lib/utils.ts"
	import type { Snippet } from "svelte"

    let { children, class: className }: { children: Snippet, class?: string } = $props()
</script>

<div class={cn(
    className,
    "flex border-b-2 min-h-60 h-fit justify-center items-center bg-foreground-alt/5 px-10 w-full"
)}>
    {@render children?.()}
</div>

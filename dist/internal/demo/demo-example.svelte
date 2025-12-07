<script lang="ts">
	import { cn } from "../../utils.ts"
	import type { Snippet } from "svelte"

    let { children, class: className, code = true }: { children: Snippet, class?: string, code?: boolean } = $props()
</script>

<div class={cn(
    className,
    code ? "border-b min-h-60" : "min-h-40",
    "flex h-fit justify-center items-center p-10 w-full overflow-hidden! relative bg-background"
)}>
    {@render children?.()}
</div>

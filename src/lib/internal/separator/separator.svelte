<script lang="ts">
	import { cn } from "$lib/utils.ts"

    let { class: className }: { class?: string } = $props()
</script>

<span class={cn("w-full h-px bg-button-secondary-hover", className)}></span>

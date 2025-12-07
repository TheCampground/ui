<script lang="ts">
    import { getNextRoute, getPreviousRoute } from "../utils.ts"
	import { ArrowLeft, ArrowRight } from "@steeze-ui/phosphor-icons"
	import type { RoutesFlatMap } from "../routes/index.ts"
	import { Button } from "../../components/button/index.ts"
	import { Icon } from "@steeze-ui/svelte-icon"
	import { goto } from "$app/navigation"
	import { page } from "$app/state"

	const next = $derived(getNextRoute(page.url.pathname))
	const prev = $derived(getPreviousRoute(page.url.pathname))
</script>

<div class="flex gap-1 items-center">
    {@render PageButton("prev", prev)}
    {@render PageButton("next", next)}
</div>

{#snippet PageButton(type: "next" | "prev", item: RoutesFlatMap)}
    <Button
        onclick={() => goto(item.path)}
        variant="primary"
        size="icon"
        class="size-7"
        disabled={!item}
    >
        <Icon src={type === "next" ? ArrowRight : ArrowLeft} theme="bold" class="size-4" />
    </Button>
{/snippet}

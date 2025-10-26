<script lang="ts">
    import { Accordion, type AccordionRootProps } from "bits-ui"
	import type { Snippet } from "svelte"

    const { children, type }: { children: Snippet } & AccordionRootProps = $props()
</script>

<Accordion.Root class="w-full" {type}>
    {@render children()}
</Accordion.Root>

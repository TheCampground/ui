<script lang="ts">
    import { Control } from "@steeze-ui/phosphor-icons"
    import { Icon } from "@steeze-ui/svelte-icon"
	import type { Snippet } from "svelte"
    import { Accordion } from "bits-ui"
	import { cn } from "$lib/utils.js"

    type AccordionProps = {
        value: string
        title: string
        children: Snippet
        class?: string
    }
    const { value, title, children, class: className }: AccordionProps = $props()
</script>

<Accordion.Item
    value={value}
    class="border-dark-10 group border-b px-1.5 w-full"
>
    <Accordion.Header class="w-full">
        <Accordion.Trigger class="flex w-full flex-1 select-none items-center justify-between py-5 text-sm font-medium transition-all [&[data-state=open]>span>svg]:rotate-180">
            <span class="w-full text-left">{title}</span>
            <span class="hover:bg-dark-10 inline-flex size-8 items-center justify-center rounded-lg bg-transparent">
                <Icon src={Control} class="size-5 transition-transform duration-200" />
            </span>
        </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm tracking-[-0.01em]">
        <div class={cn("pb-6", className)}>
            {@render children?.()}
        </div>
    </Accordion.Content>
</Accordion.Item>

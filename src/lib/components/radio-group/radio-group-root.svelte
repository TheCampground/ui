<script lang="ts">
    import { RadioGroup as BitsRadioGroup, type WithoutChildrenOrChild, useId } from "bits-ui"
    import { Label, RadioGroup } from "$lib/index.ts"
	import type { Snippet } from "svelte"

    export type RadioGroupItemProps = {
        value: string
        label: string
        disabled?: boolean
    }

    type RadioGroupAsProp = {
        children?: never
        items: RadioGroupItemProps[]
    }

    type RadioGroupAsItems = {
        children: Snippet
        items?: never
    }

    let {
        children,
        value = $bindable(),
        ref = $bindable(null),
        items,
        ...restProps
    }: WithoutChildrenOrChild<BitsRadioGroup.RootProps> & (RadioGroupAsProp | RadioGroupAsItems) = $props()
</script>

<BitsRadioGroup.Root bind:ref bind:value {...restProps} class="flex flex-col gap-4 text-sm font-medium">
    {#if items}
        {#each items as item}
            {@const id = useId()}
            <RadioGroup.Item {id} value={item.value} disabled={item.disabled}>
                {item.label}
            </RadioGroup.Item>
            <!-- <div class="flex items-center w-fit">
                <Label for={id} disabled={item.disabled}>{item.label}</Label>
            </div> -->
        {/each}
    {:else}
        {@render children?.()}
    {/if}
</BitsRadioGroup.Root>

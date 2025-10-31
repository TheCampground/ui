<script lang="ts">
    import { RadioGroup, type WithoutChildrenOrChild, useId } from "bits-ui"
	import { Label } from "@core/label/index.ts"
	import type { Snippet } from "svelte"

    let {
        value,
        children,
        id,
        ...restProps
    }: WithoutChildrenOrChild<RadioGroup.ItemProps> & {
        children?: Snippet
    } = $props()

    const itemId = id ?? useId()
</script>

<div class="flex gap-2 items-center w-full">
    <RadioGroup.Item
        {value}
        id={itemId}
        {...restProps}
        class="border-border-input bg-background hover:border-dark-40 data-[state=checked]:border-brand data-[state=checked]:border-6 size-5 shrink-0 cursor-default rounded-full border transition-all duration-100 ease-in-out disabled:opacity-60 disabled:pointer-events-none"
    />
    <Label for={itemId} disabled={restProps.disabled}>
        {@render children?.()}
    </Label>
</div>

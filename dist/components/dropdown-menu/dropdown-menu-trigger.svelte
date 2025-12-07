
<script lang="ts">
    import { DropdownMenu } from "bits-ui"

    let {
        children,
        class: className,
        ...restProps
    }: DropdownMenu.TriggerProps & { class?: string } = $props()
</script>

<DropdownMenu.Trigger
    {...restProps}
    class={className}
>
    {@render children?.()}
</DropdownMenu.Trigger>

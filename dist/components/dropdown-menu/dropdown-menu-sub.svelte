<script lang="ts">
    import { DropdownMenu } from "bits-ui"

    let {
        class: className,
        children,
        open = $bindable(false),
        ...restProps
    }: DropdownMenu.SubProps & { class?: string } = $props()
</script>

<DropdownMenu.Sub
    {...restProps}
    bind:open
>
    {@render children?.()}
</DropdownMenu.Sub>

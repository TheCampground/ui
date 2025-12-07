
<script lang="ts">
    import { DropdownMenu } from "bits-ui"

    let {
        open = $bindable(),
        children,
        class: className,
        ...restProps
    }: DropdownMenu.RootProps & {
        class?: string
    } = $props()
</script>

<DropdownMenu.Root
    bind:open
    {...restProps}
>
    {@render children?.()}
</DropdownMenu.Root>

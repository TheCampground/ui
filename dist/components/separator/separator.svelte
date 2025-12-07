<script lang="ts">
    import { Separator } from "bits-ui"
    import { cn } from "../../utils.js"
    type Props = {
        orientation?: "horizontal" | "vertical"
        hidden?: boolean
        class?: string
    }
    let {
        orientation = "horizontal",
        hidden = false,
        class: className
    }: Props = $props()
</script>

<Separator.Root
    data-orientation={orientation}
    class={cn(
        className,
        orientation === "horizontal" ? "h-px w-full" : "w-px h-full",
        hidden ? "" : "bg-border",
        "shrink-0 my-2"
    )}
/>

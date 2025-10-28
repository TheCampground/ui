<script lang="ts" module>
    import { type VariantProps, tv } from "tailwind-variants"
    export const progressVariants = tv({
        base: "bg-dark-10 relative w-full overflow-hidden rounded-full",
        variants: {
            size: {
                small: "h-2",
                default: "h-4",
                large: "h-6"
            }
        },
        defaultVariants: {
            size: "default"
        }
    })
    export type ProgressSize = VariantProps<typeof progressVariants>["size"]
</script>
<script lang="ts">
    import type { ComponentProps } from "svelte"
    import { Progress, useId } from "bits-ui"

    let {
        max = 100,
        value = 0,
        min = 0,
        label,
        showProgress = true,
        size = "default",
    }: ComponentProps<typeof Progress.Root> & {
        label?: string
        showProgress?: boolean
        size?: ProgressSize
    } = $props()

    const labelId = useId()
</script>

<div class="flex w-[60%] flex-col gap-2">
    <div class="flex items-center justify-between text-sm font-medium">
        {#if label}
            <span id={labelId}> {label} </span>
        {/if}
        {#if showProgress}
            <span>{value}%</span>
        {/if}
    </div>
    <Progress.Root
        class={progressVariants({ size })}
        aria-labelledby={labelId}
        aria-valuetext="{value}%"
        {value}
        {min}
        {max}
    >
        <div
            class="bg-brand h-full w-full flex-1 rounded-full"
            style="transform: translateX(-{100 - (100 * (value ?? 0)) / 100}%)"
        ></div>
    </Progress.Root>
</div>

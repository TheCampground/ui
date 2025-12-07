<script lang="ts">
    import { Slider, type WithoutChildren } from "bits-ui"
    import type { ComponentProps } from "svelte"
	import { cn } from "$lib/utils.js"

    type Props = WithoutChildren<ComponentProps<typeof Slider.Root>> & { ticks?: boolean }

    let {
        value = $bindable(),
        ref = $bindable(null),
        ticks: useTicks = false,
        disabled,
        ...restProps
    }: Props = $props()
</script>

<Slider.Root
    bind:value
    bind:ref
    {...restProps as any}
    class={cn(
        disabled && "opacity-60 saturate-80 pointer-events-none",
        "relative flex w-full touch-none select-none items-center"
    )}
>
    {#snippet children({ thumbs, ticks })}
        <span class="bg-dark-10 relative h-1.5 w-full grow cursor-pointer overflow-hidden rounded-full">
            <Slider.Range class="bg-brand absolute h-full" />
        </span>
        {#each thumbs as index}
            <Slider.Thumb {index} class="z-10 border-border-input bg-brand hover:border-dark-40 focus-visible:ring-brand/40 shadow-mini data-active:border-dark-40 focus-visible:outline-hidden data-active:scale-[0.98] block size-5 cursor-pointer rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-offset-2" />
        {/each}
        {#if useTicks}
            {#each ticks as index}
                <Slider.Tick {index} class="bg-brand/30 w-px h-full top-0" />
            {/each}
        {/if}
    {/snippet}
</Slider.Root>

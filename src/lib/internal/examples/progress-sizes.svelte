<script lang="ts">
    import { Progress } from "$lib/index.ts"

    import { cubicInOut } from "svelte/easing"
    import { Tween } from "svelte/motion"
    import { onMount } from "svelte"

    const tween = new Tween(0, { duration: 10_000, easing: cubicInOut })

    onMount(() => {
        const timer = setTimeout(() => tween.set(100), 500)
        return () => {
            clearTimeout(timer)
        }
    })
</script>

<div class="flex flex-col gap-5 w-full justify-center items-center">
    <Progress
        size="small"
        label="Small progress..."
        value={Math.round(tween.current)}
    />
    <Progress
        size="default"
        label="Default progress..."
        value={Math.round(tween.current)}
    />
    <Progress
        size="large"
        label="Large progress..."
        value={Math.round(tween.current)}
    />
</div>

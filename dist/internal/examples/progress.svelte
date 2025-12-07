<script lang="ts">
    import { Progress } from "../../index.ts"

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

<Progress
    label="Uploading file..."
    value={Math.round(tween.current)}
/>

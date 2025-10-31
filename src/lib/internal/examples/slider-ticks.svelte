<script lang="ts">
    import { Slider } from "$lib/index.ts"

    let value = $state(25)
</script>

<Slider bind:value type="single" step={5} ticks />


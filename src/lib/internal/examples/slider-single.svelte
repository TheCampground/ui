<script lang="ts">
    import { Slider } from "$lib/index.ts"

    let value = $state(50)
</script>

<div class="flex flex-col w-full gap-10">
    <Slider bind:value type="single" />
    <Slider value={35} type="single" disabled />
</div>


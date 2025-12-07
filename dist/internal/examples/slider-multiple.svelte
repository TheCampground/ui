<script lang="ts">
    import { Slider } from "../../index.ts"

    let value = $state([25, 95])
</script>

<Slider bind:value type="multiple" step={5} />


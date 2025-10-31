<script lang="ts">
    import { RadioGroup } from "$lib/index.ts"

    let value = $state("low")

    let items = [
        { value: "low", label: "Low" },
        { value: "medium", label: "Medium" },
        { value: "high", label: "High" },
        { value: "extreme", label: "Extreme", disabled: true }
    ]
</script>

<RadioGroup.Root bind:value {items} />

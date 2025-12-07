<script lang="ts">
    import { Checkbox, Label } from "../../index.ts"

    let checked = $state(false)
</script>

<div class="flex gap-2 items-center justify-center w-full">
    <Checkbox id="terms" bind:checked indeterminate />
    <Label for="terms">Accept terms and conditions</Label>
</div>

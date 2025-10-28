<script lang="ts">
    import { Checkbox } from "$lib/index.ts"
    let checked = $state(false)
</script>

<Checkbox
    bind:checked
    indeterminate
    id="terms"
    label="Accept terms and conditions"
/>

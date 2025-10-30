<script lang="ts">
    import { Switch } from "$lib/index.ts"
    let checked = $state(false)
</script>

<Switch
    bind:checked
    id="dnd"
    label="Do not disturb"
/>

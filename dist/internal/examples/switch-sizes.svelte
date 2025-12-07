<script lang="ts">
    import { Switch } from "../../index.ts"
    let checked = $state({
        default: false,
        small: false
    })
</script>


<div class="flex flex-col gap-5 w-full justify-center items-center">
    <Switch
        bind:checked={checked.default}
        id="default"
        label="Default switch"
        size="default"
    />
    <Switch
        bind:checked={checked.small}
        id="small"
        label="Small switch"
        size="small"
    />
</div>

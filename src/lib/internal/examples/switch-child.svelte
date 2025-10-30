<script lang="ts">
    import { Switch } from "$lib/index.ts"
    let checked = $state(false)
</script>

<Switch bind:checked id="dnd-child">
    <div class="flex flex-col">
        <p class="text-sm">Do not Disturb</p>
        <p class="text-xs text-foreground-alt">
            All notifications will be silenced.
        </p>
    </div>
</Switch>

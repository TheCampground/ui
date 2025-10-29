<script lang="ts">
    import { AlertDialog } from "$lib/index.ts"
</script>

<AlertDialog buttonText="Join The Campsite">
    {#snippet title()}
        Are you sure you want to join?
    {/snippet}
    {#snippet description()}
        Joining The Campsite will grant you unlimited virtual s'mores!
    {/snippet}
</AlertDialog>

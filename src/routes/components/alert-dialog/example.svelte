<script lang="ts">
    import { AlertDialog } from "$lib/index.ts"
</script>

<AlertDialog buttonText="Join The Campsite">
    {#snippet title()}
        <p>Are you sure you want to join?</p>
    {/snippet}
    {#snippet description()}
        <p>Joining The Campsite will grant you unlimited virtual s'mores!</p>
    {/snippet}
</AlertDialog>

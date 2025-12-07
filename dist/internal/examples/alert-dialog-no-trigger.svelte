<script lang="ts">
    import { AlertDialog, Button } from "../../index.ts"

	import { SignOut } from "@steeze-ui/phosphor-icons"
	import { Icon } from "@steeze-ui/svelte-icon"

    let open = $state(false)
</script>

<Button variant="danger" size="icon" onclick={() => open = !open}>
    <Icon src={SignOut} theme="bold" class="size-4" />
</Button>

<AlertDialog useTrigger={false} bind:open>
    {#snippet title()}
        Are you sure?
    {/snippet}
    {#snippet description()}
        This action cannot be undone.
        This will permanently delete your account and remove your data from our servers
    {/snippet}
</AlertDialog>

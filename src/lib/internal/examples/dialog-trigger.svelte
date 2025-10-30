<script lang="ts">
    import { Button, Dialog, Label, Input } from "$lib/index.ts"

	import { LockKeyOpen } from "@steeze-ui/phosphor-icons"
</script>

<Dialog buttonText="New API Key">
    {#snippet title()}
        Create API Key
    {/snippet}
    {#snippet description()}
        Create and manage API keys.
        You can create multiple keys to organize your applications.
    {/snippet}
    <div class="flex flex-col items-start gap-1 pb-11 pt-7 w-full">
        <Label for="apiKey" class="text-sm font-medium">API Key</Label>
        <Input
            id="apiKey"
            placeholder="secret_api_key"
            icon={LockKeyOpen}
            position="right"
        />
    </div>
    <div class="w-full flex justify-end">
        <Button variant="primary">Create</Button>
    </div>
</Dialog>

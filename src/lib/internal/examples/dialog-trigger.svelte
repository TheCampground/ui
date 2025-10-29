<script lang="ts">
    import { Button, Dialog, Input } from "$lib/index.ts"

	import { LockKeyOpen } from "@steeze-ui/phosphor-icons"
	import { Label } from "bits-ui"
</script>

<Dialog buttonText="New API Key">
    {#snippet title()}
        Create API Key
    {/snippet}
    {#snippet description()}
        Create and manage API keys.
        You can create multiple keys to organize your applications.
    {/snippet}
    <!-- TODO: Replace with actual components -->
    <div class="flex flex-col items-start gap-1 pb-11 pt-7">
        <Label.Root for="apiKey" class="text-sm font-medium">API Key</Label.Root>
        <Input
            id="apiKey"
            placeholder="secret_api_key"
            name="name"
            icon={LockKeyOpen}
            position="right"
        />
    </div>
    <div class="w-full flex justify-end">
        <Button variant="primary">Create</Button>
    </div>
</Dialog>

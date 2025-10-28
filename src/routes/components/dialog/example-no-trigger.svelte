<script lang="ts">
    import { Button, Dialog } from "$lib/index.ts"

	import { LockKeyOpen, PlusCircle } from "@steeze-ui/phosphor-icons"
	import { Icon } from "@steeze-ui/svelte-icon"
	import { Label } from "bits-ui"

    let open = $state(false)
</script>

<Button variant="primary" size="icon" onclick={() => open = !open}>
    <Icon src={PlusCircle} theme="bold" class="size-5" />
</Button>

<Dialog useTrigger={false} bind:open>
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
        <div class="relative w-full">
            <input
                id="apiKey"
                class="h-input rounded-card-sm border-border-input bg-background placeholder:text-foreground-alt/50 hover:border-dark-40 focus:ring-foreground focus:ring-offset-background focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
                placeholder="secret_api_key"
                name="name"
            />
            <Icon src={LockKeyOpen} theme="bold" class="absolute size-5 top-1/2 -translate-y-1/2 right-4 text-dark/30" />
        </div>
    </div>
    <div class="w-full flex justify-end">
        <Button variant="primary">Create</Button>
    </div>
</Dialog>

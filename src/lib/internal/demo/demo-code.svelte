<script lang="ts">
    import { ShikiHandler } from "@internal/shiki/index.ts"
	import { Check, Copy } from "@steeze-ui/phosphor-icons"
    import { Button } from "@core/button/index.ts"
	import { Icon } from "@steeze-ui/svelte-icon"
	import { delay } from "@internal/utils.ts"
	import { cn } from "$lib/utils.ts"

    let { tabs } = $props()
    let current = $state(tabs[0])
    let copying = $state(false)

    async function copyToClipboard() {
        try {
            navigator.clipboard.writeText(current.code)
            copying = true
            await delay(2000)
        } catch (error) {
            console.log(error)
            copying = false
        }
    }
</script>

<div class="flex flex-col w-full text-sm" id="docs">
    <div class="flex w-full justify-between items-center">
        <div class="flex w-full items-center">
            {#each tabs as tab}
                <Button
                    variant="ghost"
                    size="small"
                    class={cn(
                        "w-fit rounded-none border-b-2 border-transparent p-4 h-10",
                        tab.filename === current.filename && "border-button-primary"
                    )}
                    onclick={() => current = tab}
                    disabled={tabs.length === 1}
                >
                    {tab.filename}
                </Button>
            {/each}
        </div>
        <Button
            variant="ghost"
            size="icon"
            class="size-8 mr-1"
            onclick={copyToClipboard}
        >
            <Icon src={copying ? Check : Copy} theme="bold" class="size-4" />
        </Button>
    </div>
    {@html ShikiHandler.codeToHtml(current.code, current.lang)}
</div>

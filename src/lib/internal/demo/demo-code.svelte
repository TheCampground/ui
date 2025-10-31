<script lang="ts">
    import { ShikiHandler } from "@internal/shiki/index.ts"
	import { Check, Copy } from "@steeze-ui/phosphor-icons"
    import { Button } from "@core/button/index.ts"
	import { Icon } from "@steeze-ui/svelte-icon"
	import { delay } from "@internal/utils.ts"
	import { cn } from "$lib/utils.ts"

    let { filename, lang, code } = $props()
    let copying = $state(false)

    async function copyToClipboard() {
        try {
            navigator.clipboard.writeText(code)
            copying = true
            await delay(2000)
            copying = false
        } catch (error) {
            console.log(error)
            copying = false
        }
    }
</script>

<div class="flex flex-col w-full text-sm" id="docs">
    <div class="flex w-full justify-between items-center border-b">
        <div class="h-9 w-fit px-3 flex items-center justify-center select-none">
            <p class="text-sm font-semibold leading-none">{filename}</p>
        </div>
        <Button
            variant="ghost"
            size="icon"
            class="size-8 mr-1"
            onclick={copyToClipboard}
            disabled={copying}
        >
            <Icon src={copying ? Check : Copy} theme="bold" class="size-4" />
        </Button>
    </div>
    {@html ShikiHandler.codeToHtml(code, lang)}
</div>

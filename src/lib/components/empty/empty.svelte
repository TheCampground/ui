
<script lang="ts">
	import { Icon, type IconSource } from "@steeze-ui/svelte-icon"
	import { FolderSimpleStar } from "@steeze-ui/phosphor-icons"
    import type { Snippet } from "svelte"

    type Props = {
        icon: IconSource
        title: String
        description: Snippet
        children?: Snippet
    }

    let {
        icon = FolderSimpleStar,
        title,
        description,
        children,
    }: Props = $props()
</script>

<div class="flex flex-col gap-6 justify-center items-center w-full">
    <span class="size-14 rounded-2xl bg-foreground-alt/15 flex items-center justify-center">
        <Icon src={icon} theme="bold" class="size-8" />
    </span>
    <div class="flex flex-col gap-2 justify-center items-center">
        <div class="text-lg font-semibold tracking-tight">
            {title}
        </div>
        <div class="text-foreground-alt text-sm">
            {@render description()}
        </div>
    </div>
    {@render children?.()}
</div>

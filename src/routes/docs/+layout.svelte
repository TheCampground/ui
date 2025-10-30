<script lang="ts">
	import { PageButtons, PageButtonsSmall } from "@internal/page-buttons/index.ts"
    import { Sidebar } from "@internal/sidebar/index.ts"
	import { getCurrentRoute } from "@internal/utils.ts"
    import { Nav } from "@internal/nav/index.ts"
    import { Separator } from "$lib/index.ts"
	import { page } from "$app/state"

	let { children } = $props()

	const current = $derived(getCurrentRoute(page.url.pathname))
</script>

<Nav />
<div class="flex flex-row h-full">
    <Sidebar />
    <main class="my-14 px-5 py-5 md:py-10 w-full flex justify-center overflow-y-auto">
        <div class="w-full xl:w-[60%] flex">
            <div class="flex flex-col gap-10 w-full">
                {@render Title()}
                {@render children?.()}
                <Separator />
                <PageButtons />
            </div>
        </div>
    </main>
</div>

{#snippet Title()}
    <div class="flex flex-col gap-2">
        <div class="flex w-full justify-between items-center gap-4">
            <h1 class="text-3xl font-bold">{current.name}</h1>
            <PageButtonsSmall />
        </div>
        <p class="text-foreground-alt">{@html current.description}</p>
    </div>
{/snippet}

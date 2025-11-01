<script lang="ts">
	import { PageButtons, PageButtonsSmall } from "@internal/page-buttons/index.ts"
	import type { FlatComponents } from "@internal/routes/index.ts"
	import { getCurrentRoute } from "@internal/utils.ts"
    import { Sidebar } from "@internal/sidebar/index.ts"
	import { Props } from "@internal/props/index.ts"
    import * as Demo from "@internal/demo/index.ts"
    import { Nav } from "@internal/nav/index.ts"
    import { Separator } from "$lib/index.ts"
    import { page } from "$app/state"

    const current = $derived(getCurrentRoute(page.url.pathname))
</script>

<Nav />
<div class="flex flex-row h-full">
    <Sidebar />
    <main class="my-14 px-5 py-5 md:py-10 w-full flex justify-center overflow-y-auto">
        <div class="w-full xl:w-[60%] flex">
            <div class="w-full flex flex-col gap-8">
                {@render Title()}
                {@render Examples()}
                {@render ComponentProps()}
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
    <Separator />
{/snippet}

{#snippet Examples()}
    <div class="flex flex-col gap-2">
        {#each page.data.examples as example, i (example.file)}
            {#if "title" in example && "description" in example}
                <div class="flex flex-col mt-8">
                    <h2 class="text-2xl font-bold">{example.title}</h2>
                    <p class="text-foreground-alt">{@html example.description}</p>
                </div>
            {/if}
            <Demo.Container>
                <Demo.Example code={example?.code !== false}>
                    {@render example?.snippet?.()}
                </Demo.Example>
                {#if example?.code !== false}
                    <Demo.Code
                        filename={example?.filename || "+page.svelte"}
                        lang={example?.lang || "svelte"}
                        code={example.raw}
                    />
                {/if}
            </Demo.Container>
            {#if i !== page.data.examples.length}
                <Separator hidden />
            {/if}
        {/each}
    </div>
{/snippet}

{#snippet ComponentProps()}
    <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">Props</h2>
        {#each (current as FlatComponents).props as prop}
            <Props
                component={prop.component}
                description={prop.description}
                items={prop.items}
            />
        {/each}
    </div>
    <Separator />
{/snippet}

<script lang="ts">
    import { components, docs, type RouteItem, type Prop, type Example } from "@internal/sidebar/routes.ts"
    import { Sidebar } from "@internal/sidebar/index.ts"
	import { Props } from "@internal/props/index.ts"
    import * as Demo from "@internal/demo/index.ts"
    import { Nav } from "@internal/nav/index.ts"
    import { Separator } from "$lib/index.ts"
	import { goto } from "$app/navigation"
	import { cn } from "$lib/utils.ts"
    import { page } from "$app/state"

    type TestRouteItem = (Omit<RouteItem, "path"> & {
        id: string
        description: string
        examples: Example[]
        props: {
            component: string
            description: string
            items: Prop[]
        }[]
    })

    const current: TestRouteItem = $derived(
        components.items.find(item => item.id === page.params.id)!
    )

    function getNextComponent() {
        return components.items[components.items.indexOf(current) + 1]
    }

    function getPreviousComponent() {
        const lastDocsPage = docs.items[docs.items.length - 1]
        const pathParts = lastDocsPage.path.split("/")
        return components.items[components.items.indexOf(current) - 1] || {
            ...docs.items[docs.items.length - 1],
            id: pathParts[pathParts.length - 1]
        }
    }

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
                {@render PageButtons()}
            </div>
        </div>
    </main>
</div>

{#snippet Title()}
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">{current.name}</h1>
        <p class="text-foreground-alt">{current.description}</p>
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
                <Demo.Example>
                    {@render example.snippet()}
                </Demo.Example>
                <Demo.Code
                    filename={example?.filename || "+page.svelte"}
                    lang={example?.lang || "svelte"}
                    code={example.raw}
                />
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
        {#each current.props as prop}
            <Props
                component={prop.component}
                description={prop.description}
                items={prop.items}
            />
        {/each}
    </div>
    <Separator />
{/snippet}

{#snippet PageButtons()}
    {#if current}
        {@const [next, prev] = [getNextComponent(), getPreviousComponent()]}
        <div class={cn(
            "flex gap-2 md:gap-4 w-full",
            next ? "justify-end" : "justify-start"
        )}>
            <button
                onclick={() => goto(components.items.indexOf(current) === 0 ? `/docs/${prev.id}` : `/components/${prev.id}`)}
                class="flex flex-col justify-center items-start gap-1 flex-1 bg-foreground-alt/5 hover:bg-foreground-alt/10 transition-all border-2 rounded-xl max-w-1/2 p-3 cursor-pointer disabled:pointer-events-none disabled:opacity-60"
                disabled={!prev}
            >
                <p class="text-xs text-foreground-alt leading-none">Previous</p>
                {#if prev?.name}
                    <p class="text-sm font-bold leading-none">{prev.name}</p>
                {/if}
            </button>
            <button
                onclick={() => goto(`/components/${next.id}`)}
                class="flex flex-col justify-center items-end gap-1 flex-1 bg-foreground-alt/5 hover:bg-foreground-alt/10 transition-all border-2 rounded-xl max-w-1/2 p-3 cursor-pointer disabled:pointer-events-none disabled:opacity-60"
                disabled={!next}
            >
                <p class="text-xs text-foreground-alt leading-none">Next</p>
                {#if next?.name}
                    <p class="text-sm font-bold leading-none">{next.name}</p>
                {/if}
            </button>
        </div>
    {/if}
{/snippet}

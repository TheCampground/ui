<script lang="ts">
	import type { Prop } from "@internal/sidebar/routes.ts"
	import { ShikiHandler } from "@internal/shiki/index.ts"
	import { Separator } from "@core/separator/index.ts"
	import { Info } from "@steeze-ui/phosphor-icons"
	import { Popover } from "@core/popover/index.ts"
	import { cn } from "$lib/utils.ts"

    type Props = {
        component: string
        description?: string
        items: Prop[]
    }

    let { component, description, items }: Props = $props()
</script>

<div class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        {@render componentName(component)}
        <p class="text-sm text-foreground-alt">{description}</p>
    </div>
    <table>
        <thead>
            <tr>
                <th class="text-start w-50 px-2 py-2">Property</th>
                <th class="text-start w-60 px-2 py-2 hidden lg:table-cell">Type</th>
                <th class="text-start px-2 py-2 hidden lg:table-cell">Description</th>
            </tr>
        </thead>
        <tbody>
            {#each items as item (item.property)}
                <tr class="border-t">
                    <td class="align-top text-start w-full lg:w-50 p-2 flex justify-between lg:justify-start items-center gap-1">
                        <div class="flex items-center gap-1">
                            {@render property(item)}
                            {@render bindable(item)}
                            {@render required(item)}
                        </div>
                        <span class="block lg:hidden">
                            <Popover useOverlay buttonText={Info} buttonSize="icon" buttonVariant="ghost" buttonClass="!size-6 align-center">
                                <div class="flex flex-col gap-4 w-full">
                                    <div class="flex w-full items-center justify-between gap-2">
                                        <p class="text-sm font-semibold">{item.property}</p>
                                        {@render bindable(item, false)}
                                        {@render required(item, false)}
                                    </div>
                                    <Separator class="my-0!" />
                                    <code>{item.type}</code>
                                    {#if item?.typeDef}
                                        <span class="max-w-[calc(100vw-5rem)] whitespace-break-spaces">
                                        {@html ShikiHandler.codeToHtml(item.typeDef, "typescript")}
                                        </span>
                                    {/if}
                                    <Separator class="my-0!" />
                                    <div class="flex flex-col w-full">
                                        <p class="text-sm font-medium">Description</p>
                                        <p class="text-xs text-foreground-alt max-w-[calc(100vw-5rem)] whitespace-break-spaces">
                                            {@html item.description}
                                        </p>
                                    </div>
                                </div>
                            </Popover>
                        </span>
                    </td>
                    <td class="align-top text-start w-60 p-2 text-sm font-medium font-code hidden lg:table-cell">
                        {item.type}
                        {@render callback(item)}
                    </td>
                    <td class="align-top text-start p-2 hidden lg:flex flex-col">
                        <p class="text-sm">{@html item.description}</p>
                        <p class="text-sm text-foreground-alt font-medium font-code">
                            Default:
                            {@render defaultProp(item)}
                        </p>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>


{#snippet componentName(component: string)}
    {@const parts = component.split(".")}
    {#if parts.length === 1}
        <span class="text-lg py-1 px-2 font-bold font-mono bg-button-primary select-none w-fit rounded-lg border text-brand-foreground">
            {component}
        </span>
    {:else}
        <span class="text-lg py-1 px-2 font-bold font-mono bg-button-primary select-none w-fit rounded-lg border text-brand-foreground">
            <span class="opacity-70">{parts[0]}.</span>{parts[1]}
        </span>
    {/if}
{/snippet}

{#snippet property(item: Prop)}
    <code class="text-xs!">{item.property}</code>
{/snippet}

{#snippet bindable(item: Prop, hidden: boolean = true)}
    {#if item.bindable}
        <code class={cn(
            hidden ? "hidden lg:block" : "block",
            "text-xs! bg-button-primary/40! border-button-primary/80"
        )}>
            $bindable
        </code>
    {/if}
{/snippet}

{#snippet required(item: Prop, hidden: boolean = true)}
    {#if item.required}
        <code class={cn(
            hidden ? "hidden lg:block" : "block",
            "text-xs! bg-red-500/20! border-red-500 text-red-500"
        )}>
            required
        </code>
    {/if}
{/snippet}

{#snippet defaultProp(item: Prop)}
    {#if item.default}
        <code class="text-xs!">{item.default}</code>
    {:else}
        —
    {/if}
{/snippet}

{#snippet callback(item: Prop)}
    {#if item?.typeDef}
        <Popover buttonText={Info} buttonSize="icon" buttonVariant="ghost" buttonClass="!size-6 align-middle">
            {@html ShikiHandler.codeToHtml(item.typeDef, "typescript")}
        </Popover>
    {/if}
{/snippet}

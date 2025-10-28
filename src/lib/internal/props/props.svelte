<script lang="ts">
	import { Button } from '@core/button/index.ts'
	import { Info } from '@steeze-ui/phosphor-icons'
	import { Icon } from '@steeze-ui/svelte-icon'


    type BaseItem = {
        property: string
        description: string
        default?: string
        typeDef?: string
    }

    type ItemAsFunction = {
        property: string
        bindable?: never
        type: "function"
        callback: string
    }

    type ItemOther = {
        property: string
        bindable?: boolean
        type: Exclude<any, "function">
        callback?: never
    }

    type Item = (BaseItem & (ItemAsFunction | ItemOther))

    type Props = {
        component: string
        description?: string
        items: Item[]
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
                <th class="text-start w-60 px-2 py-2">Type</th>
                <th class="text-start px-2 py-2">Description</th>
            </tr>
        </thead>
        <tbody>
            {#each items as item (item.property)}
                <tr class="border-t">
                    <td class="align-top text-start w-50 p-2 flex items-center gap-1">
                        {@render property(item)}
                        {@render bindable(item)}
                    </td>
                    <td class="align-top text-start w-60 p-2 text-sm font-medium font-code">
                        {item.type}
                        {@render callback(item)}
                    </td>
                    <td class="align-top text-start flex flex-col p-2">
                        <p class="text-sm">{item.description}</p>
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
        <span class="text-lg py-1 px-2 font-bold font-mono bg-button-primary select-none w-fit rounded-lg border">
            {component}
        </span>
    {:else}
        <span class="text-lg py-1 px-2 font-bold font-mono bg-button-primary select-none w-fit rounded-lg border">
            <span class="opacity-70">{parts[0]}.</span>{parts[1]}
        </span>
    {/if}
{/snippet}

{#snippet property(item: Item)}
    <code class="text-xs!">{item.property}</code>
{/snippet}

{#snippet bindable(item: Item)}
    {#if item.bindable}
        <code class="text-xs! bg-button-primary/60! border-button-primary/80">$bindable</code>
    {/if}
{/snippet}

{#snippet defaultProp(item: Item)}
    {#if item.default}
        <code class="text-xs!">{item.default}</code>
    {:else}
        —
    {/if}
{/snippet}

<!-- TODO: add popover for functions (`callback`) and custom types (`typeDef`) -->
{#snippet callback(item: Item)}
    {#if !item.type.match(/(string|number|boolean|Snippet)(\[\])?/g)}
        <Button variant="ghost" size="icon" class="size-6 align-middle">
            <Icon src={Info} theme="bold" class="size-3.5" />
        </Button>
    {/if}
{/snippet}

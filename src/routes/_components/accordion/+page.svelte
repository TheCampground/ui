<script lang="ts">
	import { Separator } from "$lib/index.ts"
    import * as Demo from "@internal/demo/index.ts"
    import AccordionDemo from "./example.svelte"
    import AccordionDemoRaw from "./example.svelte?raw"
	import { Props } from "@internal/props/index.ts"
</script>

<div class="w-full flex flex-col gap-10">
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Accordion</h1>
        <p class="text-foreground-alt">Organizes content into collapsible sections.</p>
    </div>
    <Separator />
    <Demo.Container>
        <Demo.Example>
            <AccordionDemo />
        </Demo.Example>
        <Demo.Code
            tabs={[
                {
                    filename: "+page.svelte",
                    lang: "svelte",
                    code: AccordionDemoRaw
                }
            ]}
        />
    </Demo.Container>
    <Separator hidden />
    <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-4">
            <h2 class="text-2xl font-bold">Props</h2>
            <Props
                component="Accordion.Root"
                description="The root component."
                items={[
                    {
                        property: "type",
                        type: "AccordionType",
                        typeDef: "type AccordionType = \"single\" | \"multiple\"",
                        default: "single",
                        description: "Determines how many accordion items can be open at the same time"
                    }
                ]}
            />
            <Props
                component="Accordion.Item"
                description="The accordion item."
                items={[
                    {
                        property: "title",
                        type: "string",
                        default: "",
                        description: "The title of the accordion item"
                    },
                    {
                        property: "value",
                        type: "string",
                        default: "Random ID",
                        description: "The value of the accordion item. Used to identify if the item is open or closed"
                    },
                    {
                        property: "children",
                        type: "Snippet",
                        default: "",
                        description: "The accordion item content when expanded"
                    }
                ]}
            />
        </div>
    </div>
</div>

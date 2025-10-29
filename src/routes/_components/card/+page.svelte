<script lang="ts">
	import { Separator } from "$lib/index.ts"
    import * as Demo from "@internal/demo/index.ts"
    import CardDemo from "./example.svelte"
    import CardDemoRaw from "./example.svelte?raw"
    import CardMediaDemo from "./example-media.svelte"
    import CardMediaDemoRaw from "./example-media.svelte?raw"
    import { Props } from "@internal/props/index.ts"
</script>

<div class="w-full flex flex-col gap-10">
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Card</h1>
        <p class="text-foreground-alt">Displays a themed container with header, content, and footer.</p>
    </div>
    <Separator />
    <Demo.Container>
        <Demo.Example>
            <CardDemo />
        </Demo.Example>
        <Demo.Code
            tabs={[
                {
                    filename: "+page.svelte",
                    lang: "svelte",
                    code: CardDemoRaw
                }
            ]}
        />
    </Demo.Container>
    <Separator hidden />
    <div class="flex flex-col gap-4">
        <div class="flex flex-col">
            <h2 class="text-2xl font-bold">Media</h2>
            <p class="text-foreground-alt">
                If you want to have a banner image beautifully placed in the card, you can pass an image url in the <code>media</code> property.
            </p>
        </div>
        <Demo.Container>
            <Demo.Example>
                <CardMediaDemo />
            </Demo.Example>
            <Demo.Code
                tabs={[
                    {
                        filename: "+page.svelte",
                        lang: "svelte",
                        code: CardMediaDemoRaw
                    }
                ]}
            />
        </Demo.Container>
    </div>
    <Separator hidden />
    <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">Props</h2>
        <Props
            component="Card"
            description="The card component."
            items={[
                {
                    property: "media",
                    type: "string",
                    default: "",
                    description: "Optional media banner in the card header"
                },
                {
                    property: "children",
                    bindable: true,
                    type: "boolean",
                    default: "false",
                    description: "The content of the card."
                },
                {
                    property: "class",
                    type: "string",
                    default: "",
                    description: "Additional classes for the card component"
                }
            ]}
        />
    </div>
</div>

<script lang="ts">
	import { Separator } from "$lib/index.ts"
	import { Props } from "@internal/props/index.ts"
    import * as Demo from "@internal/demo/index.ts"
    import LabelDemo from "./example.svelte"
    import LabelDemoRaw from "./example.svelte?raw"
</script>

<div class="w-full flex flex-col gap-10">
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Label</h1>
        <p class="text-foreground-alt">Identifies or describes associated UI elements.</p>
    </div>
    <Separator />
    <Demo.Container>
        <Demo.Example>
            <LabelDemo />
        </Demo.Example>
        <Demo.Code
            tabs={[
                {
                    filename: "+page.svelte",
                    lang: "svelte",
                    code: LabelDemoRaw
                }
            ]}
        />
    </Demo.Container>
    <Separator hidden />
    <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">Props</h2>
        <Props
            component="Empty"
            description="The empty component."
            items={[
                {
                    property: "for",
                    type: "string",
                    default: "Random ID",
                    description: "The id of the input that the label is associated with"
                },
                {
                    property: "children",
                    type: "Snippet",
                    default: "",
                    description: "The content of the label"
                }
            ]}
        />
    </div>
</div>

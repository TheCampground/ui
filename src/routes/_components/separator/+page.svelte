<script lang="ts">
	import { Separator } from "$lib/index.ts"
	import { Props } from "@internal/props/index.ts"
    import * as Demo from "@internal/demo/index.ts"
    import SeparatorDemo from "./example.svelte"
    import SeparatorDemoRaw from "./example.svelte?raw"
</script>

<div class="w-full flex flex-col gap-10">
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Separator</h1>
        <p class="text-foreground-alt">Visually separates content or UI elements.</p>
    </div>
    <Separator />
    <Demo.Container>
        <Demo.Example>
            <SeparatorDemo />
        </Demo.Example>
        <Demo.Code
            tabs={[
                {
                    filename: "+page.svelte",
                    lang: "svelte",
                    code: SeparatorDemoRaw
                }
            ]}
        />
    </Demo.Container>
    <Separator hidden />
    <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">Props</h2>
        <Props
            component="Separator"
            description="The separator component."
            items={[
                {
                    property: "orientation",
                    type: "Orientation",
                    typeDef: "type Orientation = \"horizontal\" | \"vertical\"",
                    default: "horizontal",
                    description: "The orientation of the separator"
                },
                {
                    property: "hidden",
                    type: "boolean",
                    default: "false",
                    description: "Whether to hide the visible line or not"
                }
            ]}
        />
    </div>
</div>

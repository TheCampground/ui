<script lang="ts">
	import { progressVariants, Separator } from "$lib/index.ts"
	import { Props } from "@internal/props/index.ts"
    import * as Demo from "@internal/demo/index.ts"
    import ProgressDemo from "./example.svelte"
    import ProgressDemoRaw from "./example.svelte?raw"

    const ProgressSizes = `type ProgressSize = ${Object.keys(progressVariants.variants.size).map(v => `"${v}"`).join(" | ")}`
</script>

<div class="w-full flex flex-col gap-10">
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Progress</h1>
        <p class="text-foreground-alt">Shows the completion status of a task.</p>
    </div>
    <Separator />
    <Demo.Container>
        <Demo.Example>
            <ProgressDemo />
        </Demo.Example>
        <Demo.Code
            tabs={[
                {
                    filename: "+page.svelte",
                    lang: "svelte",
                    code: ProgressDemoRaw
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
                    property: "label",
                    type: "string",
                    default: "",
                    description: "The label of the progress bar"
                },
                {
                    property: "size",
                    type: "ProgressSize",
                    typeDef: ProgressSizes,
                    default: "default",
                    description: "The size of the progress bar"
                },
                {
                    property: "showProgress",
                    type: "boolean",
                    default: "true",
                    description: "Whether or not to display the current progress"
                },
                {
                    property: "value",
                    type: "number",
                    default: "",
                    description: "The current value of the progress bar"
                }
            ]}
        />
    </div>
</div>

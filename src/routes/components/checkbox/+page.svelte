<script lang="ts">
	import { Separator } from "$lib/index.ts"
	import { Props } from "@internal/props/index.ts"
    import * as Demo from "@internal/demo/index.ts"
    import CheckboxDemo from "./example.svelte"
    import CheckboxDemoRaw from "./example.svelte?raw"
    import CheckboxChildDemoRaw from "./example-child.svelte?raw"
</script>

<div class="w-full flex flex-col gap-10">
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Checkbox</h1>
        <p class="text-foreground-alt">Enables users to select or deselect options with support for indeterminate states</p>
    </div>
    <Separator />
    <Demo.Container>
        <Demo.Example>
            <CheckboxDemo />
        </Demo.Example>
        <Demo.Code
            tabs={[
                {
                    filename: "Label as Prop",
                    lang: "svelte",
                    code: CheckboxDemoRaw
                },
                {
                    filename: "Label as Child",
                    lang: "svelte",
                    code: CheckboxChildDemoRaw
                },
            ]}
        />
    </Demo.Container>
    <Separator hidden />
    <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">Props</h2>
        <Props
            component="Checkbox"
            description="The checkbox component."
            items={[
                {
                    property: "indeterminate",
                    type: "boolean",
                    default: "false",
                    description: "Whether or not the checkbox is in an indeterminate state"
                },
                {
                    property: "checked",
                    bindable: true,
                    type: "boolean",
                    default: "false",
                    description: "Whether or not the checkbox is checked"
                },
                {
                    property: "disabled",
                    type: "boolean",
                    default: "false",
                    description: "Whether or not the checkbox is disabled"
                },
                {
                    property: "id",
                    type: "string",
                    default: "Random ID",
                    description: "The id of the checkbox for the label"
                },
                {
                    property: "label",
                    type: "string",
                    default: "false",
                    description: "The content of the label as a prop"
                },
                {
                    property: "children",
                    type: "Snippet",
                    default: "",
                    description: "The content of the label as a child"
                },
            ]}
        />
    </div>
</div>

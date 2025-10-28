<script lang="ts">
	import { Separator } from "$lib/index.ts"
	import { Props } from "@internal/props/index.ts"
    import * as Demo from "@internal/demo/index.ts"
    import InputDemo from "./example.svelte"
    import InputDemoRaw from "./example.svelte?raw"
    import InputIconDemo from "./example-icon.svelte"
    import InputIconDemoRaw from "./example-icon.svelte?raw"
</script>

<div class="w-full flex flex-col gap-10">
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Input</h1>
        <p class="text-foreground-alt">Displays a form input field or a component that looks like an input field.</p>
    </div>
    <Separator />
    <Demo.Container>
        <Demo.Example>
            <InputDemo />
        </Demo.Example>
        <Demo.Code
            tabs={[
                {
                    filename: "+page.svelte",
                    lang: "svelte",
                    code: InputDemoRaw
                }
            ]}
        />
    </Demo.Container>
    <Separator hidden />
    <div class="flex flex-col gap-4">
        <div class="flex flex-col">
            <h2 class="text-2xl font-bold">Icon</h2>
            <p class="text-foreground-alt">
                Display an icon in the input field
            </p>
        </div>
        <Demo.Container>
            <Demo.Example>
                <InputIconDemo />
            </Demo.Example>
            <Demo.Code
                tabs={[
                    {
                        filename: "+page.svelte",
                        lang: "svelte",
                        code: InputIconDemoRaw
                    }
                ]}
            />
        </Demo.Container>
    </div>
    <Separator hidden />
    <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">Props</h2>
        <Props
            component="Empty"
            description="The empty component."
            items={[
                {
                    property: "value",
                    type: "string",
                    bindable: true,
                    default: "",
                    description: "The value of the input"
                },
                {
                    property: "placeholder",
                    type: "string",
                    default: "",
                    description: "The placeholder of the input"
                },
                {
                    property: "type",
                    type: "InputType",
                    typeDef: "type InputType = \"text\" | \"file\" | \"number\" | \"email\" | \"password\" | \"search\" | \"tel\" | \"url\" | \"week\"",
                    default: "text",
                    description: "The type of input"
                },
                {
                    property: "icon",
                    type: "IconSource",
                    default: "",
                    description: "The Icon of input"
                },
                {
                    property: "position",
                    type: "IconPosition",
                    typeDef: "type IconPosition = \"left\" | \"right\"",
                    default: "left",
                    description: "The position of the icon"
                },
            ]}
        />
    </div>
</div>

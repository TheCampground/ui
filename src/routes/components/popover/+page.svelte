<script lang="ts">
	import { Separator } from "$lib/index.ts"
    import * as Demo from "@internal/demo/index.ts"
    import PopoverTriggerDemo from "./example-trigger.svelte"
    import PopoverTriggerDemoRaw from "./example-trigger.svelte?raw"
    import PopoverNoTriggerDemo from "./example-no-trigger.svelte"
    import PopoverNoTriggerDemoRaw from "./example-no-trigger.svelte?raw"
	import { buttonVariants } from "@core/button/index.ts"
    import { Props } from "@internal/props/index.ts"

    const ButtonVariants = `type ButtonVariant = ${Object.keys(buttonVariants.variants.variant).map(v => `"${v}"`).join(" | ")}`
    const ButtonSizes = `type ButtonSize = ${Object.keys(buttonVariants.variants.size).map(v => `"${v}"`).join(" | ")}`
</script>

<div class="w-full flex flex-col gap-10">
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Popover</h1>
        <p class="text-foreground-alt">Displays rich content in a floating panel anchored to a trigger element.</p>
    </div>
    <Separator />
    <Demo.Container>
        <Demo.Example>
            <PopoverTriggerDemo />
        </Demo.Example>
        <Demo.Code
            tabs={[
                {
                    filename: "+page.svelte",
                    lang: "svelte",
                    code: PopoverTriggerDemoRaw
                }
            ]}
        />
    </Demo.Container>
    <Separator hidden />
    <div class="flex flex-col gap-4">
        <div class="flex flex-col">
            <h2 class="text-2xl font-bold">Trigger</h2>
            <p class="text-foreground-alt">
                If you don't want to use a default trigger,
                you can optionally pass the prop <code>{"useTrigger={false}"}</code> to the Popover component,
                then handle the state with your own component using <code>bind:open</code>.
            </p>
            <p class="text-foreground-alt">
                You will need to pass the <code>anchor</code> prop as a <code>HTMLElement</code> to the Popover so it knows where to position itself.
            </p>
        </div>
        <Demo.Container>
            <Demo.Example>
                <PopoverNoTriggerDemo />
            </Demo.Example>
            <Demo.Code
                tabs={[
                    {
                        filename: "+page.svelte",
                        lang: "svelte",
                        code: PopoverNoTriggerDemoRaw
                    }
                ]}
            />
        </Demo.Container>
    </div>
    <Separator hidden />
    <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">Props</h2>
        <Props
            component="Popover"
            description="The component used to set and manage the state of the popover."
            items={[
                {
                    property: "open",
                    bindable: true,
                    type: "boolean",
                    default: "false",
                    description: "The state of the popover."
                },
                {
                    property: "useTrigger",
                    type: "boolean",
                    default: "false",
                    description: "Whether or not to use the default trigger."
                },
                {
                    property: "anchor",
                    type: "HTMLElement",
                    default: "null",
                    description: "The custom anchor element that triggers the Popover"
                },
                {
                    property: "buttonText",
                    type: "string | IconSource",
                    default: "",
                    description: "The text or icon for the default trigger"
                },
                {
                    property: "buttonVariant",
                    type: "ButtonVariant",
                    typeDef: ButtonVariants,
                    default: "primary",
                    description: "The variant of the default trigger"
                },
                {
                    property: "buttonSize",
                    type: "ButtonSize",
                    typeDef: ButtonSizes,
                    default: "primary",
                    description: "The size of the default trigger"
                },
                {
                    property: "children",
                    type: "Snippet",
                    default: "",
                    description: "The content to render inside the Popover"
                },
            ]}
        />
    </div>
</div>

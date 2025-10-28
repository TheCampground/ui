<script lang="ts">
	import { Separator } from "$lib/index.ts"
    import * as Demo from "@internal/demo/index.ts"
    import DialogTriggerDemo from "./example-trigger.svelte"
    import DialogTriggerDemoRaw from "./example-trigger.svelte?raw"
    import DialogNoTriggerDemo from "./example-no-trigger.svelte"
    import DialogNoTriggerDemoRaw from "./example-no-trigger.svelte?raw"
	import { buttonVariants } from "@core/button/index.ts"
    import { Props } from "@internal/props/index.ts"

    const ButtonVariants = `type ButtonVariant = ${Object.keys(buttonVariants.variants.variant).join(" | ")}`
    const ButtonSizes = `type ButtonSize = ${Object.keys(buttonVariants.variants.size).join(" | ")}`
</script>

<div class="w-full flex flex-col gap-10">
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Dialog</h1>
        <p class="text-foreground-alt">A modal window for displaying content or requesting user input.</p>
    </div>
    <Separator />
    <Demo.Container>
        <Demo.Example>
            <DialogTriggerDemo />
        </Demo.Example>
        <Demo.Code
            tabs={[
                {
                    filename: "+page.svelte",
                    lang: "svelte",
                    code: DialogTriggerDemoRaw
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
                you can optionally pass the prop <code>{"useTrigger={false}"}</code> to the <code>Dialog</code> component,
                then handle the state with your own component using <code>bind:open</code>.
            </p>
        </div>
        <Demo.Container>
            <Demo.Example>
                <DialogNoTriggerDemo />
            </Demo.Example>
            <Demo.Code
                tabs={[
                    {
                        filename: "+page.svelte",
                        lang: "svelte",
                        code: DialogNoTriggerDemoRaw
                    }
                ]}
            />
        </Demo.Container>
    </div>
    <Separator hidden />
    <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">Props</h2>
        <Props
            component="Dialog"
            description="The component used to set and manage the state of the dialog."
            items={[
                {
                    property: "open",
                    bindable: true,
                    type: "boolean",
                    default: "false",
                    description: "The state of the alert dialog."
                },
                {
                    property: "useTrigger",
                    type: "boolean",
                    default: "false",
                    description: "Whether or not to use the default trigger."
                },
                {
                    property: "buttonText",
                    type: "string",
                    default: "",
                    description: "The text for the default trigger"
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
                    property: "title",
                    type: "Snippet",
                    default: "",
                    description: "The title snippet to render. This is placed inside the AlertDialog as a child."
                },
                {
                    property: "description",
                    type: "Snippet",
                    default: "",
                    description: "The description snippet to render. This is placed inside the AlertDialog as a child."
                },
            ]}
        />
    </div>
</div>

<script lang="ts">
	import { Separator } from "$lib/index.ts"
	import { Button, buttonVariants } from "$lib/index.ts"
    import ButtonDemoRaw from "./example.svelte?raw"
	import { Props } from "@internal/props/index.ts"
    import * as Demo from "@internal/demo/index.ts"
    import ButtonDemo from "./example.svelte"

    const ButtonVariants = `type ButtonVariant = ${Object.keys(buttonVariants.variants.variant).join(" | ")}`
    const ButtonSizes = `type ButtonSize = ${Object.keys(buttonVariants.variants.size).join(" | ")}`
</script>

<div class="w-full flex flex-col gap-10">
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Button</h1>
        <p class="text-foreground-alt">A custom button components with multiple variations and sizes</p>
    </div>
    <Separator />
    <Demo.Container>
        <Demo.Example>
            <ButtonDemo />
        </Demo.Example>
        <Demo.Code
            tabs={[
                {
                    filename: "+page.svelte",
                    lang: "svelte",
                    code: ButtonDemoRaw
                }
            ]}
        />
    </Demo.Container>
    <Separator hidden />
    <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">Variants</h2>
        <div class="flex gap-10 flex-wrap">
            <div class="flex flex-col gap-2">
                <p class="text-foreground-alt text-sm">Default</p>
                <Button variant="default" size="default">
                    Unlimited
                </Button>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-foreground-alt text-sm">Primary</p>
                <Button variant="primary" size="default">
                    Unlimited
                </Button>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-foreground-alt text-sm">Secondary</p>
                <Button variant="secondary" size="default">
                    Unlimited
                </Button>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-foreground-alt text-sm">Danger</p>
                <Button variant="danger" size="default">
                    Unlimited
                </Button>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-foreground-alt text-sm">Outline</p>
                <Button variant="outline" size="default">
                    Unlimited
                </Button>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-foreground-alt text-sm">Ghost</p>
                <Button variant="ghost" size="default">
                    Unlimited
                </Button>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-foreground-alt text-sm">Link</p>
                <Button variant="link" size="default">
                    Unlimited
                </Button>
            </div>
        </div>
    </div>
    <Separator hidden />
    <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">Sizes</h2>
        <div class="flex gap-10 flex-wrap">
            <div class="flex flex-col gap-2">
                <p class="text-foreground-alt text-sm">Default</p>
                <Button variant="primary" size="default">
                    Unlimited
                </Button>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-foreground-alt text-sm">Icon</p>
                <Button variant="primary" size="icon">
                    <img src="/favicon-dark.png" class="size-5 select-none pointer-events-none" alt="" draggable="false" />
                </Button>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-foreground-alt text-sm">Small</p>
                <Button variant="primary" size="small">
                    Unlimited
                </Button>
            </div>
        </div>
    </div>
    <Separator hidden />
    <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">Props</h2>
        <Props
            component="Button"
            description="The button component."
            items={[
                {
                    property: "variant",
                    type: "ButtonVariant",
                    typeDef: ButtonVariants,
                    default: "default",
                    description: "The variant of the default trigger"
                },
                {
                    property: "size",
                    type: "ButtonSize",
                    typeDef: ButtonSizes,
                    default: "default",
                    description: "The size of the default trigger"
                },
                {
                    property: "href",
                    type: "string",
                    default: "",
                    description: "Converts the button to an anchor tag when passed"
                },
                {
                    property: "disabled",
                    type: "boolean",
                    default: "false",
                    description: "Whether or not the button is disabled"
                },
                {
                    property: "children",
                    type: "Snippet",
                    default: "",
                    description: "The child content to render"
                },
            ]}
        />
    </div>
</div>

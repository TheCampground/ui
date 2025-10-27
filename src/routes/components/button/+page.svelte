<script lang="ts">
	import { Separator } from "@internal/separator/index.ts"
    import ButtonDemoRaw from "./example.svelte?raw"
    import * as Demo from "@internal/demo/index.ts"
    import ButtonDemo from "./example.svelte"
	import { Button } from "$lib/index.ts"
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
</div>

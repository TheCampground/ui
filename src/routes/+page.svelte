<script>
	import { Accordion } from "@core/accordion/index.ts"
	import { Button } from "@core/button/index.ts"
</script>

<div class="flex flex-col w-full gap-20 flex-1 grow">
    <div class="flex flex-col gap-2 flex-1 grow">
        <!-- Accordion -->
        <p class="text-2xl font-bold">Accordion</p>
        <Accordion.Root type="single">
            <Accordion.Item title="How do I become a better person?" value="2">
                To become a better person, to help others, and to leave the world a better place than you found it.
            </Accordion.Item>
            <Accordion.Item title="Hello world2" value="sex2">
                Read books, listen to podcasts, and surround yourself with people who inspire you.
            </Accordion.Item>
        </Accordion.Root>
    </div>
    <div class="flex flex-col gap-4 flex-1 grow">
        <!-- Button -->
        <p class="text-2xl font-bold">Button</p>
        <div class="flex gap-1 items-center">
            <Button variant="default" size="default">Default</Button>
            <Button variant="primary" size="default">Primary</Button>
            <Button variant="secondary" size="default">Secondary</Button>
            <Button variant="danger" size="default">Danger</Button>
            <Button variant="link" size="default">Link</Button>
        </div>
        <Accordion.Root type="multiple">
            <Accordion.Item title="Button Sizes" value="sizes" class="flex flex-col gap-2">
                <div class="flex gap-1 items-center">
                    <Button variant="default" size="default">Default</Button>
                    <Button variant="default" size="icon">{@render icon()}</Button>
                    <Button variant="default" size="small">Small</Button>
                </div>
                <div class="flex gap-1 items-center">
                    <Button variant="primary" size="default">Default</Button>
                    <Button variant="primary" size="icon">{@render icon()}</Button>
                    <Button variant="primary" size="small">Small</Button>
                </div>
                <div class="flex gap-1 items-center">
                    <Button variant="secondary" size="default">Default</Button>
                    <Button variant="secondary" size="icon">{@render icon()}</Button>
                    <Button variant="secondary" size="small">Small</Button>
                </div>
                <div class="flex gap-1 items-center">
                    <Button variant="danger" size="default">Default</Button>
                    <Button variant="danger" size="icon">{@render icon()}</Button>
                    <Button variant="danger" size="small">Small</Button>
                </div>
                <div class="flex gap-1 items-center">
                    <Button variant="link" size="default">Default</Button>
                    <Button variant="link" size="icon">{@render icon("dark")}</Button>
                    <Button variant="link" size="small">Small</Button>
                </div>
            </Accordion.Item>
            <Accordion.Item title="Disabled Buttons" value="disabled" class="flex flex-col gap-2">
                <div class="flex gap-1 items-center">
                    <Button variant="default" size="default" disabled>Disabled</Button>
                    <Button variant="primary" size="default" disabled>Disabled</Button>
                    <Button variant="secondary" size="default" disabled>Disabled</Button>
                    <Button variant="danger" size="default" disabled>Disabled</Button>
                    <Button variant="link" size="default" disabled>Disabled</Button>
                </div>
                <div class="flex gap-1 items-center">
                    <Button variant="default" size="small" disabled>Disabled</Button>
                    <Button variant="primary" size="small" disabled>Disabled</Button>
                    <Button variant="secondary" size="small" disabled>Disabled</Button>
                    <Button variant="danger" size="small" disabled>Disabled</Button>
                    <Button variant="link" size="small" disabled>Disabled</Button>
                </div>
                <div class="flex gap-1 items-center">
                    <Button variant="default" size="icon" disabled>{@render icon()}</Button>
                    <Button variant="primary" size="icon" disabled>{@render icon()}</Button>
                    <Button variant="secondary" size="icon" disabled>{@render icon()}</Button>
                    <Button variant="danger" size="icon" disabled>{@render icon()}</Button>
                    <Button variant="link" size="icon" disabled>{@render icon("dark")}</Button>
                </div>
            </Accordion.Item>
        </Accordion.Root>
    </div>
</div>

{#snippet icon(theme = "light")}
    <img
        src={theme === "light" ? "/favicon.png" : "/favicon-dark.png"}
        class="size-5 select-none pointer-events-none"
        draggable="false"
        alt=""
    />
{/snippet}

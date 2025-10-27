<script>
	import { Accordion, Button } from "$lib/index.ts"

</script>
<div class="flex flex-col gap-10 flex-1 grow">
    <div class="flex flex-col gap-2">
        <p class="text-2xl font-bold">Button</p>
        <p class="text-sm font-normal">
            A component that can switch between a button and an anchor tag based on the `href` prop.
        </p>
    </div>
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

{#snippet icon(theme = "light")}
    <img
        src={theme === "light" ? "/favicon.png" : "/favicon-dark.png"}
        class="size-5 select-none pointer-events-none"
        draggable="false"
        alt=""
    />
{/snippet}

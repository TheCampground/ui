<script lang="ts">
    import AccordionDemo from "@internal/examples/accordion.svelte?raw"
	import { Codeblock } from "@internal/codeblock/index.ts"
	import { Separator } from "$lib/index.ts"
</script>

<div class="w-full flex flex-col gap-10" id="docs">
    <p>
        Welcome to <code>campground/ui</code>, a collection of themed components built for
        <a class="link" href="https://thecampground.dev" target="_blank">@TheCampground</a>, built with accessibility in mind.
    </p>
    <Separator hidden />
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Installation</h1>
        <p class="text-foreground-alt">Install campground/ui using your preferred package manager</p>
        <Codeblock lang="shell" code="pnpm install @campground/ui" />
    </div>
    <Separator hidden />
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Basic Usage</h1>
        <p class="text-foreground-alt">
            After installing <code>campground/ui</code>, you can import and use the components in your Svelte files.
            Here's an example using
        </p>
        <Codeblock lang="svelte" code={AccordionDemo} />
    </div>
    <Separator hidden />
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Next Steps</h1>
        <div class="flex flex-col">
            <p class="text-foreground-alt">
                Now that you have <code>campground/ui</code> installed, you can browse all the different available <a class="link" href="/components">components</a>.
            </p>
            <p class="text-foreground-alt">
                Need help? Join our community <a class="link" href="https://thecampground.dev/join" target="_blank">The Campsite</a> and make a new post in the Support forum.
            </p>
        </div>
    </div>
</div>

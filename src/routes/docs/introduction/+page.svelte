<script lang="ts">
	import { Separator } from "$lib/index.ts"
</script>

<div class="w-full flex flex-col gap-10">
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Introduction</h1>
        <p class="text-foreground-alt">A collection of themed UI components.</p>
    </div>
    <p>
        campground/ui is a collection of themed components built for
        <a class="link" href="https://thecampground.dev" target="_blank">@TheCampground</a>, built with accessibility in mind.
    </p>
    <a href="/docs/getting-started" aria-label="Getting Started">
        <img src="/images/introduction_get_started.png" alt="" draggable="false" class="select-none pointer-events-none">
    </a>
    <Separator hidden />
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Acknowledgements</h1>
        <ul>
            <li><a class="link" href="https://bits-ui.com" target="_blank">Bits UI</a> - The UI library used.</li>
            <li><a class="link" href="https://ui.shadcn.com" target="_blank">shadcn/ui</a> - Inspiration for some components / design choices.</li>
        </ul>
    </div>
</div>

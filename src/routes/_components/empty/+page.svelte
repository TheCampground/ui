<script lang="ts">
	import { Separator } from "$lib/index.ts"
    import EmptyDemoRaw from "./example.svelte?raw"
	import { Props } from "@internal/props/index.ts"
    import * as Demo from "@internal/demo/index.ts"
    import EmptyDemo from "./example.svelte"
</script>

<div class="w-full flex flex-col gap-10">
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Empty</h1>
        <p class="text-foreground-alt">Display a empty state</p>
    </div>
    <Separator />
    <Demo.Container>
        <Demo.Example>
            <EmptyDemo />
        </Demo.Example>
        <Demo.Code
            tabs={[
                {
                    filename: "+page.svelte",
                    lang: "svelte",
                    code: EmptyDemoRaw
                }
            ]}
        />
    </Demo.Container>
    <Separator hidden />
    <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">Props</h2>
        <Props
            component="Empty"
            description="The empty component."
            items={[
                {
                    property: "title",
                    type: "string",
                    default: "",
                    description: "The title of the empty state"
                },
                {
                    property: "icon",
                    type: "IconSource",
                    default: "FolderSimpleStar",
                    description: "The Icon of the empty state"
                },
                {
                    property: "description",
                    type: "Snippet",
                    default: "",
                    description: "The description snippet"
                },
                {
                    property: "children",
                    type: "Snippet",
                    default: "",
                    description: "The content of the empty state"
                },
            ]}
        />
    </div>
</div>

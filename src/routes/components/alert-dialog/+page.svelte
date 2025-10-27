<script lang="ts">
	import { Separator } from "@internal/separator/index.ts"
    import * as Demo from "@internal/demo/index.ts"
    import AlertDialogDemo from "./example.svelte"
    import AlertDialogDemoRaw from "./example.svelte?raw"
</script>

<div class="w-full flex flex-col gap-10">
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Alert Dialog</h1>
        <p class="text-foreground-alt">A modal window presenting content or seeking user input without navigating away from the current context.</p>
    </div>
    <Separator />
    <Demo.Container>
        <Demo.Example>
            <AlertDialogDemo />
        </Demo.Example>
        <Demo.Code
            tabs={[
                {
                    filename: "+page.svelte",
                    lang: "svelte",
                    code: AlertDialogDemoRaw
                }
            ]}
        />
    </Demo.Container>
</div>

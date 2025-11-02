<script>
	import { Codeblock } from "@internal/codeblock/index.ts"
    import Example from "@internal/examples/sonner.svelte?raw"
    import { Alert } from "$lib/index.ts"
	import { Info } from "@steeze-ui/phosphor-icons"
</script>

<div class="flex flex-col w-full gap-10">
    <div class="flex flex-col gap-2">
        <p class="text-lg font-medium">About</p>
        <p class="text-sm text-foreground-alt">
            Sonner is provided by <a class="link" href="https://svelte-sonner.vercel.app/" target="_blank">svelte-sonner</a>, which is a Svelte port of <a class="link" href="https://sonner.emilkowal.ski/" target="_blank">Sonner</a>, originally created by <a class="link" href="https://twitter.com/emilkowalski_" target="_blank">Emil Kowalski</a> for React, ported by <a class="link" href="https://twitter.com/wobsoriano" target="_blank">wobsoriano</a>.
        </p>
    </div>
    <div class="flex flex-col gap-5">
        <p class="text-lg font-medium">Installation</p>
        <div class="flex flex-col gap-2 w-full">
            <p class="text-sm font-medium">Setup theme support</p>
            <p class="text-sm text-foreground-alt">
                By default, Sonner will use ther user's system preferences to determine whether to show the light or dark theme.
                To get around this, you can either pass in a custom <code>theme</code> prop to the component,
                or simply use <a class="link" href="https://github.com/svecosystem/mode-watcher" target="_blank">mode-watcher</a>
                which you can hardcode to <code>dark</code> or <code>light</code> mode should you wish.
            </p>
        </div>
        <p class="text-sm text-foreground-alt">
            You can learn more about setting up Dark Mode support <a class="link" href="/docs/dark-mode" target="_blank">here</a>
        </p>
        <p class="text-sm text-foreground-alt">
            If you wish to opt out of Dark Mode support,
            you can uninstall <code>mode-watcher</code> and remove the theme prop from the component after installing.
        </p>
        <Codeblock lang="shell" code="pnpm add -D svelte-sonner" />
        <p class="text-sm text-foreground-alt">
            Add the <code>Toaster</code> component to your app layout
        </p>
        <Codeblock
            filename="+layout.svelte"
            lang="svelte"
            code={`<script lang="ts">
    import { Toaster } from "$lib/index.ts"
    let { children } = $props()
<\/script>

<Toaster />

{@render children ?.()}
`}
        />
    </div>
    <div class="flex flex-col gap-5">
        <p class="text-lg font-medium">Usage</p>
        <Codeblock lang="svelte" code={Example} />
        <div class="flex flex-col gap-2">
            <p class="text-sm">Dismiss a toast</p>
            <Codeblock lang="typescript" code={`const toastId = toast("Event has been created")

toast.dismiss(toastId)`} />
        </div>
        <div class="flex flex-col gap-2">
            <p class="text-sm">Dismiss all toasts at once</p>
            <Codeblock lang="typescript" code="toast.dismiss()" />
        </div>
        <div class="flex flex-col gap-2">
            <p class="text-sm font-medium"><code>useSonner</code></p>
            <p class="text-sm text-foreground-alt">
                You can use the <code>useSonner</code> hook to retrieve all visible toasts
            </p>
            <Codeblock lang="typescript" code={`const sonner = useSonner()

$effect(() => console.log(sonner.toasts))`} />
        </div>
    </div>
    <Alert icon={Info} variant="info">
        <p class="text-sm">
            Learn more about svelte-sonner <a class="link text-inherit!" href="https://github.com/wobsoriano/svelte-sonner?tab=readme-ov-file#svelte-sonner" target="_blank">here</a>
        </p>
    </Alert>
</div>

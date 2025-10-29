<script lang="ts">
	import Separator from "@core/separator/separator.svelte"
	import { Sparkle } from "@steeze-ui/phosphor-icons"
	import { Footer } from "@internal/footer/index.ts"
    import { HomeNav } from "@internal/nav/index.ts"
	import Button from "@core/button/button.svelte"
	import { Icon } from "@steeze-ui/svelte-icon"
	import { goto } from "$app/navigation"

    let images = [
        "/images/home_themed.png",
        "/images/home_customizable.png",
        "/images/home_accessible.png",
    ]

    function handleStartKeybind(e: KeyboardEvent) {
        if (e.key === "s") {
            goto("/components")
        }
    }
</script>

<svelte:window onkeyup={handleStartKeybind} />

<HomeNav />

<div class="flex flex-col gap-10 h-screen overflow-y-auto">
    <div class="w-full min-h-[calc(100vh-8rem)] flex items-center justify-center bg-linear-to-b from-transparent to-button-ghost-hover border-b">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center text-center gap-8 px-5 md:px-0">
            <Button size="small" class="rounded-full! px-4 h-9! gap-3 border border-button-ghost-hover/40" href="/components">
                <Icon src={Sparkle} theme="bold" class="size-4" />
                <Separator orientation="vertical" class="bg-button-ghost-hover/40! h-[50%]!" />
                <p class="text-xs font-normal">campground/ui is now in <b>beta</b>!</p>
            </Button>
            <h1 class="text-4xl md:text-6xl font-black w-full text-center">A collection of themed UI components.</h1>
            <p class="text-base md:text-lg text-foreground-alt">
                Simple, accessible, and cozily themed component library built on top of
                <a class="link" href="https://bits-ui.com" target="_blank">Bits UI</a>
                for
                <a class="link" href="https://thecampground.dev" target="_blank">@TheCampground</a>
                projects.
            </p>
            <Button variant="primary" href="/docs/introduction" class="gap-2">
                <span class="rounded-sm border font-mono text-xs leading-none size-5 flex items-center justify-center">S</span>
                Get Started
            </Button>
        </div>
    </div>

    <div class="flex flex-col gap-8 items-center w-full my-30">
        <div class="w-full flex flex-col items-center justify-center text-start gap-8 grow flex-1">
            <h2 class="text-4xl font-black text-center">The foundation to a beautiful project</h2>
            <img src="/images/home_showcase.png" alt="" draggable="false" class="select-none pointer-events-none h-full w-auto hidden md:block">
            <div class="flex flex-col gap-2 items-center justify-center md:hidden">
                {#each images as src, i (i)}
                    <img {src} alt="" draggable="false" class="select-none pointer-events-none h-full w-auto">
                {/each}
            </div>
        </div>
    </div>

    <Footer />
</div>

<script lang="ts">
    import css from "../../../app.css?raw"
	import { ShikiHandler } from "@internal/shiki/index.ts"
	import { Separator } from "$lib/index.ts"
</script>

<div class="w-full flex flex-col gap-10" id="docs">
    <p>
        <!-- TODO: fact check this -->
        By default, our components are shipped pre-styled -
        however, if you want to create your own project specific components,
        this css file contains the blueprint to all the styles and theming needed to match the <span class="text-brand">Campground</span> aesthetic.
    </p>
    {@html ShikiHandler.codeToHtml(css, "css")}
    <Separator hidden />
    <div class="flex flex-col gap-4 w-full">
        <p>
            We also recommend using <a href="https://fontsource.org/fonts/space-grotesk" target="_blank" class="link">Space Grotesk</a> as the font,
            however, this is completely optional.
        </p>
        <p>
           If you do wish to use Space Grotesk as your font, here's how you can do it:
        </p>
        {@html ShikiHandler.codeToHtml("pnpm add @fontsource-variable/space-grotesk", "shell")}
        <p>Then import the font in your <code>+layout.svelte</code> script tag along with the css file above if you are using that.</p>
        {@html ShikiHandler.codeToHtml(`<script lang="ts">
    import "../app.css"
    import \"@fontsource-variable/space-grotesk\"
    // ...
</script>`, "svelte")}
    </div>
</div>

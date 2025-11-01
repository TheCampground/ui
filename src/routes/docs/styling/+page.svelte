<script lang="ts">
	import { Codeblock } from "@internal/codeblock/index.ts"
	import { Separator } from "$lib/index.ts"
    import css from "../../../app.css?raw"

    const code = `<script lang="ts">
    import "../app.css"
    import "@fontsource-variable/space-grotesk"
    // ...
<\/script>`
</script>

<div class="w-full flex flex-col gap-10" id="docs">
    <p>
        <!-- TODO: fact check this -->
        By default, our components are shipped pre-styled -
        however, if you want to create your own project specific components,
        this css file contains the blueprint to all the styles and theming needed to match the <span class="text-brand">Campground</span> aesthetic.
    </p>
    <Codeblock lang="css" code={css} filename="app.css" />
    <Separator hidden />
    <div class="flex flex-col gap-4 w-full">
        <p>
            We also recommend using <a href="https://fontsource.org/fonts/space-grotesk" target="_blank" class="link">Space Grotesk</a> as the font,
            however, this is completely optional.
        </p>
        <p>
           If you do wish to use Space Grotesk as your font, here's how you can do it:
        </p>
        <Codeblock lang="shell" code="pnpm add @fontsource-variable/space-grotesk" />
        <p>Then import the font along with the css file above if you are using that.</p>
        <Codeblock
            lang="svelte"
            filename="+layout.svelte"
            {code}
        />
        <p>Finally, add it to your css file. You can skip this step if you are already using the css file above.</p>
        <Codeblock
            lang="css"
            filename="app.css"
            code={`body {
    font-family: "Space Grotesk", sans-serif;
}`}
        />
    </div>
</div>

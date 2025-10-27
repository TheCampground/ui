import VesperLight from "@internal/assets/vesper-light.json" with { type: "json" }
import { createHighlighter } from "shiki"

const highlighter = await createHighlighter({
    themes: [],
    langs: ["typescript", "javascript", "svelte", "html", "css", "text"]
})

await highlighter.loadTheme("vesper")
await highlighter.loadTheme(VesperLight)

const shikiOptions = {
    themes: {
        dark: "vesper",
        light: "vesper-light"
    },
    defaultColor: "light"
}

export class ShikiHandler {

    constructor() {
        throw new Error("Cannot instantiate abstract class")
    }

    static replaceImport(code: string) {
        return code
            .replace(/\$lib\/index\.[t|j]s/g, "@campground/ui")
    }

    static codeToHtml(code: string, lang: any) {
        return highlighter.codeToHtml(this.replaceImport(code), {
            lang,
            ...shikiOptions
        })
    }

}

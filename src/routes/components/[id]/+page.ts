import { components } from "@internal/routes/index.ts"
import { error } from "@sveltejs/kit"
import type { Snippet } from "svelte"

export async function load({ params }) {

    let route = components.items.find(item => item.id === params.id)

    if (!route) throw error(404, "Component not found")

    let examples = []
    let details: Snippet | null = null

    try {

        if (route.details) {
            let imported = await import(`@internal/examples/${route.details}.svelte`)
            details = imported.default
        }

        for (const example of route.examples) {
            let imported = await import(`@internal/examples/${example.file}.svelte`)
            if (example.code !== false) {
                let importedRaw = await import(`@internal/examples/${example.file}.svelte?raw`)
                examples.push({
                    ...example,
                    snippet: imported.default,
                    raw: importedRaw.default
                })
            } else {
                examples.push({
                    ...example,
                    snippet: imported.default
                })
            }
        }

        return { examples, details }

    } catch (error) {
        console.error(error)

        return {
            examples: [{
                filename: "404",
                snippet: null,
                raw: "No examples found for this component",
            }],
            details: null
        }
    }


}

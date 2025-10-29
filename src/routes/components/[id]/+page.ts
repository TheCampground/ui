import { components } from "@internal/sidebar/routes.ts"
import { error } from "@sveltejs/kit"

export async function load({ params }) {

    let route = components.items.find(item => item.id === params.id)

    if (!route) throw error(404, "Component not found")

    let examples = []

    for (const example of route.examples) {
        let imported = await import(`@internal/examples/${example.file}.svelte`)
        let importedRaw = await import(`@internal/examples/${example.file}.svelte?raw`)
        examples.push({
            ...example,
            snippet: imported.default,
            raw: importedRaw.default
        })
    }

    return { examples }

}

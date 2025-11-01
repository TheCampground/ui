import { components } from "@internal/routes/index.ts"
import { redirect } from "@sveltejs/kit"

export function load() {
    throw redirect(302, `/components/${components.items[0].id}`)
}

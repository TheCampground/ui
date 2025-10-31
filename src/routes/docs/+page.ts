import { docs } from "@internal/sidebar/routes.ts"
import { redirect } from "@sveltejs/kit"

export function load() {
    throw redirect(302, `/docs/${docs.items[0].id}`)
}

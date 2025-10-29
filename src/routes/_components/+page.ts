import { routes } from "@internal/sidebar/routes.ts"
import { redirect } from "@sveltejs/kit"

export function load() {
    let lastItem = routes[routes.length - 1].items?.[0]
    throw redirect(302, lastItem ? lastItem.path : "/")
}

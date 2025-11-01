import { error } from "@sveltejs/kit"

export function load() {
    throw error(410, "Deprecated: Please define new components in <code>/src/lib/internal/routes/index.ts</code> and any relevant examples in <code>/src/lib/internal/examples</code>")
}

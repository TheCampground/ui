import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from "@sveltejs/adapter-auto"
import path from "node:path"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
        adapter: adapter(),
		alias: {
			"@core": path.resolve("./src/lib/components")
		}
	}
}

export default config

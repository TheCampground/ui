import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from "@sveltejs/adapter-node"
import { resolve } from "node:path"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte"],
	preprocess: [vitePreprocess()],
	kit: {
        adapter: adapter({
            out: "build",
            precompress: true
        }),
		alias: {
		    "@internal": resolve("./src/lib/internal"),
			"@core": resolve("./src/lib/components"),
		},
        experimental: {
            remoteFunctions: true
        }
	},
    compilerOptions: {
        experimental: {
            async: true
        }
    }
}

export default config


// import VesperLight from "./static/vesper-light.json" with { type: "json" }

// import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
// import adapter from "@sveltejs/adapter-node"

// import { mdsvex, escapeSvelte } from "mdsvex"
// import { dirname, resolve } from "node:path"
// import { createHighlighter } from "shiki"
// import { fileURLToPath } from "node:url"

// import rehypeUnwrapImages from "rehype-unwrap-images"
// import rehypeSlug from "rehype-slug"
// import remarkToc from "remark-toc"
// import remarkGfm from "remark-gfm"

// const highlighter = await createHighlighter({
//     themes: [],
//     langs: ["javascript", "typescript", "svelte", "html", "css", "text"]
// })
// await highlighter.loadTheme(VesperLight)
// await highlighter.loadTheme("vesper")

// /** @type {import('mdsvex').MdsvexOptions} */
// const mdsvexOptions = {
//     extensions: [".md"],
//     highlight: {
//         highlighter: async (code, lang = "text") => {
//             let options = {
//                 themes: {
//                     dark: "vesper",
//                     light: "vesper-light"
//                 },
//                 defaultColor: "light"
//             }
//             const html = highlighter.codeToHtml(code, {
//                 lang,
//                 ...options
//             })
//             return `{@html \`${escapeSvelte(html)}\`}`
//         }
//     },
//     remarkPlugins: [
//         remarkGfm,
//         [remarkToc, { tight: true }]
//     ],
//     rehypePlugins: [
//         rehypeSlug,
//         rehypeUnwrapImages
//     ],
//     layout: {
//         // _: dirname(fileURLToPath(import.meta.url)) + "/src/mdsvex.svelte"
//         _: resolve("./src/mdsvex.svelte")
//     }
// }

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	extensions: [".svelte", ".md"],
// 	preprocess: [
//         mdsvex(mdsvexOptions),
//         vitePreprocess()
//     ],
// 	kit: {
//         adapter: adapter({
//             out: "build",
//             precompress: true
//         }),
// 		alias: {
// 		    "@internal": resolve("./src/lib/internal"),
// 		    "@internal/mdsvex": resolve("./src/lib/internal/mdsvex"),
// 			"@core": resolve("./src/lib/components")
// 		},
//         experimental: {
//             remoteFunctions: true
//         }
// 	},
//     compilerOptions: {
//         experimental: {
//             async: true
//         }
//     }
// }

// export default config

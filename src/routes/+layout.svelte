<script lang="ts">
    import { afterNavigate } from "$app/navigation"
    import { ModeWatcher } from "mode-watcher"
    import { Noise } from "$lib/index.ts"

	import "../app.css"
    import "@fontsource-variable/space-grotesk"

	let { children } = $props()

   	afterNavigate(() => {
        document.querySelectorAll("main").forEach((el) => {
            el.scrollTo({ top: 0 })
        })
   	})
</script>

<ModeWatcher defaultTheme="light" defaultMode="light" themeStorageKey="campground-ui-theme" />
<Noise intensity="medium" />

{@render children?.()}

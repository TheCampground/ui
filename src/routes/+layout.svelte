<script lang="ts">
	import { afterNavigate } from "$app/navigation"
	import "../app.css"
    import "@fontsource-variable/space-grotesk"

	let { children } = $props()

   	afterNavigate((nav) => {
        document.querySelectorAll("main").forEach((el) => {
            el.scrollTo({ top: 0 })
        })
   	})
</script>

{@render children?.()}

<script lang="ts">
	import "../app.css"
    import "@fontsource-variable/space-grotesk"

	import { Sidebar } from "@internal/sidebar/index.ts"
    import { Nav } from "@internal/nav/index.ts"

	let { children } = $props()
</script>

<Nav />
<div class="flex flex-row">
    <Sidebar />
    <div class="flex grow flex-1 w-full h-screen p-10 overflow-auto">
        {@render children?.()}
    </div>
</div>

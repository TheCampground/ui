<script lang="ts">
	import { Sidebar } from "@internal/sidebar/index.ts"
    import { Nav } from "@internal/nav/index.ts"

	let { children } = $props()
</script>

<Nav />
<div class="flex flex-row h-full">
    <Sidebar />
    <div class="my-14 px-5 py-5 md:py-10 w-full flex justify-center overflow-y-auto">
        <div class="w-full xl:w-[60%] flex">
            {@render children?.()}
        </div>
    </div>
</div>

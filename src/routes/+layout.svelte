<script lang="ts">
	import "../app.css"
    import "@fontsource-variable/space-grotesk"

	let { children } = $props()
</script>

<div class="p-4 flex flex-col items-center justify-center w-full lg:h-full my-0 md:my-5">
    <div class="flex flex-col gap-6 items-center justify-center max-w-[750px] w-full">
        {@render children?.()}
    </div>
</div>

<script lang="ts">
    import { Sidebar } from "@internal/sidebar/index.ts"
	import { FileX } from "@steeze-ui/phosphor-icons"
    import { Button, Empty } from "$lib/index.ts"
    import { Nav } from "@internal/nav/index.ts"
    import { page } from "$app/state"

    let error = $derived(page.error?.message?.split(":"))
</script>

<Nav />
<div class="flex flex-row h-full">
    <Sidebar />
    <div class="my-14 px-5 py-5 md:py-10 w-full flex justify-center overflow-y-auto">
        <div class="w-full xl:w-[60%] flex">
            <Empty title="{page.status} - {error?.[0] ?? error}" icon={FileX}>
                {#snippet description()}
                    <div class="flex flex-col text-center">
                        <p>{@html error?.[1] || "Looks like you've encountered an error."}</p>
                    </div>
                {/snippet}
                <Button variant="primary" href="/">Return home</Button>
            </Empty>
        </div>
    </div>
</div>

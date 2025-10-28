<script lang="ts">
	import { FileX } from "@steeze-ui/phosphor-icons"
    import { Button, Empty } from "$lib/index.ts"
    import { page } from "$app/state"
</script>

<Empty title="{page.status} - {page.error?.message || "Unknown Error"}" icon={FileX}>
    {#snippet description()}
        <div class="flex flex-col text-center">
            <p>Looks like you've encountered an error.</p>
        </div>
    {/snippet}
    <Button variant="primary" href="/">Return home</Button>
</Empty>

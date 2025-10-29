<script lang="ts">
	import { FolderSimpleStar } from "@steeze-ui/phosphor-icons"
    import { Button, Empty } from "$lib/index.ts"
</script>

<Empty title="No Projects Yet" icon={FolderSimpleStar}>
    {#snippet description()}
        <div class="flex flex-col text-center">
            <p>You haven't created any projects yet.</p>
            <p>Get started by creating your first project</p>
        </div>
    {/snippet}
    <div class="flex gap-2">
        <Button variant="primary">Create Project</Button>
        <Button variant="outline">Import Project</Button>
    </div>
</Empty>

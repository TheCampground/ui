<script lang="ts">
    import { Input } from "../../index.ts"

    let value = $state("John Doe")
</script>

<div class="flex flex-col gap-1 w-full">
    <Input bind:value placeholder="Enter your name" />
</div>

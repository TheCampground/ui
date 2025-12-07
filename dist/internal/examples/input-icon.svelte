<script lang="ts">
	import { Fingerprint, MagnifyingGlass } from "@steeze-ui/phosphor-icons"
    import { Input } from "../../index.ts"

    let value = $state("")
</script>

<div class="w-full flex flex-col gap-5">
    <Input
        bind:value
        placeholder="Start typing to search"
        icon={MagnifyingGlass}
        position="left"
    />
    <Input
        bind:value
        placeholder="API Key"
        icon={Fingerprint}
        position="right"
    />
</div>

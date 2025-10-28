<script lang="ts">
	import { Fingerprint } from "@steeze-ui/phosphor-icons"
    import { Input } from "$lib/index.ts"

    let value = $state("")
</script>

<Input
    bind:value
    placeholder="API Key"
    icon={Fingerprint}
    position="left"
/>

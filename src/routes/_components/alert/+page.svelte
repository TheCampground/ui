<script lang="ts">
    import { Alert } from '$lib/index.ts';
    import { Icon, type IconSource } from "@steeze-ui/svelte-icon"
    import { Info } from '@steeze-ui/phosphor-icons';
</script>

<Alert>
    <Icon src={Info} size="24px"/>

</Alert>

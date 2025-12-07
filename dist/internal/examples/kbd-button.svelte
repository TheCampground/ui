<script lang="ts">
    import { Kbd, Button } from "../../index.ts"
</script>

<Button variant="primary" size="small" class="gap-2">
    Open file
    <Kbd.Group>
        <Kbd.Key size="small">⌘</Kbd.Key>
        <Kbd.Key size="small">o</Kbd.Key>
    </Kbd.Group>
</Button>

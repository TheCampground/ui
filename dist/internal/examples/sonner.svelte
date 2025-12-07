<script lang="ts">
    import { Button } from "../../index.ts"
    import { toast } from "svelte-sonner"

    function showToast() {
        toast.success("Event has been created", {
            description: "Monday, January 3rd at 6:00pm"
        })
    }
</script>

<Button onclick={showToast}>Show toast</Button>

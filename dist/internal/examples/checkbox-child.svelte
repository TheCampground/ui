<script lang="ts">
    import { Checkbox } from "../../index.ts"
    let checked = $state(false)
</script>

<Checkbox bind:checked indeterminate id="terms-child">
    <div class="flex flex-col">
        <p class="text-sm">Enable email notifications</p>
        <p class="text-xs text-foreground-alt">
            Get updates about your account activity and product news.
        </p>
    </div>
</Checkbox>

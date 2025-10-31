<script lang="ts">
    let { children } = $props()
</script>

<div class="flex items-center gap-1">
    {@render children?.()}
</div>

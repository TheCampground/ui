<script lang="ts">
    let { children } = $props()
</script>

<div class="flex justify-center w-full">
    <div class="flex w-full flex-col rounded-xl border-2 overflow-hidden h-fit mb-auto">
        {@render children?.()}
    </div>
</div>

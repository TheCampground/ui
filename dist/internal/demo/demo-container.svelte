<script lang="ts">
    let { children } = $props()
</script>

<div class="flex justify-center w-full overflow-hidden! z-2">
    <div class="flex w-full flex-col rounded-xl border overflow-hidden! h-fit mb-auto z-2">
        {@render children?.()}
    </div>
</div>

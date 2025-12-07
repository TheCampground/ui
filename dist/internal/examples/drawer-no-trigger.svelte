<script lang="ts">
    import { Drawer, Button } from "../../index.ts"

	import { Heartbeat, Minus, Plus } from "@steeze-ui/phosphor-icons"
	import { Icon } from "@steeze-ui/svelte-icon"

    let calories = $state(2000)
    let open = $state(false)
</script>

<Button variant="primary" size="icon" onclick={() => open = !open}>
    <Icon src={Heartbeat} theme="bold" class="size-5" />
</Button>

<Drawer bind:open useTrigger={false}>
    <div class="flex flex-col gap-6 h-full max-w-sm p-4">
        <div class="flex flex-col">
            <p class="text-lg font-bold">Calorie Goal</p>
            <p class="text-sm text-foreground-alt">Set your daily calorie goal</p>
        </div>
        <div class="flex w-full items-center justify-between">
            <Button
                variant="outline"
                size="icon"
                class="rounded-full!"
                onclick={() => calories -= 10}
            >
                <Icon src={Minus} theme="bold" class="size-4" />
            </Button>
            <div class="flex flex-col items-center justify-center grow">
                <p class="text-7xl font-bold">{calories.toLocaleString()}</p>
                <p class="text-xs uppercase text-foreground-alt">calories/day</p>
            </div>
            <Button
                variant="outline"
                size="icon"
                class="rounded-full!"
                onclick={() => calories += 10}
            >
                <Icon src={Plus} theme="bold" class="size-4" />
            </Button>
        </div>
        <div class="flex flex-col gap-2 w-full">
            <div class="flex gap-2 items-end">
                {#each Array.from({ length: 13 }, (_, i) => i + 1) as _}
                    {@const randomValue = Math.max(100, Math.floor(Math.random() * 350))}
                    <span class="bg-brand w-6 rounded-md" style="height: {randomValue / 3}px">
                    </span>
                {/each}
            </div>
            <div class="flex flex-col w-full gap-2">
                <Button class="w-full">Submit</Button>
                <Button
                    variant="secondary"
                    class="w-full"
                    onclick={() => open = false}
                >
                    Cancel
                </Button>
            </div>
        </div>
    </div>
</Drawer>

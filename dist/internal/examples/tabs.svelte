<script lang="ts">
    import { Tabs } from "../../index.ts"

	import { AirplaneInFlight } from "@steeze-ui/phosphor-icons"
	import { Icon } from "@steeze-ui/svelte-icon"

    let value = $state("outbound")
</script>

<Tabs.Root bind:value>
    <Tabs.List>
        <Tabs.Tab value="outbound">outbound</Tabs.Tab>
        <Tabs.Tab value="inbound">inbound</Tabs.Tab>
    </Tabs.List>
    <Tabs.Content value="outbound">
        <div class="grid grid-cols-3 grid-rows-2 gap-0 p-4 pb-1">
            <div class="text-left">
                <h4 class="mb-2 text-[20px] font-semibold leading-none tracking-[-0.01em]">
                    Prague
                </h4>
                <p class="text-muted-foreground text-sm font-medium">06:05</p>
            </div>
            <div class="self-end text-center">
                <p class="text-muted-foreground text-sm font-medium">3h 30m</p>
            </div>
            <div class="text-right">
                <h4 class="mb-2 text-[20px] font-semibold leading-none tracking-[-0.01em]">
                    Malaga
                </h4>
                <p class="text-muted-foreground text-sm font-medium">06:05</p>
            </div>
            <div class="relative col-span-3">
                <hr class="border-border-input border relative top-4 h-px border-dashed" />
                <div class="bg-card absolute left-1/2 -translate-x-1/2 p-1">
                    <Icon src={AirplaneInFlight} class="text-muted-foreground size-6" />
                </div>
            </div>
        </div>
    </Tabs.Content>
    <Tabs.Content value="inbound">
        <div class="grid grid-cols-3 grid-rows-2 gap-0 p-4 pb-1">
            <div class="text-left">
                <h4 class="mb-2 text-[20px] font-semibold leading-none tracking-[-0.01em]">
                    Malaga
                </h4>
                <p class="text-muted-foreground text-sm font-medium">07:25</p>
            </div>
            <div class="self-end text-center">
                <p class="text-muted-foreground text-sm font-medium">3h 20m</p>
            </div>
            <div class="text-right">
                <h4 class="mb-2 text-[20px] font-semibold leading-none tracking-[-0.01em]">
                    Prague
                </h4>
                <p class="text-muted-foreground text-sm font-medium">10:45</p>
            </div>
            <div class="relative col-span-3">
                <hr class="border-border-input border relative top-4 h-px border-dashed" />
                <div class="bg-card absolute left-1/2 -translate-x-1/2 p-1">
                    <Icon src={AirplaneInFlight} class="text-muted-foreground size-6" />
                </div>
            </div>
        </div>
    </Tabs.Content>
</Tabs.Root>

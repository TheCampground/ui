<script lang="ts">
	import { BellSimple, CreditCard, GearSix, Moon, MoonStars, SignOut, Sun, UserCircle } from "@steeze-ui/phosphor-icons"
    import { DropdownMenu, Button } from "../../index.ts"

    let open = $state(false)
    let anchor = $state<HTMLElement>(null!)

    let options = $state({
        notifications: true,
        theme: "dark"
    })
</script>

<div bind:this={anchor}>
    <Button variant="outline" size="icon" class="p-px size-16 rounded-full!" onclick={() => open = !open}>
        <img src="/TheCampsite.png" alt="" class="rounded-full" />
    </Button>
</div>

<DropdownMenu.Root bind:open>
    <DropdownMenu.Content {anchor}>
        <DropdownMenu.Item icon={UserCircle} keybind={["⌘", "P"]}>
            Profile
        </DropdownMenu.Item>
        <DropdownMenu.Item icon={CreditCard} keybind={["⌘", "B"]}>
            Billing
        </DropdownMenu.Item>
        <DropdownMenu.Item icon={GearSix} keybind={["⌘", "S"]}>
            Settings
        </DropdownMenu.Item>
        <DropdownMenu.CheckboxItem icon={BellSimple} bind:checked={options.notifications}>
            Notifications
        </DropdownMenu.CheckboxItem>
        <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger icon={MoonStars}>Theme</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent sideOffset={4}>
                <DropdownMenu.RadioGroup bind:value={options.theme} title="Theme">
                    <DropdownMenu.RadioItem value="light" icon={Sun}>
                        Light
                    </DropdownMenu.RadioItem>
                    <DropdownMenu.RadioItem value="dark" icon={Moon}>
                        Dark
                    </DropdownMenu.RadioItem>
                </DropdownMenu.RadioGroup>
            </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Separator />
        <DropdownMenu.Item icon={SignOut} keybind={["⌘", "L"]}>
            Logout
        </DropdownMenu.Item>
    </DropdownMenu.Content>
</DropdownMenu.Root>

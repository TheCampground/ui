<script lang="ts">
	import { BellSimple, CreditCard, GearSix, Moon, MoonStars, SignOut, Sun, UserCircle } from "@steeze-ui/phosphor-icons"
    import { buttonVariants, DropdownMenu } from "../../index.ts"

    let options = $state({
        notifications: true,
        theme: "dark"
    })
</script>

<DropdownMenu.Root open={false}>
    <DropdownMenu.Trigger class={buttonVariants({ variant: "primary" })}>
        Open Menu
    </DropdownMenu.Trigger>
    <DropdownMenu.Content sideOffset={4}>
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

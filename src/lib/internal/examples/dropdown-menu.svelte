<script lang="ts">
	import { BellSimple, CreditCard, GearSix, Moon, MoonStars, SignOut, Sun, UserCircle } from "@steeze-ui/phosphor-icons"
    import { DropdownMenu } from "$lib/index.ts"

    let notifications = $state(true)
    let theme = $state("dark")
</script>

<DropdownMenu.Root open={false} buttonText="Open" buttonVariant="default" buttonSize="small">
    <DropdownMenu.Content sideOffset={4}>
        <DropdownMenu.Item icon={UserCircle} keybind={["⌘", "P"]}>Profile</DropdownMenu.Item>
        <DropdownMenu.Item icon={CreditCard} keybind={["⌘", "B"]}>Billing</DropdownMenu.Item>
        <DropdownMenu.Item icon={GearSix} keybind={["⌘", "S"]}>Settings</DropdownMenu.Item>
        <DropdownMenu.CheckboxItem bind:checked={notifications} icon={BellSimple}>
            Notifications
        </DropdownMenu.CheckboxItem>
        <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger icon={MoonStars}>Theme</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent sideOffset={4}>
                <DropdownMenu.RadioGroup title="Theme" bind:value={theme}>
                    <DropdownMenu.RadioItem value="light" icon={Sun}>Light</DropdownMenu.RadioItem>
                    <DropdownMenu.RadioItem value="dark" icon={Moon}>Dark</DropdownMenu.RadioItem>
                </DropdownMenu.RadioGroup>
            </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Separator />
        <DropdownMenu.Item icon={SignOut}>Logout</DropdownMenu.Item>
    </DropdownMenu.Content>
</DropdownMenu.Root>

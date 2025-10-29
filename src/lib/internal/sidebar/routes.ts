import { Compass, Sticker } from "@steeze-ui/phosphor-icons"
import type { IconSource } from "@steeze-ui/svelte-icon"

export type RouteItem = {
    name: string
    path: string
    new?: boolean
    icon?: IconSource
}
export type Route = {
    title: string
    items: RouteItem[]
}

export const docs: Route = {
    title: "Docs",
    items: [
        {
            name: "Introduction",
            path: "/docs/introduction",
            icon: Sticker
        },
        {
            name: "Getting Started",
            path: "/docs/getting-started",
            icon: Compass
        }
    ]
}

export const components: Route = {
        title: "Components",
        items: [
            {
                name: "Accordion",
                path: "/components/accordion",
            },
            {
                name: "Alert Dialog",
                path: "/components/alert-dialog"
            },
            {
                name: "Button",
                path: "/components/button"
            },
            {
                name: "Card",
                path: "/components/card"
            },
            {
                name: "Checkbox",
                path: "/components/checkbox"
            },
            {
                name: "Dialog",
                path: "/components/dialog"
            },
            {
                name: "Dropdown Menu",
                path: "/components/dropdown-menu"
            },
            {
                name: "Empty",
                path: "/components/empty",
                new: true
            },
            {
                name: "Input",
                path: "/components/input"
            },
            {
                name: "Label",
                path: "/components/label"
            },
            {
                name: "Popover",
                path: "/components/popover"
            },
            {
                name: "Progress",
                path: "/components/progress"
            },
            {
                name: "Radio Group",
                path: "/components/radio-group"
            },
            {
                name: "Select",
                path: "/components/select"
            },
            {
                name: "Separator",
                path: "/components/separator"
            },
            {
                name: "Slider",
                path: "/components/slider"
            },
            {
                name: "Switch",
                path: "/components/switch"
            },
            {
                name: "Tabs",
                path: "/components/tabs"
            },
            {
                name: "Toggle Group",
                path: "/components/toggle-group"
            },
            {
                name: "Toolbar",
                path: "/components/toolbar"
            },
            {
                name: "Tooltip",
                path: "/components/tooltip"
            },
        ]
}

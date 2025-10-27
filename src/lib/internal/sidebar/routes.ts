import { Compass, Sticker } from "@steeze-ui/phosphor-icons"
import type { IconSource } from "@steeze-ui/svelte-icon"

export type RouteItem = {
    name: string
    path: string
    icon?: IconSource
}
export type Route = {
    title: string
    items: RouteItem[]
}

export const docs = {
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
} satisfies Route

export const components = {
        title: "Components",
        items: [
            {
                name: "Accordion",
                path: "/components/accordion"
            },
            {
                name: "Button",
                path: "/components/button"
            },
            {
                name: "Alert Dialog",
                path: "/components/alert-dialog"
            },
        ]
} satisfies Route

import { Compass, Sticker } from "@steeze-ui/phosphor-icons"
import type { IconSource } from "@steeze-ui/svelte-icon"

type RouteItem = {
    name: string
    path: string
    icon?: IconSource | null
}

type RouteAsSeparator = {
    separator: true
    title?: never
    items?: never
}
type RouteAsPage = {
    separator?: never
    title: string
    items: RouteItem[]
}

type Routes = (RouteAsSeparator | RouteAsPage)[]

export const routes = [
    {
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
    },
    {
        separator: true
    },
    {
        title: "Components",
        items: [
            {
                name: "Accordion",
                path: "/components/accordion",
                icon: null
            },
            {
                name: "Button",
                path: "/components/button",
                icon: null
            }
        ]
    },
] satisfies Routes

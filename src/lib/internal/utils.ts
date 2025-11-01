import { routes, type RoutesFlatMap } from "@internal/routes/index.ts"

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function getRouteIndex(pathname: string) {
    return routes.findIndex(r => r.path === pathname)
}

export function getNextRoute(pathname: string) {
    const i = getRouteIndex(pathname)
    return routes[i + 1] ?? null
}

export function getPreviousRoute(pathname: string) {
    const i = getRouteIndex(pathname)
    return routes[i - 1] ?? null
}

export function getCurrentRoute(pathname: string) {
    return routes[getRouteIndex(pathname)] ?? null
}

export function groupRoutesBySection(routes: any[]): RoutesFlatMap[] {
    const map = new Map()

    for (const item of routes) {
        if (!map.has(item.section)) {
            map.set(item.section, {
                title: capitalize(item.section),
                items: []
            })
        }
        map.get(item.section).items.push(item)
    }

    return Array.from(map.values())
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

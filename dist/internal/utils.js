import { routes } from "./routes/index.ts";
export const delay = (ms) => new Promise(res => setTimeout(res, ms));
export function getRouteIndex(pathname) {
    return routes.findIndex(r => r.path === pathname);
}
export function getNextRoute(pathname) {
    const i = getRouteIndex(pathname);
    return routes[i + 1] ?? null;
}
export function getPreviousRoute(pathname) {
    const i = getRouteIndex(pathname);
    return routes[i - 1] ?? null;
}
export function getCurrentRoute(pathname) {
    return routes[getRouteIndex(pathname)] ?? null;
}
export function groupRoutesBySection(routes) {
    const map = new Map();
    for (const item of routes) {
        if (!map.has(item.section)) {
            map.set(item.section, {
                title: capitalize(item.section),
                items: []
            });
        }
        map.get(item.section).items.push(item);
    }
    return Array.from(map.values());
}
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

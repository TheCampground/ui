import { type RoutesFlatMap } from "./routes/index.ts";
export declare const delay: (ms: number) => Promise<unknown>;
export declare function getRouteIndex(pathname: string): number;
export declare function getNextRoute(pathname: string): RoutesFlatMap;
export declare function getPreviousRoute(pathname: string): RoutesFlatMap;
export declare function getCurrentRoute(pathname: string): RoutesFlatMap;
export declare function groupRoutesBySection(routes: any[]): RoutesFlatMap[];

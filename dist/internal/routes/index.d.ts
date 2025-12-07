import { type IconSource } from "@steeze-ui/phosphor-icons";
export type DocsRouteItem = {
    name: string;
    description: string;
    id: string;
    path?: string;
    new?: boolean;
    icon?: IconSource;
};
export type DocsRoute = {
    title: "Docs";
    items: DocsRouteItem[];
};
export declare const docs: DocsRoute;
type BaseProp = {
    property: string;
    description: string;
    default?: string;
    typeDef?: string;
    required?: boolean;
};
type PropAsFunction = {
    property: string;
    bindable?: never;
    type: "function";
    callback: string;
};
type PropOther = {
    property: string;
    bindable?: boolean;
    type: Exclude<any, "function">;
    callback?: never;
};
export type Prop = (BaseProp & (PropAsFunction | PropOther));
export type Example = {
    file: string;
    filename?: string;
    lang?: string;
    title?: string;
    description?: string;
    code?: boolean;
};
type ComponentRouteItem = (DocsRouteItem & {
    id: string;
    path?: string;
    description: string;
    details?: string;
    examples: Example[];
    props: ComponentProp[];
});
type ComponentProp = {
    component: string;
    description: string;
    items: Prop[];
};
export type ComponentsRoute = {
    title: "Components";
    items: ComponentRouteItem[];
};
export declare const components: ComponentsRoute;
type BaseRoute = {
    id: string;
    name: string;
    description: string;
    path: string;
    title: string;
    items: ComponentRouteItem[] | DocsRouteItem[];
    section: "Docs" | "Components";
};
export type FlatDocs = BaseRoute & DocsRouteItem;
export type FlatComponents = BaseRoute & ComponentRouteItem & ComponentProp[];
export type RoutesFlatMap = FlatDocs | FlatComponents;
export declare const routes: RoutesFlatMap[];
export {};

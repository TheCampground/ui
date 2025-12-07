import type { Prop } from "../routes/index.ts";
type Props = {
    component: string;
    description?: string;
    items: Prop[];
};
declare const Props: import("svelte").Component<Props, {}, "">;
export default Props;

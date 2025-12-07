import type { Snippet } from "svelte";
type Props = {
    class?: string;
    media?: string;
    children: Snippet;
};
declare const Card: import("svelte").Component<Props, {}, "">;
type Card = ReturnType<typeof Card>;
export default Card;

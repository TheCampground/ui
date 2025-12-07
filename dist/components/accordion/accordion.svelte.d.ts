import type { Snippet } from "svelte";
import { Accordion } from "bits-ui";
type AccordionProps = {
    value: string;
    title: string;
    children: Snippet;
    class?: string;
};
declare const Accordion: import("svelte").Component<AccordionProps, {}, "">;
type Accordion = ReturnType<typeof Accordion>;
export default Accordion;

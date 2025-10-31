import { default as Root } from "./radio-group-root.svelte"
import { default as Item } from "./radio-group-item.svelte"

export const RadioGroup = {
    Root,
    Item,
} satisfies {
    Root: typeof Root
    Item: typeof Item
}

export type { RadioGroupItemProps as ItemProps } from "./types.ts"

export default RadioGroup

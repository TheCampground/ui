import { Compass, Sticker, type IconSource } from "@steeze-ui/phosphor-icons"

import { progressVariants } from "@core/progress/index.ts"
import { buttonVariants } from "@core/button/index.ts"

export type RouteItem = {
    name: string
    path: string
    new?: boolean
    icon?: IconSource
}
export type Route = {
    title: string
    items: RouteItem[]
}

export const docs: Route = {
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
}

// export const components: Route = {
//         title: "Components",
//         items: [
//             {
//                 name: "Accordion",
//                 path: "/components/accordion",
//             },
//             {
//                 name: "Alert Dialog",
//                 path: "/components/alert-dialog"
//             },
//             {
//                 name: "Button",
//                 path: "/components/button"
//             },
//             {
//                 name: "Card",
//                 path: "/components/card"
//             },
//             {
//                 name: "Checkbox",
//                 path: "/components/checkbox"
//             },
//             {
//                 name: "Dialog",
//                 path: "/components/dialog"
//             },
//             {
//                 name: "Dropdown Menu",
//                 path: "/components/dropdown-menu"
//             },
//             {
//                 name: "Empty",
//                 path: "/components/empty",
//                 new: true
//             },
//             {
//                 name: "Input",
//                 path: "/components/input"
//             },
//             {
//                 name: "Label",
//                 path: "/components/label"
//             },
//             {
//                 name: "Popover",
//                 path: "/components/popover"
//             },
//             {
//                 name: "Progress",
//                 path: "/components/progress"
//             },
//             {
//                 name: "Radio Group",
//                 path: "/components/radio-group"
//             },
//             {
//                 name: "Select",
//                 path: "/components/select"
//             },
//             {
//                 name: "Separator",
//                 path: "/components/separator"
//             },
//             {
//                 name: "Slider",
//                 path: "/components/slider"
//             },
//             {
//                 name: "Switch",
//                 path: "/components/switch"
//             },
//             {
//                 name: "Tabs",
//                 path: "/components/tabs"
//             },
//             {
//                 name: "Toggle Group",
//                 path: "/components/toggle-group"
//             },
//             {
//                 name: "Toolbar",
//                 path: "/components/toolbar"
//             },
//             {
//                 name: "Tooltip",
//                 path: "/components/tooltip"
//             },
//         ]
// }

type BaseProp = {
    property: string
    description: string
    default?: string
    typeDef?: string
}

type PropAsFunction = {
    property: string
    bindable?: never
    type: "function"
    callback: string
}

type PropOther = {
    property: string
    bindable?: boolean
    type: Exclude<any, "function">
    callback?: never
}

export type Prop = (BaseProp & (PropAsFunction | PropOther))
export type Example = {
    file: string
    filename?: string
    lang?: string
    title?: string
    description?: string
}

export type TestRoute = {
    title: string
    items: (Omit<RouteItem, "path"> & {
        id: string
        description: string
        examples: Example[]
        props: {
            component: string
            description: string
            items: Prop[]
        }[]
    })[]
}

const ButtonVariants = `type ButtonVariant = ${Object.keys(buttonVariants.variants.variant).map(v => `"${v}"`).join(" | ")}`
const ButtonSizes = `type ButtonSize = ${Object.keys(buttonVariants.variants.size).map(v => `"${v}"`).join(" | ")}`
const ProgressSizes = `type ProgressSize = ${Object.keys(progressVariants.variants.size).map(v => `"${v}"`).join(" | ")}`

export const components: TestRoute = {
    title: "Components",
    items: [
        {
            id: "accordion",
            name: "Accordion",
            description: "Organizes content into collapsible sections.",
            examples: [{ file: "accordion" }],
            props: [
                {
                    component: "Accordion.Root",
                    description: "The root component.",
                    items: [
                        {
                            property: "type",
                            type: "AccordionType",
                            typeDef: "type AccordionType = \"single\" | \"multiple\"",
                            default: "single",
                            description: "Determines how many accordion items can be open at the same time"
                        }
                    ]
                },
                {
                    component: "Accordion.Item",
                    description: "The accordion item.",
                    items: [
                        {
                            property: "title",
                            type: "string",
                            default: "",
                            description: "The title of the accordion item"
                        },
                        {
                            property: "value",
                            type: "string",
                            default: "Random ID",
                            description: "The value of the accordion item. Used to identify if the item is open or closed"
                        },
                        {
                            property: "children",
                            type: "Snippet",
                            default: "",
                            description: "The accordion item content when expanded"
                        }
                    ]
                }
            ]
        },
        {
            id: "alert-dialog",
            name: "Alert Dialog",
            description: "A modal window presenting content or seeking user input without navigating away from the current context.",
            examples: [
                { file: "alert-dialog-trigger" },
                {
                    file: "alert-dialog-no-trigger",
                    title: "Trigger",
                    description: "If you don't want to use a default trigger, you can optionally pass the prop <code>useTrigger={false}</code> to the Popover component, then handle the state with your own component using <code>bind:open</code>."
                }
            ],
            props: [
                {
                    component: "AlertDialog",
                    description: "The component used to set and manage the state of the alert dialog.",
                    items: [
                        {
                            property: "open",
                            bindable: true,
                            type: "boolean",
                            default: "false",
                            description: "The state of the alert dialog."
                        },
                        {
                            property: "useTrigger",
                            type: "boolean",
                            default: "false",
                            description: "Whether or not to use the default trigger."
                        },
                        {
                            property: "buttonText",
                            type: "string",
                            default: "",
                            description: "The text for the default trigger"
                        },
                        {
                            property: "buttonVariant",
                            type: "ButtonVariant",
                            typeDef: ButtonVariants,
                            default: "primary",
                            description: "The variant of the default trigger"
                        },
                        {
                            property: "buttonSize",
                            type: "ButtonSize",
                            typeDef: ButtonSizes,
                            default: "primary",
                            description: "The size of the default trigger"
                        },
                        {
                            property: "title",
                            type: "Snippet",
                            default: "",
                            description: "The title snippet to render. This is placed inside the AlertDialog as a child."
                        },
                        {
                            property: "description",
                            type: "Snippet",
                            default: "",
                            description: "The description snippet to render. This is placed inside the AlertDialog as a child."
                        },
                    ]
                }
            ]
        },
        {
            id: "button",
            name: "Button",
            description: "A custom button components with multiple variations and sizes",
            examples: [{ file: "button" }],
            props: [
                {
                    component: "Button",
                    description: "The button component.",
                    items: [
                        {
                            property: "variant",
                            type: "ButtonVariant",
                            typeDef: ButtonVariants,
                            default: "default",
                            description: "The variant of the default trigger"
                        },
                        {
                            property: "size",
                            type: "ButtonSize",
                            typeDef: ButtonSizes,
                            default: "default",
                            description: "The size of the default trigger"
                        },
                        {
                            property: "href",
                            type: "string",
                            default: "",
                            description: "Converts the button to an anchor tag when passed"
                        },
                        {
                            property: "disabled",
                            type: "boolean",
                            default: "false",
                            description: "Whether or not the button is disabled"
                        },
                        {
                            property: "children",
                            type: "Snippet",
                            default: "",
                            description: "The child content to render"
                        },
                    ]
                }
            ]
        },
        {
            id: "card",
            name: "Card",
            description: "Displays a themed container with optional banner image.",
            examples: [
                { file: "card" },
                {
                    file: "card-media",
                    title: "Media",
                    description: "If you want to have a banner image beautifully placed in the card, you can pass an image url in the <code>media</code> property."
                }
            ],
            props: [
                {
                    component: "Card",
                    description: "The card component.",
                    items: [
                        {
                            property: "media",
                            type: "string",
                            default: "",
                            description: "Optional media banner in the card header"
                        },
                        {
                            property: "children",
                            bindable: true,
                            type: "boolean",
                            default: "false",
                            description: "The content of the card."
                        },
                        {
                            property: "class",
                            type: "string",
                            default: "",
                            description: "Additional classes for the card component"
                        }
                    ]
                }
            ]
        },
        {
            id: "checkbox",
            name: "Checkbox",
            description: "Enables users to select or deselect options with support for indeterminate states",
            examples: [
                { file: "checkbox" },
                {
                    file: "checkbox-child",
                    title: "Child",
                    description: "Alternatively, you can provide the label as a child component of the Checkbox, in case you need more complex styling."
                }
            ],
            props: [
                {
                    component: "Checkbox",
                    description: "The checkbox component.",
                    items: [
                        {
                            property: "indeterminate",
                            type: "boolean",
                            default: "false",
                            description: "Whether or not the checkbox is in an indeterminate state"
                        },
                        {
                            property: "checked",
                            bindable: true,
                            type: "boolean",
                            default: "false",
                            description: "Whether or not the checkbox is checked"
                        },
                        {
                            property: "disabled",
                            type: "boolean",
                            default: "false",
                            description: "Whether or not the checkbox is disabled"
                        },
                        {
                            property: "id",
                            type: "string",
                            default: "Random ID",
                            description: "The id of the checkbox for the label"
                        },
                        {
                            property: "label",
                            type: "string",
                            default: "false",
                            description: "The content of the label as a prop"
                        },
                        {
                            property: "children",
                            type: "Snippet",
                            default: "",
                            description: "The content of the label as a child"
                        },
                    ]
                }
            ]
        },
        {
            id: "dialog",
            name: "Dialog",
            description: "A modal window for displaying content or requesting user input.",
            examples: [
                { file: "dialog-trigger" },
                {
                    file: "dialog-no-trigger",
                    title: "Trigger",
                    description: "If you don't want to use a default trigger, you can optionally pass the prop <code>useTrigger={false}</code> to the Popover component, then handle the state with your own component using <code>bind:open</code>."
                }
            ],
            props: [
                {
                    component: "Dialog",
                    description: "The component used to set and manage the state of the dialog.",
                    items: [
                        {
                            property: "open",
                            bindable: true,
                            type: "boolean",
                            default: "false",
                            description: "The state of the alert dialog."
                        },
                        {
                            property: "useTrigger",
                            type: "boolean",
                            default: "false",
                            description: "Whether or not to use the default trigger."
                        },
                        {
                            property: "buttonText",
                            type: "string",
                            default: "",
                            description: "The text for the default trigger"
                        },
                        {
                            property: "buttonVariant",
                            type: "ButtonVariant",
                            typeDef: ButtonVariants,
                            default: "primary",
                            description: "The variant of the default trigger"
                        },
                        {
                            property: "buttonSize",
                            type: "ButtonSize",
                            typeDef: ButtonSizes,
                            default: "primary",
                            description: "The size of the default trigger"
                        },
                        {
                            property: "title",
                            type: "Snippet",
                            default: "",
                            description: "The title snippet to render. This is placed inside the AlertDialog as a child."
                        },
                        {
                            property: "description",
                            type: "Snippet",
                            default: "",
                            description: "The description snippet to render. This is placed inside the AlertDialog as a child."
                        },
                    ]
                }
            ]
        },
        {
            id: "empty",
            name: "Empty",
            description: "Display an empty state",
            new: true,
            examples: [
                { file: "empty" }
            ],
            props: [
                {
                    component: "Empty",
                    description: "The empty component",
                    items: [
                        {
                            property: "title",
                            type: "string",
                            default: "",
                            description: "The title of the empty state"
                        },
                        {
                            property: "icon",
                            type: "IconSource",
                            default: "FolderSimpleStar",
                            description: "The Icon of the empty state"
                        },
                        {
                            property: "description",
                            type: "Snippet",
                            default: "",
                            description: "The description snippet"
                        },
                        {
                            property: "children",
                            type: "Snippet",
                            default: "",
                            description: "The content of the empty state"
                        },
                    ]
                }
            ]
        },
        {
            id: "input",
            name: "Input",
            description: "Displays a form input field or a component that looks like an input field.",
            examples: [
                { file: "input" },
                { file: "input-icon" }
            ],
            props: [
                {
                    component: "Input",
                    description: "The input component",
                    items: [
                        {
                            property: "value",
                            type: "string",
                            bindable: true,
                            default: "",
                            description: "The value of the input"
                        },
                        {
                            property: "placeholder",
                            type: "string",
                            default: "",
                            description: "The placeholder of the input"
                        },
                        {
                            property: "type",
                            type: "InputType",
                            typeDef: "type InputType = \"text\" | \"file\" | \"number\" | \"email\" | \"password\" | \"search\" | \"tel\" | \"url\" | \"week\"",
                            default: "text",
                            description: "The type of input"
                        },
                        {
                            property: "icon",
                            type: "IconSource",
                            default: "",
                            description: "The Icon of input"
                        },
                        {
                            property: "position",
                            type: "IconPosition",
                            typeDef: "type IconPosition = \"left\" | \"right\"",
                            default: "left",
                            description: "The position of the icon"
                        },
                    ]
                }
            ]
        },
        {
            id: "label",
            name: "Label",
            description: "Identifies or describes associated UI elements.",
            examples: [
                { file: "label" }
            ],
            props: [
                {
                    component: "Label",
                    description: "The label component",
                    items: [
                        {
                            property: "for",
                            type: "string",
                            default: "Random ID",
                            description: "The id of the input that the label is associated with"
                        },
                        {
                            property: "children",
                            type: "Snippet",
                            default: "",
                            description: "The content of the label"
                        }
                    ]
                }
            ]
        },
        {
            id: "popover",
            name: "Popover",
            description: "Displays rich content in a floating panel anchored to a trigger element.",
            examples: [
                { file: "popover-trigger" },
                {
                    file: "popover-no-trigger",
                    title: "Trigger",
                    description: "If you don't want to use a default trigger, you can optionally pass the prop <code>useTrigger={false}</code> to the Popover component, then handle the state with your own component using <code>bind:open</code>.<br />You will need to pass the <code>anchor</code> prop as a <code>HTMLElement</code> to the Popover so it knows where to position itself."
                }
            ],
            props: [
                {
                    component: "Popover",
                    description: "The component used to set and manage the state of the popover.",
                    items: [
                        {
                            property: "open",
                            bindable: true,
                            type: "boolean",
                            default: "false",
                            description: "The state of the popover."
                        },
                        {
                            property: "useTrigger",
                            type: "boolean",
                            default: "false",
                            description: "Whether or not to use the default trigger."
                        },
                        {
                            property: "anchor",
                            type: "HTMLElement",
                            default: "null",
                            description: "The custom anchor element that triggers the Popover"
                        },
                        {
                            property: "buttonText",
                            type: "string | IconSource",
                            default: "",
                            description: "The text or icon for the default trigger"
                        },
                        {
                            property: "buttonVariant",
                            type: "ButtonVariant",
                            typeDef: ButtonVariants,
                            default: "primary",
                            description: "The variant of the default trigger"
                        },
                        {
                            property: "buttonSize",
                            type: "ButtonSize",
                            typeDef: ButtonSizes,
                            default: "primary",
                            description: "The size of the default trigger"
                        },
                        {
                            property: "children",
                            type: "Snippet",
                            default: "",
                            description: "The content to render inside the Popover"
                        },
                    ]
                }
            ]
        },
        {
            id: "progress",
            name: "Progress",
            description: "Shows the completion status of a task.",
            examples: [
                { file: "progress" }
            ],
            props: [
                {
                    component: "Progress",
                    description: "The progress component.",
                    items: [
                        {
                            property: "label",
                            type: "string",
                            default: "",
                            description: "The label of the progress bar"
                        },
                        {
                            property: "size",
                            type: "ProgressSize",
                            typeDef: ProgressSizes,
                            default: "default",
                            description: "The size of the progress bar"
                        },
                        {
                            property: "showProgress",
                            type: "boolean",
                            default: "true",
                            description: "Whether or not to display the current progress"
                        },
                        {
                            property: "value",
                            type: "number",
                            default: "",
                            description: "The current value of the progress bar"
                        }
                    ]
                }
            ]
        },
        {
            id: "separator",
            name: "Separator",
            description: "Visually separates content or UI elements.",
            examples: [
                { file: "separator" }
            ],
            props: [
                {
                    component: "Separator",
                    description: "The separator component.",
                    items: [
                        {
                            property: "orientation",
                            type: "Orientation",
                            typeDef: "type Orientation = \"horizontal\" | \"vertical\"",
                            default: "horizontal",
                            description: "The orientation of the separator"
                        },
                        {
                            property: "hidden",
                            type: "boolean",
                            default: "false",
                            description: "Whether to hide the visible line or not"
                        }
                    ]
                }
            ]
        },
    ]
}

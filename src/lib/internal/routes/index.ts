import { Compass, PaintRoller, Sticker, type IconSource } from "@steeze-ui/phosphor-icons"

import { progressVariants } from "@core/progress/index.ts"
import { buttonVariants } from "@core/button/index.ts"
import { keyboardVariants } from "@core/kbd/index.ts"
import { noiseVariants } from "@core/noise/index.ts"
import { alertVariants } from "@core/alert/alert.svelte"

export type DocsRouteItem = {
    name: string
    description: string
    id: string
    path?: string
    new?: boolean
    icon?: IconSource
}
export type DocsRoute = {
    title: "Docs"
    items: DocsRouteItem[]
}

export const docs: DocsRoute = {
    title: "Docs",
    items: [
        {
            name: "Introduction",
            description: "A collection of themed UI components.",
            id: "introduction",
            icon: Sticker
        },
        {
            name: "Getting Started",
            description: "Learn how to get started using <code>campground/ui</code> in your app",
            id: "getting-started",
            icon: Compass
        },
        {
            name: "Styling",
            description: "The base styles needed to adopt <code>campground/ui</code> styling in your project. Useful if you are creating project specific components.",
            id: "styling",
            icon: PaintRoller
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
    required?: boolean
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
    code?: boolean
}

type ComponentRouteItem = (DocsRouteItem & {
    id: string
    path?: string
    description: string
    examples: Example[]
    props: ComponentProp[]
})
type ComponentProp = {
    component: string
    description: string
    items: Prop[]
}

export type ComponentsRoute = {
    title: "Components"
    items: ComponentRouteItem[]
}

const ButtonVariants = Object.keys(buttonVariants.variants.variant).map(v => `"${v}"`).join(" | ")
const ButtonSizes = Object.keys(buttonVariants.variants.size).map(v => `"${v}"`).join(" | ")
const ProgressSizes = Object.keys(progressVariants.variants.size).map(v => `"${v}"`).join(" | ")
const KeyboardVariants = Object.keys(keyboardVariants.variants.variant).map(v => `"${v}"`).join(" | ")
const KeyboardSizes = Object.keys(keyboardVariants.variants.size).map(v => `"${v}"`).join(" | ")
const NoiseIntensity = Object.keys(noiseVariants.variants.intensity).map(v => `"${v}"`).join(" | ")
const AlertVariants = Object.keys(alertVariants.variants.variant).map(v => `"${v}"`).join(" | ")

export const components: ComponentsRoute = {
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
                            type: "enum",
                            typeDef: "\"single\" | \"multiple\"",
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
                            type: "enum",
                            typeDef: ButtonVariants,
                            default: "primary",
                            description: "The variant of the default trigger"
                        },
                        {
                            property: "buttonSize",
                            type: "enum",
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
            id: "alert",
            name: "Alert",
            description: "Displays a callout for user attention.",
            examples: [
                { file: "alert" },
                { file: "alert-variants", title: "Variants", description: "The different alert variants", code: false }
            ],
            props: [
                {
                    component: "Alert",
                    description: "The alert component",
                    items: [
                        {
                            property: "icon",
                            type: "IconSource",
                            default: "",
                            description: "The icon inside of the alert"
                        },
                        {
                            property: "variant",
                            type: "enum",
                            typeDef: AlertVariants,
                            default: "default",
                            description: "The variant of the alert"
                        },
                        {
                            property: "children",
                            type: "Snippet",
                            default: "",
                            description: "The content of the alert"
                        }
                    ]
                }
            ]
        },
        {
            id: "button",
            name: "Button",
            description: "A custom button components with multiple variations and sizes",
            examples: [
                { file: "button" },
                { file: "button-variants", title: "Variants", description: "The different button variants", code: false },
                { file: "button-sizes", title: "Sizes", description: "The different button sizes", code: false },
            ],
            props: [
                {
                    component: "Button",
                    description: "The button component.",
                    items: [
                        {
                            property: "variant",
                            type: "enum",
                            typeDef: ButtonVariants,
                            default: "default",
                            description: "The variant of the default trigger"
                        },
                        {
                            property: "size",
                            type: "enum",
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
                            default: "",
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
                            type: "enum",
                            typeDef: ButtonVariants,
                            default: "primary",
                            description: "The variant of the default trigger"
                        },
                        {
                            property: "buttonSize",
                            type: "enum",
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
                { file: "input-icon", title: "Icon", description: "Display an icon in the input field either on the left or right" }
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
                            type: "enum",
                            typeDef: "\"text\" | \"file\" | \"number\" | \"email\" | \"password\" | \"search\" | \"tel\" | \"url\" | \"week\"",
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
                            typeDef: "\"left\" | \"right\"",
                            default: "left",
                            description: "The position of the icon"
                        },
                    ]
                }
            ]
        },
        {
            id: "kbd",
            name: "Kbd",
            description: "Displays a keyboard key.",
            examples: [
                { file: "kbd" },
                { file: "kbd-button", title: "Button", description: "Example of a keyboard component inside a button" },
                { file: "kbd-variants", title: "Variants", description: "The different Kbd variants", code: false },
                { file: "kbd-sizes", title: "Sizes", description: "The different Kbd sizes", code: false }
            ],
            props: [
                {
                    component: "Kbd.Group",
                    description: "A helper to group keyboard keys together",
                    items: [
                        {
                            property: "children",
                            type: "Snippet",
                            default: "",
                            description: "The keys to render as children"
                        }
                    ]
                },
                {
                    component: "Kbd.Key",
                    description: "The keyboard component",
                    items: [
                        {
                            property: "variant",
                            type: "enum",
                            typeDef: KeyboardVariants,
                            default: "default",
                            description: "The variant of keyboard key"
                        },
                        {
                            property: "size",
                            type: "enum",
                            typeDef: KeyboardSizes,
                            default: "default",
                            description: "The size of the keyboard key"
                        },
                        {
                            property: "hideOnMobile",
                            type: "boolean",
                            default: "true",
                            description: "Whether the keyboard key should be hidden on mobile"
                        },
                        {
                            property: "children",
                            type: "Snippet",
                            default: "",
                            description: "The content/key to render as a child"
                        }
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
            id: "noise",
            name: "Noise",
            description: "A static noise / film grain overlay to add depth to the page",
            examples: [
                { file: "noise", filename: "+layout.svelte" },
            ],
            props: [
                {
                    component: "Noise",
                    description: "The noise component",
                    items: [
                        {
                            property: "intensity",
                            type: "enum",
                            typeDef: NoiseIntensity,
                            default: "low",
                            description: "The intensity of the noise effect"
                        },
                        {
                            property: "class",
                            type: "string",
                            default: "",
                            description: "Additional tailwind classes for the noise component"
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
                            type: "enum",
                            typeDef: ButtonVariants,
                            default: "primary",
                            description: "The variant of the default trigger"
                        },
                        {
                            property: "buttonSize",
                            type: "enum",
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
                { file: "progress" },
                { file: "progress-sizes", title: "Sizes", description: "The different progress sizes", code: false },
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
                            type: "enum",
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
            id: "radio-group",
            name: "Radio Group",
            description: "Groups multiple radio items under a common name for form submission.",
            examples: [
                { file: "radio-group" },
                { file: "radio-group-props", title: "Props", description: "Optionally you can provide the radio group items as a prop instead of via <code>RadioGroup.Item</code> children" }
            ],
            props: [
                {
                    component: "RadioGroup.Root",
                    description: "The radio group component used to group radio items under a common name for form submission.",
                    items: [
                        {
                            property: "value",
                            bindable: true,
                            type: "string",
                            default: "",
                            description: "The value of the currently selected radio item. You can bind to this value to control the radio group's value from outside the component."
                        },
                        {
                            property: "items",
                            type: "Array",
                            typeDef: `{
    value: string
    label: string
    disabled?: boolean
}[]`,
                            default: "",
                            description: "The list of items if you are using the <code>items</code> prop instead of passing <code>RadioGroup.Item</code> children."
                        },
                        {
                            property: "onValueChange",
                            type: "function",
                            typeDef: "(value: string) => void",
                            default: "",
                            description: "A callback that is fired when the radio group's value changes."
                        },
                        {
                            property: "disabled",
                            type: "boolean",
                            default: "false",
                            description: "Whether or not the radio group is disabled. This prevents the user from interacting with it."
                        },
                        {
                            property: "required",
                            type: "boolean",
                            default: "false",
                            description: "Whether or not the radio group is required."
                        },
                        {
                            property: "name",
                            type: "string",
                            default: "",
                            description: "The name of the radio group used in form submission. If provided, a hidden input element will be rendered to submit the value of the radio group."
                        },
                        {
                            property: "loop",
                            type: "boolean",
                            default: "true",
                            description: "Whether or not the tabs are disabled."
                        },
                        {
                            property: "orientation",
                            type: "enum",
                            typeDef: "\"horizontal\" | \"vertical\"",
                            default: "vertical",
                            description: "The orientation of the radio group. This will determine how keyboard navigation will work within the component."
                        },
                        {
                            property: "readonly",
                            type: "boolean",
                            default: "false",
                            description: "Whether or not the radio group is readonly. When readonly, users can focus and navigate through items but cannot change the value."
                        },
                        {
                            property: "children",
                            type: "Snippet",
                            default: "",
                            description: "The content of the label as a child"
                        },
                    ]
                },
                {
                    component: "RadioGroup.Item",
                    description: "An radio item, which must be a child of the <code>RadioGroup.Root</code> component.",
                    items: [
                        {
                            property: "value",
                            required: true,
                            type: "string",
                            default: "",
                            description: "The value of the radio item. This should be unique for each radio item in the group."
                        },
                        {
                            property: "disabled",
                            type: "boolean",
                            default: "false",
                            description: "Whether the radio item is disabled."
                        },
                        {
                            property: "children",
                            type: "Snippet",
                            default: "",
                            description: "The children content to render"
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
                            type: "enum",
                            typeDef: "\"horizontal\" | \"vertical\"",
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
        {
            id: "slider",
            name: "Slider",
            description: "Visually separates content or UI elements.",
            examples: [
                { file: "slider-single" },
                { file: "slider-multiple", title: "Multiple", description: "A slider that allows multiple thumbs/values to be selected" },
                { file: "slider-ticks", title: "Ticks", description: "Visible ticks on the slider track defined by the <code>step</code> value" }
            ],
            props: [
                {
                    component: "Slider",
                    description: "The slider component.",
                    items: [
                        {
                            property: "type",
                            type: "enum",
                            required: true,
                            typeDef: "\"single\" | \"multiple\"",
                            default: "",
                            description: "The type of the slider. If set to <span class=\"text-brand\">'multiple'</span>, the slider will allow multiple thumbs and the <code>value</code> will be an array of numbers."
                        },
                        {
                            property: "value",
                            type: "number",
                            bindable: true,
                            default: "0",
                            description: "The current value of the slider. If the <code>type</code> is set to <span class=\"text-brand\">'multiple'</span>, this should be an array of numbers and will default to an empty array."
                        },
                        {
                            property: "ticks",
                            type: "boolean",
                            default: "false",
                            description: "Whether to display ticks on the slider, controlled by the <code>step</code> prop."
                        },
                        {
                            property: "onValueChange",
                            type: "function",
                            typeDef: `// type="single"
(value: number) => void
// type="multiple"
(value: number[]) => void`,
                            default: "",
                            description: "A callback function called when the value state of the slider changes."
                        },
                        {
                            property: "onValueCommit",
                            type: "function",
                            typeDef: `// type="single"
(value: number) => void
// type="multiple"
(value: number[]) => void`,
                            default: "",
                            description: "A callback function called when the user finishes dragging the thumb and the value changes. This is different than the <code>onValueChange</code> callback because it waits until the user stops dragging before calling the callback, where the <code>onValueChange</code> callback is called immediately after the user starts dragging."
                        },
                        {
                            property: "disabled",
                            type: "boolean",
                            default: "false",
                            description: "Whether or not the switch is disabled."
                        },
                        {
                            property: "max",
                            type: "number",
                            default: "100",
                            description: "The maximum value of the slider."
                        },
                        {
                            property: "min",
                            type: "number",
                            default: "0",
                            description: "The minimum value of the slider."
                        },
                        {
                            property: "orientation",
                            type: "enum",
                            typeDef: "\"horizontal\" | \"vertical\"",
                            default: "horizontal",
                            description: "The minimum value of the slider."
                        },
                        {
                            property: "step",
                            type: "union",
                            typeDef: "number | number[]",
                            default: "",
                            description: "The step value of the slider. If a single number is provided, the slider will step by that number and use that number to generate the ticks (e.g. <code>step={1}</code> will generate ticks at <code>0, 1, 2, 3, ...</code>). If an array of numbers is provided, the slider will snap to those values (e.g. <code>step={[0, 4, 8, 16, 24]}</code>) and ticks will be generated at those values."
                        },
                        {
                            property: "dir",
                            type: "enum",
                            typeDef: "\"ltr\" | \"rtl\"",
                            default: "ltr",
                            description: "The reading direction of the app."
                        },
                        {
                            property: "autoSort",
                            type: "boolean",
                            default: "true",
                            description: "Whether to automatically sort the values in the array when moving thumbs past one another. This is only applicable to the <span class=\"text-brand\">'multiple'</span> type."
                        },
                        {
                            property: "thumbPositioning",
                            type: "enum",
                            typeDef: "\"exact\" | \"contain\"",
                            default: "contain",
                            description: "The positioning of the slider thumb. <span class=\"text-brand\">'contain'</span> will ensure that the thumb is always visible within the track, while <span class=\"text-brand\">'exact'</span> will ensure that the thumb is always at the same position relative to the track. For an SSR-friendly alternative to <code>thumbPositioning='contain'</code>, use the <code>trackPadding</code> prop to set the padding between the thumbs/first ticks and the edges of the track."
                        },
                        {
                            property: "trackPadding",
                            type: "number",
                            default: "",
                            description: "A percentage of the full track length to pad the start and end of the track. This is useful for creating a visual buffer between the thumbs or beginning/end ticks and the edges of the track. This is an SSR-friendly alternative to <code>thumbPositioning='contain'</code>."
                        },
                    ]
                }
            ]
        },
        {
            id: "switch",
            name: "Switch",
            description: "A toggle control that allows users to switch between \"on\" and \"off\" states.",
            examples: [
                { file: "switch" },
                {
                    file: "switch-child",
                    title: "Child",
                    description: "Alternatively, you can provide the label as a child component of the Switch, in case you need more complex styling."
                },
                { file: "switch-sizes", title: "Sizes", description: "The different switch sizes", code: false },
            ],
            props: [
                {
                    component: "Switch",
                    description: "The switch component.",
                    items: [
                        {
                            property: "size",
                            type: "enum",
                            typeDef: "\"default\" | \"small\"",
                            default: "default",
                            description: "The size of the switch component"
                        },
                        {
                            property: "checked",
                            bindable: true,
                            type: "boolean",
                            default: "false",
                            description: "Whether or not the switch is on or off"
                        },
                        {
                            property: "disabled",
                            type: "boolean",
                            default: "false",
                            description: "Whether or not the switch is disabled"
                        },
                        {
                            property: "id",
                            type: "string",
                            default: "Random ID",
                            description: "The id of the switch for the label"
                        },
                        {
                            property: "label",
                            type: "string",
                            default: "",
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
            id: "tabs",
            name: "Tabs",
            description: "Organizes content into tabbed sections.",
            examples: [
                { file: "tabs" }
            ],
            props: [
                {
                    component: "Tabs.Root",
                    description: "The root tabs component which contains the other tab components.",
                    items: [
                        {
                            property: "value",
                            bindable: true,
                            type: "string",
                            default: "",
                            description: "The active tab"
                        },
                        {
                            property: "onValueChange",
                            type: "function",
                            typeDef: "(value: string) => void",
                            default: "",
                            description: "A callback function called when the active tab value changes."
                        },
                        {
                            property: "activationMode",
                            type: "enum",
                            typeDef: "\"automatic\" | \"manual\"",
                            default: "automatic",
                            description: "How the activation of tabs should be handled. If set to <span class=\"text-brand\">\"automatic\"</span>, the tab will be activated when the trigger is focused. If set to <span class=\"text-brand\">\"manual\"</span>, the tab will be activated when the trigger is pressed."
                        },
                        {
                            property: "disabled",
                            type: "boolean",
                            default: "false",
                            description: "Whether or not the tabs are disabled."
                        },
                        {
                            property: "loop",
                            type: "boolean",
                            default: "true",
                            description: "Whether or not the tabs are disabled."
                        },
                        {
                            property: "orientation",
                            type: "enum",
                            typeDef: "\"horizontal\" | \"vertical\"",
                            default: "horizontal",
                            description: "The orientation of the tabs."
                        },
                        {
                            property: "children",
                            type: "Snippet",
                            default: "",
                            description: "The content of the tabs component as a child"
                        },
                    ]
                },
                {
                    component: "Tabs.List",
                    description: "The component containing the tab triggers.",
                    items: [
                        {
                            property: "children",
                            type: "Snippet",
                            default: "",
                            description: "The children content to render"
                        }
                    ]
                },
                {
                    component: "Tabs.Trigger",
                    description: "The root tabs component which contains the other tab components.",
                    items: [
                        {
                            property: "value",
                            required: true,
                            type: "string",
                            default: "",
                            description: "The value of the tab this trigger represents."
                        },
                        {
                            property: "disabled",
                            type: "boolean",
                            default: "false",
                            description: "Whether or not the tab is disabled."
                        },
                        {
                            property: "children",
                            type: "Snippet",
                            default: "",
                            description: "The content of the trigger as a child"
                        },
                    ]
                },
                {
                    component: "Tabs.Content",
                    description: "The panel containing the contents of a tab.",
                    items: [
                        {
                            property: "value",
                            required: true,
                            type: "string",
                            default: "",
                            description: "The value of the tab this content represents."
                        },
                        {
                            property: "children",
                            type: "Snippet",
                            default: "",
                            description: "The content of the tab content as a child"
                        },
                    ]
                }
            ]
        },
    ]
}

type BaseRoute = {
    id: string
    name: string
    description: string
    path: string
    title: string
    items: ComponentRouteItem[] | DocsRouteItem[]
    section: "Docs" | "Components"
}
export type FlatDocs = BaseRoute & DocsRouteItem
export type FlatComponents = BaseRoute & ComponentRouteItem & ComponentProp[]

export type RoutesFlatMap = FlatDocs | FlatComponents

export const routes = [docs, components]
    .flatMap((section) => {
        return section.items.map((item) => ({
            section: section.title,
            path: `/${section.title.toLowerCase()}/${item.id}`,
            ...item
        }))
    }) as any as RoutesFlatMap[]

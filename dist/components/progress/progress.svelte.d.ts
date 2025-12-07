import { type VariantProps } from "tailwind-variants";
export declare const progressVariants: import("tailwind-variants").TVReturnType<{
    size: {
        small: string;
        default: string;
        large: string;
    };
}, undefined, "bg-dark-10 relative w-full overflow-hidden rounded-full", {
    size: {
        small: string;
        default: string;
        large: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    size: {
        small: string;
        default: string;
        large: string;
    };
}, undefined, "bg-dark-10 relative w-full overflow-hidden rounded-full", unknown, unknown, undefined>>;
export type ProgressSize = VariantProps<typeof progressVariants>["size"];
import { Progress } from "bits-ui";
declare const Progress: any;
type Progress = ReturnType<typeof Progress>;
export default Progress;

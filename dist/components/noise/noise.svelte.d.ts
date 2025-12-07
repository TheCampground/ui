import { type VariantProps } from "tailwind-variants";
export declare const noiseVariants: import("tailwind-variants").TVReturnType<{
    intensity: {
        low: string;
        medium: string;
        high: string;
    };
}, undefined, "opacity-[0.2]", {
    intensity: {
        low: string;
        medium: string;
        high: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    intensity: {
        low: string;
        medium: string;
        high: string;
    };
}, undefined, "opacity-[0.2]", unknown, unknown, undefined>>;
export type NoiseIntensity = VariantProps<typeof noiseVariants>["intensity"];
export type NoiseProps = {
    intensity?: NoiseIntensity;
    class?: string;
};
declare const Noise: import("svelte").Component<NoiseProps, {}, "">;
type Noise = ReturnType<typeof Noise>;
export default Noise;

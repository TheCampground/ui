<script lang="ts" module>
    import { type VariantProps, tv } from "tailwind-variants"

    export const noiseVariants = tv({
        base: "opacity-[0.2]",
        variants: {
            intensity: {
                low: "opacity-[0.05] dark:opacity-[0.2]",
                medium: "opacity-[0.075] dark:opacity-[0.25]",
                high: "opacity-[0.1] dark:opacity-[0.35]"
            },
        },
        defaultVariants: {
            intensity: "low",
        }
    })

    export type NoiseIntensity = VariantProps<typeof noiseVariants>["intensity"]

    export type NoiseProps = {
        intensity?: NoiseIntensity
        class?: string
        animated?: boolean
        scale?: number
    }
</script>

<script lang="ts">
    import { cn } from "$lib/utils.js"

    let {
        intensity = "low",
        animated = true,
        scale = 1,
        class: className
    }: NoiseProps = $props()

    let canvas = $state<HTMLCanvasElement>(null!)
    let animationFrame = $state<number>(null!)

    scale = Math.min(1, Math.max(0, scale))
    scale = animated ? scale : (scale * 1.5)

    $effect(() => {

		const ctx = canvas.getContext("2d")
        if (!ctx || !canvas) return

		const draw = () => {
			const w = canvas.width = window.innerWidth * scale
			const h = canvas.height = window.innerHeight * scale

            ctx.setTransform(1,0,0,1,0,0)
            ctx.scale(scale, scale)

			const img = ctx.createImageData(w, h)
			const pixels = img.data

			for (let i = 0; i < pixels.length; i += 4) {
				const v = Math.random() * 255
				pixels[i] = v
				pixels[i + 1] = v
				pixels[i + 2] = v
				pixels[i + 3] = 255
			}

			ctx.putImageData(img, 0, 0)

            if (animated) {
                animationFrame = requestAnimationFrame(draw)
            }
		}

		draw()

        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame)
        }

    })

</script>

<canvas
    bind:this={canvas}
    class={cn(
        noiseVariants({ intensity }),
        className,
        "absolute w-screen h-screen inset-0 pointer-events-none mix-blend-multiple dark:mix-blend-soft-light blur-[0.2px]"
    )}
></canvas>

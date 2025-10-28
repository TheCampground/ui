<script>
	import { Button } from "@core/button/index.ts"
</script>

<div class="w-full p-5 flex items-center justify-between backdrop-blur-sm bg-background/50 border-t">
    <div class="flex items-center text-sm gap-2">
        <Button variant="ghost" size="icon" href="/">
            <img
                src="/favicon-dark.png"
                class="size-5 md:size-6 select-none pointer-events-none"
                draggable="false"
                alt=""
            />
        </Button>
        &copy; 2025 - Built on the Campground
    </div>
    <Button variant="link" href="https://github.com/thecampground" target="_blank">
        GitHub
    </Button>
</div>

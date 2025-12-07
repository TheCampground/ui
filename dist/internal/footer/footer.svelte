<script>
	import { Campground } from "../icons/index.ts"
	import { Button } from "../../components/button/index.ts"
	import { Icon } from "@steeze-ui/svelte-icon"
</script>

<div class="w-full p-5 flex items-center justify-between backdrop-blur-sm bg-background/50 border-t">
    <div class="flex items-center text-sm gap-2">
        <Button variant="ghost" size="icon" href="/">
            <Icon src={Campground} class="size-5 md:size-6 text-icon-brand" />
        </Button>
        &copy; 2025 - Built on the Campground
    </div>
    <Button variant="link" href="https://github.com/thecampground" target="_blank">
        GitHub
    </Button>
</div>

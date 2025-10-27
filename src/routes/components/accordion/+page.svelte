<script>
	import { Accordion } from "@core/accordion/index.ts"
</script>

<div class="flex flex-col w-full gap-20 flex-1 grow">
    <div class="flex flex-col gap-2 flex-1 grow">
        <div class="flex flex-col gap-2">
            <p class="text-2xl font-bold">Accordion</p>
            <p class="text-sm font-normal">
                Organizes content into collapsible sections.
            </p>
        </div>
        <Accordion.Root type="single">
            <Accordion.Item title="How do I become a better person?" value="2">
                To become a better person, to help others, and to leave the world a better place than you found it.
            </Accordion.Item>
            <Accordion.Item title="Hello world2" value="sex2">
                Read books, listen to podcasts, and surround yourself with people who inspire you.
            </Accordion.Item>
        </Accordion.Root>
    </div>
</div>

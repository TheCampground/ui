<script lang="ts">
	import { CheckCircle, Info, Prohibit, Warning } from "@steeze-ui/phosphor-icons"
    import { Alert, Button } from "../../index.ts"
</script>

<div class="flex gap-5 flex-wrap">
    <div class="flex flex-col gap-2 w-full">
        <p class="text-foreground-alt text-sm">Default</p>
        <Alert icon={Warning}>
            <div class="flex flex-col gap-1">
                <h3 class="text-sm font-medium">
                    Wait!
                </h3>
                <p>Unsaved changes will be lost. Please save before continuing.</p>
            </div>
        </Alert>
    </div>
    <div class="flex flex-col gap-2 w-full">
        <p class="text-foreground-alt text-sm">Success</p>
        <Alert icon={CheckCircle} variant="success">
            <div class="flex flex-col gap-1">
                <h3 class="text-sm font-medium">
                    Saved
                </h3>
                <p>Your updates were applied successfully.</p>
            </div>
        </Alert>
    </div>
    <div class="flex flex-col gap-2 w-full">
        <p class="text-foreground-alt text-sm">Info</p>
        <Alert icon={Info} variant="info">
            <div class="flex flex-col gap-1">
                <h3 class="text-sm font-medium">
                    Note
                </h3>
                <p>This setting applies to all items.</p>
            </div>
        </Alert>
    </div>
    <div class="flex flex-col gap-2 w-full">
        <p class="text-foreground-alt text-sm">Secondary</p>
        <Alert icon={Info} variant="secondary">
            <div class="flex flex-col gap-1">
                <!-- <h3 class="text-sm font-medium">
                    Hint
                </h3> -->
                <p>You can customize these settings later if needed.</p>
            </div>
        </Alert>
    </div>
    <div class="flex flex-col gap-2 w-full">
        <p class="text-foreground-alt text-sm">Danger</p>
        <Alert icon={Prohibit} variant="danger">
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-1">
                    <h3 class="text-sm font-medium">
                        Failed
                    </h3>
                    <p>Please verify billing information and try again.</p>
                </div>
                <ul class="list-disc list-inside">
                    <li>Make sure your card details are correct</li>
                    <li>Ensure you have sufficent funds</li>
                    <li>Verify billing address</li>
                </ul>
            </div>
        </Alert>
    </div>
</div>

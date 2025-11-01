
<div class="relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current bg-button-primary/10 text-button-primary">
    <slot/>
    <h3 class="col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight">Success! Your changes have been saved.</h3>

    <p class="col-start-2">
        This is an alert with an icon, title, and description.
    </p>
</div>

<div class="relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current bg-button-danger/10 text-button-danger">
    <slot/>
    <h3 class="col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight">Unable to process your changes.</h3>

    <div class="col-start-2 inline-flex flex-col gap-2">
        Please verify billing information and try again.
        <ul style="list-style-type:disc;" class="ml-3">
            <li>Check your card details</li>
            <li>Ensure sufficent funds</li>
            <li>Verify billing address</li>
        </ul>
    </div>
</div>

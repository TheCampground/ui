/**
 * SvelteKit Action to handle closing modals
 * @param   {HTMLElement} node - The modal element
 * @listens event:click - Clicking outside of the main element
 * @fires   outclick
 * @listens event:keyup - Pressing `Escape`
 * @fires   escape
 * @example <caption>Example usage of clickOutside action</caption>
 * <modal use:clickOutside on:outclick={closeModal} on:escape={closeModal}>
 *  ...
 * </modal>
 */
export declare function clickOutside(node: HTMLElement, { onClose }: {
    onClose: () => void;
}): {
    destroy(): void;
};

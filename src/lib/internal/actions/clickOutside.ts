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
export function clickOutside(node: HTMLElement, { onClose }: { onClose: () => void }) {
    const handleClick = (event: MouseEvent) => {
        if (!node.contains(event.target as HTMLElement)) {
            onClose()
        }
    }
    const handleKeyUp = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            onClose()
        }
    }
    document.addEventListener("click", handleClick, true)
    document.addEventListener("keyup", handleKeyUp, true)
    return {
        destroy() {
            document.removeEventListener("click", handleClick, true)
            document.removeEventListener("keyup", handleKeyUp, true)
        }
    }
}

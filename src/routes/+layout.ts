import { browser } from "$app/environment";

export const load = async () => {
    if (browser) {
        console.log(
            ' == layout.ts component doc list',
            document.documentElement.classList.value
        );
        return {
            themex: document.documentElement.classList.value
        }
    }
}
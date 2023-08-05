import { browser } from '$app/environment';
import { theme } from '$lib/stores/store';

export const load = async ({ data }) => {
    if (browser) {
        const dataTheme = document.documentElement.getAttribute('data-theme') || ``
        if (dataTheme === 'light' || dataTheme === 'dark' || dataTheme === 'blood') {
            theme.set({ mode: dataTheme });
            localStorage.setItem('theme', JSON.stringify({ mode: dataTheme }))
        }
        return {
            theme: dataTheme
        }
    }
    return {
        theme: data.theme,
    };
}
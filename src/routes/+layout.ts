import { browser } from '$app/environment';
import type { LayoutLoad } from './$types';
import { theme } from '$lib/stores/store';

export const load = (async ({ data }) => {
    if (browser) {
        const dataTheme = document.documentElement.getAttribute('data-theme') || ``
        theme.set({ mode: dataTheme });
        localStorage.setItem('theme', JSON.stringify({ mode: dataTheme }))
        return {
            theme: dataTheme
        }
    }
    return {
        theme: data.theme,
    };
}) satisfies LayoutLoad;
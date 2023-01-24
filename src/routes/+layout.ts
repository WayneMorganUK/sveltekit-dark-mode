import { browser } from '$app/environment';
import type { LayoutLoad } from './$types';
import { theme } from '$lib/stores/store';

export const load = (async ({ data }) => {
    // console.log('HITTING LAYOUT.TS')
    if (browser) {
        // console.log('LAYOUT.TS BROWSER ONLY CODE')
        const htmltheme = document.documentElement.className;
        theme.set({ mode: htmltheme });
        localStorage.setItem('theme', JSON.stringify({ mode: htmltheme }))
        // console.log('htmltheme', htmltheme)
        return {
            theme: htmltheme
        }
    }
    return {
        theme: data.theme,
    };
}) satisfies LayoutLoad;
import type { Subscriber, Unsubscriber } from "svelte/store";

export function toggleTheme(theme:
    {
        subscribe?: (this: void, run: Subscriber<{ mode: string; }>,
            invalidate?: ((value?: { mode: string; } | undefined) => void) | undefined) =>
            Unsubscriber;
        set: (arg0: { mode: string; }) => void;
        useLocalStorage?: () => void;
    },
    $theme: { mode: string }): void {
    if ($theme.mode === 'light') {
        theme.set({ ...$theme, mode: 'dark' });
        updateDocument('theme', 'dark');
    } else if ($theme.mode === 'dark') {
        theme.set({ ...$theme, mode: 'blood' });
        updateDocument('theme', 'blood')
    } else {
        theme.set({ ...$theme, mode: 'light' });
        updateDocument('theme', 'light');
    }
}

function updateDocument(name: string, newMode: string) {
    document.cookie = `${name}=${newMode};path=/;SameSite=strict;expires=Mon, 27 Dec 2050 23:59:59 GMT`;
    document.documentElement.setAttribute('data-theme', newMode);
}

export { }

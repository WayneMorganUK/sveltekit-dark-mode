import { writable } from 'svelte/store'

const createWritableStore = (key: string, startValue: { mode: ThemeType }) => {
    const { subscribe, set } = writable(startValue);

    return {
        subscribe,
        set,
        useLocalStorage: () => {
            const json = localStorage.getItem(key);
            if (json) {
                set(JSON.parse(json));
            }

            subscribe((current) => {
                localStorage.setItem(key, JSON.stringify(current));
            });
        },
    };
};

export const theme = createWritableStore('theme', { mode: 'light' })

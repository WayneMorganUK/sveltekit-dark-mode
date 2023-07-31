import { browser } from '$app/environment';
import { writable } from 'svelte/store'

const createWritableStore = (key: string, startValue: { mode: string }) => {
    if (browser) {
        console.log('STORES LOCALSTORGAE', localStorage)

    }
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

export const theme = createWritableStore('theme', { mode: 'unset' })

import { writable } from 'svelte/store'

const createWritableStore = (key: string, startValue: { mode: string }) => {
    const { subscribe, set } = writable(startValue);
    // console.log('====create writable store====', key, startValue.mode)

    return {
        subscribe,
        set,
        useLocalStorage: () => {
            const json = localStorage.getItem(key);
            // console.log('====create writable store====, json', json)

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

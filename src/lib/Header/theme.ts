export function toggleTheme(theme: any, $theme: any): void {
    if ($theme.mode === 'light') {
        theme.set({ ...$theme, mode: 'dark' });
        updateDocument('theme', 'dark', 'light');
    } else if ($theme.mode === 'dark') {
        theme.set({ ...$theme, mode: 'blood' });
        updateDocument('theme', 'blood', 'dark');
    } else {
        theme.set({ ...$theme, mode: 'light' });
        updateDocument('theme', 'light', 'blood');
    }
}

function updateDocument(name: string, newMode: string, prevMode: string) {
    document.cookie = `${name}=${newMode};path=/;SameSite=strict;expires=Fri, 31 Dec 2050 23:59:59 GMT`;
    document.documentElement.classList.remove(prevMode);
    document.documentElement.classList.add(newMode);
}

export { }

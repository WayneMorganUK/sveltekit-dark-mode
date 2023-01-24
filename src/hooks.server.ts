import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
    // console.log("HITTING HOOKS")
    let theme = event.cookies.get('theme');

    if (!theme) {
        theme = 'unset'
        event.cookies.set('theme', 'unset', {
            sameSite: 'strict',
            path: '/',
            expires: new Date('Tue, 28 Dec 9999 23:59:59 GMT'),
            httpOnly: false
        });
    }
    event.locals.theme = { mode: theme }
    const response = await resolve(event)
    return response
}
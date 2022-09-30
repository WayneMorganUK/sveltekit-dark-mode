import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    let theme = event.cookies.get('theme');
    console.log('====hooks=== theme ====', theme)

    if (!theme) {
        theme = 'dark'
        event.cookies.set('theme', 'dark', {
            sameSite: 'strict',
            path: '/',
            expires: new Date('Wed, 29 Dec 9999 23:59:59 GMT'),
            httpOnly: false
        });

        console.log('===hooks cookies set ======')
    }
    const response = await resolve(event)
    event.locals.theme = { mode: theme }
    console.log('====hooks=== theme ====', theme)


    return response
}
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
    let theme = event.cookies.get('theme');
    console.log('= hooks =, start = theme = ', theme)

    if (!theme) {
        console.log('= hooks =, if not theme  = theme = ', theme)

        theme = 'light'
        console.log('= hooks =, if not theme  = theme = ', theme)
        console.log('= hooks =, if not theme  = cookies = ', theme)

        event.cookies.set('theme', 'light', {
            sameSite: 'strict',
            path: '/',
            expires: new Date('Wed, 29 Dec 9999 23:59:59 GMT'),
            httpOnly: false
        });
        console.log('= hooks =,cookies set to light ')
    }
    event.locals.theme = { mode: theme }
    const response = await resolve(event)


    console.log('= hooks =, event resolved = theme = ', theme)
    return response
}
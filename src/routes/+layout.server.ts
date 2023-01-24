import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
    // console.log('HITTING LAYOUT.SERVER.TS')

    // console.log(' = +layout.server.ts = , locals', locals)
    return {
        theme: locals.theme.mode
    }
}
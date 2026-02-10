import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/sveltekit/providers/google";
import { env } from "$env/dynamic/private";
import { redirect } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

const { AUTH_SECRET, GOOGLE_ID, GOOGLE_SECRET } = env;

const auth = SvelteKitAuth({
    providers: [
        Google({
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
        }),
    ],
    secret: AUTH_SECRET,
    trustHost: true,
    callbacks: {
        async signIn({ user }) {
            const allowedEmail = "plitvicegod@gmail.com";
            if (user.email === allowedEmail) {
                return true;
            }
            return false; // Access denied for anyone else
        },
    },
});

/** @type {import('@sveltejs/kit').Handle} */
async function authorization({ event, resolve }) {
    // Protect /admin routes
    if (event.url.pathname.startsWith("/admin")) {
        const session = await event.locals.auth();
        if (!session) {
            throw redirect(303, "/auth/signin");
        }
        if (session.user.email !== "plitvicegod@gmail.com") {
            throw redirect(303, "/");
        }
    }

    return resolve(event);
}

export const handle = sequence(auth.handle, authorization);

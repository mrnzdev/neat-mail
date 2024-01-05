import NextAuthOptions from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const authOption = NextAuthOptions({
    session: {
        strategy: 'jwt'
    },
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
		}),
	],
    callbacks: {
        
    }
});

export {authOption as GET, authOption as POST}
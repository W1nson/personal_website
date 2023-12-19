import type { NextAuthConfig } from 'next-auth';

import GoogleProviders from 'next-auth/providers/google';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    
  },
  providers: [
	GoogleProviders({
		clientId: process.env.GOOGLE_ID,
		clientSecret: process.env.GOOGLE_SECRET,
	}),
	], // Add providers with an empty array for now
} satisfies NextAuthConfig;
import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { signIn, signUp } from '@/api/firebaseApi';

export const authOptions: NextAuthOptions = {
   /*pages: {
      signIn: '/auth/login',
      newUser: ' /auth/register',
   },*/
   session: {
      maxAge: 2592000, // 30 days
      strategy: 'jwt',
      updateAge: 86400,
   },
   providers: [
      Credentials({
         name: 'Custom Login',
         credentials: {
            email: {
               label: 'Correo electrónico',
               type: 'email',
               placeholder: 'correo@gmail.com',
            },
            password: {
               label: 'Contraseña',
               type: 'password',
               placeholder: '********',
            },
         },
         async authorize(credentials, req) {
            const email = credentials!.email || '';
            const password = credentials!.password || '';

            const { data, error } = await signIn(email, password);

            if (error) {
               return null;
            }

            return data as any;
         },
      }),

      GithubProvider({
         clientId: process.env.GITHUB_ID || '',
         clientSecret: process.env.GITHUB_SECRET || '',
      }),
      // ...add more providers here
   ],
   callbacks: {
      async jwt({ token, account, user }: any) {
         if (account) {
            token.accessToken = account.access_token;
            switch (account.type) {
               case 'oauth':
                  const email = user?.email || '';
                  const password = '$';

                  const { data, error } = await signUp(email, password);

                  if (error) {
                     return;
                  }

                  token.user = data;

                  break;

               case 'credentials':
                  token.user = user;
                  break;
            }
         }

         return token;
      },
      async session({ session, token, user }: any) {
         session.accessToken = token.accessToken;
         session.user = token.user;
         return session;
      },
   },
};

export default NextAuth(authOptions);

'use client';

import React from 'react';
import { ApolloProvider, DocumentNode } from '@apollo/client';
import apolloClient from '@/graphql/apolloClient';
import ThemeProviderCustom from '@/app/theme-provider-custom';
import { SessionProvider } from 'next-auth/react';
import { SWRConfig } from 'swr';
import UIProvider from '@/context/ui/UIProvider';
import AuthProvider from '@/context/auth/AuthProvider';

type Variables = { [key: string]: any };

type Body = {
   query: DocumentNode;
   variables?: Variables;
};

const Providers = ({ children }: { children: React.ReactNode }) => {
   const fetcher = async (body: Body) => {
      const { query, variables } = body;
      const { data } = await apolloClient.query({ query, variables });
      return data;
   };

   return (
      <SessionProvider>
         <ApolloProvider client={apolloClient}>
            <SWRConfig
               value={{
                  fetcher,
               }}
            >
               <AuthProvider>
                  <UIProvider>
                     <ThemeProviderCustom>{children}</ThemeProviderCustom>
                  </UIProvider>
               </AuthProvider>
            </SWRConfig>
         </ApolloProvider>
      </SessionProvider>
   );
};

export default Providers;

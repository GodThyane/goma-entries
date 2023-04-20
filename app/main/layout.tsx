import '../globals.css';
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import {
   Category,
   GetCategoriesTitleDocument,
   GetCategoriesTitleQuery,
} from '@/graphql/generated/schema';
import { ApolloQueryResult } from '@apollo/client';
import apolloClient from '@/graphql/apolloClient';

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const { data }: ApolloQueryResult<GetCategoriesTitleQuery | undefined> =
      await apolloClient.query({
         query: GetCategoriesTitleDocument,
         context: {
            fetchOptions: {
               next: { revalidate: 86400 },
            },
         },
      });

   const categories = data?.categoryCollection?.items;

   return (
      <main>
         <MainLayout categories={categories as Category[]}>
            {children}
         </MainLayout>
      </main>
   );
}

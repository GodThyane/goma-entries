import React from 'react';
import {
   getAuthorById,
   getAuthorIds,
} from '@/app/authors/services/author.service';
import { redirect } from 'next/navigation';
import AuthorComponent from '@/app/authors/[id]/Author';
import { Author } from '@/graphql/generated/schema';

interface Props {
   id: number;
}

const AuthorPage = async ({ params: { id } }: { params: Props }) => {
   const { data } = await getAuthorById({
      context: {
         fetchOptions: {
            next: { revalidate: 43200 },
         },
      },
      variables: {
         id,
      },
   });

   const author = data?.author;

   if (!author) {
      redirect('/');
   }

   return <AuthorComponent author={author as Author} />;
};

export async function generateStaticParams() {
   const authors = await getAuthorIds({
      context: {
         fetchOptions: {
            next: { revalidate: 86400 },
         },
      },
   });

   const ids = authors?.data?.authorCollection?.items.map((plant) =>
      plant?.sys?.id.toString()
   ) as string[];

   return ids.map((id) => ({ id }));
}

export default AuthorPage;

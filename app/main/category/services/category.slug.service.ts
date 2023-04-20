import apolloClient from '@/graphql/apolloClient';
import {
   GetCategoryBySlugDocument,
   GetCategoryBySlugQuery,
} from '@/graphql/generated/schema';
import { ApolloQueryResult } from '@apollo/client';

type Variables = {
   slug: string;
};

type Context = {
   fetchOptions?: {
      next: {
         revalidate: number;
      };
   };
};

type QueryOptions = {
   variables?: Variables;
   context?: Context;
};

export const getCategoryBySlug = async (
   options: QueryOptions = {}
): Promise<ApolloQueryResult<GetCategoryBySlugQuery | undefined>> => {
   const { variables = {}, context = {} } = options;
   const { slug } = variables as Variables;

   return apolloClient.query<GetCategoryBySlugQuery>({
      query: GetCategoryBySlugDocument,
      variables: {
         slug,
      },
      context,
   });
};

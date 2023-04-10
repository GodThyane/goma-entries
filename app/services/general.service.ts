import { ApolloQueryResult } from '@apollo/client';
import {
   GetCategoriesTitleDocument,
   GetCategoriesTitleQuery,
} from '@/graphql/generated/schema';
import apolloClient from '@/graphql/apolloClient';

type Context = {
   fetchOptions?: {
      next: {
         revalidate: number;
      };
   };
};

type QueryOptions = {
   context?: Context;
};

export const getCategoriesTitle = async (
   options: QueryOptions = {}
): Promise<ApolloQueryResult<GetCategoriesTitleQuery | undefined>> => {
   const { context = {} } = options;

   return apolloClient.query<GetCategoriesTitleQuery>({
      query: GetCategoriesTitleDocument,
      context,
   });
};

import { ApolloQueryResult } from '@apollo/client';
import {
   GetCategoriesTitleDocument,
   GetCategoriesTitleQuery,
   GetPlantsByIdsDocument,
   GetPlantsByIdsQuery,
} from '@/graphql/generated/schema';
import apolloClient from '@/graphql/apolloClient';

type Variables = {
   ids: string[];
};

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

type QueryOptionsTwo = {
   context?: Context;
   variables?: Variables;
};

export const getPlantsByIds = async (
   options: QueryOptionsTwo = {}
): Promise<ApolloQueryResult<GetPlantsByIdsQuery | undefined>> => {
   const { context = {}, variables = {} } = options;
   const { ids } = variables as Variables;
   return apolloClient.query<GetPlantsByIdsQuery>({
      query: GetPlantsByIdsDocument,
      variables: {
         ids,
      },
      context,
   });
};

import { ApolloQueryResult } from '@apollo/client';
import {
   GetPlantBySlugDocument,
   GetPlantBySlugQuery,
   GetPlantsSlugsDocument,
   GetPlantsSlugsQuery,
} from '@/graphql/generated/schema';
import apolloClient from '@/graphql/apolloClient';

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
   context?: Context;
   variables?: Variables;
};

export const getPlantSlugs = async (
   options: QueryOptions = {}
): Promise<ApolloQueryResult<GetPlantsSlugsQuery | undefined>> => {
   const { context = {} } = options;

   return apolloClient.query<GetPlantsSlugsQuery>({
      query: GetPlantsSlugsDocument,
      context,
   });
};

export const getPlantBySlug = async (
   options: QueryOptions = {}
): Promise<ApolloQueryResult<GetPlantBySlugQuery | undefined>> => {
   const { variables = {}, context = {} } = options;
   const { slug } = variables as Variables;

   return apolloClient.query<GetPlantBySlugQuery>({
      query: GetPlantBySlugDocument,
      context,
      variables: {
         slug,
      },
   });
};

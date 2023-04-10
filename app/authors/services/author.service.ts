import { ApolloQueryResult } from '@apollo/client';
import {
   GetAuthorByIdDocument,
   GetAuthorByIdQuery,
   GetAuthorIdsDocument,
   GetAuthorIdsQuery,
} from '@/graphql/generated/schema';
import apolloClient from '@/graphql/apolloClient';

type Variables = {
   id: number;
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

export const getAuthorById = async (
   options: QueryOptions = {}
): Promise<ApolloQueryResult<GetAuthorByIdQuery | undefined>> => {
   const { variables = {}, context = {} } = options;
   const { id } = variables as Variables;

   return apolloClient.query<GetAuthorByIdQuery>({
      query: GetAuthorByIdDocument,
      context,
      variables: {
         id,
      },
   });
};

export const getAuthorIds = async (
   options: QueryOptions = {}
): Promise<ApolloQueryResult<GetAuthorIdsQuery | undefined>> => {
   const { context = {} } = options;

   return apolloClient.query<GetAuthorIdsQuery>({
      query: GetAuthorIdsDocument,
      context,
   });
};

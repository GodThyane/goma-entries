import {
   GetAuthorHandleAndIdsDocument,
   GetAuthorHandleAndIdsQuery,
   GetPlantsWithAuthorsDocument,
   GetPlantsWithAuthorsQuery,
} from '@/graphql/generated/schema';
import apolloClient from '@/graphql/apolloClient';
import { createPlants, createUsers, deleteUsers } from '@/firebaseapi/firebaseAdminApi';

export async function POST(request: Request) {
   // Eliminar usuarios de Firebase Auth y Firebase Storage
   const { error } = await deleteUsers();

   if (error) {
      return new Response(JSON.stringify({ error }), {
         status: error.code,
      });
   }

   // Obtener handles de los autores
   const { data } = await apolloClient.query<GetAuthorHandleAndIdsQuery>({
      query: GetAuthorHandleAndIdsDocument,
   });
   const handles: {
      uid: string;
      handle: string;
   }[] = data?.authorCollection?.items.map((author) => ({
      handle: author?.handle as string,
      uid: author?.sys?.id as string,
   })) as { uid: string; handle: string }[];

   // Crear usuarios en Firebase Auth y Firebase Storage
   const { error: errorUsers } = await createUsers(handles);
   if (errorUsers) {
      return new Response(JSON.stringify({ error: errorUsers }), {
         status: errorUsers.code,
      });
   }

   // Obtener publicaciones con el id, y el id del autor;
   const { data: plants } = await apolloClient.query<GetPlantsWithAuthorsQuery>(
      {
         query: GetPlantsWithAuthorsDocument,
      }
   );

   // Crear publicaciones en Firebase Storage
   const { error: errorPlants } = await createPlants(
      plants?.plantCollection?.items as Array<{
         sys: { id: string; firstPublishedAt?: any };
         author: {
            sys: { id: string };
         };
      }>
   );

   if (errorPlants) {
      return new Response(JSON.stringify({ error: errorPlants }), {
         status: errorPlants.code,
      });
   }

   return new Response(JSON.stringify({ handles }));
}

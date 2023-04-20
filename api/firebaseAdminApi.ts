import { UserRecord } from 'firebase-admin/lib/auth';
import { arrayUnion, authAdmin, dbAdmin } from '@/firebaseAdmin';

export const deleteAllUsersFromFirebaseAuth = async () => {
   try {
      const { users } = await authAdmin.listUsers();
      const usersToDelete = users.map((user: UserRecord) => user.uid);
      await authAdmin.deleteUsers(usersToDelete);
      return {
         error: null,
      };
   } catch (e) {
      console.log({ e });
      return {
         error: {
            code: 500,
            message: 'Internal Server Error',
         },
      };
   }
};

export const deleteAllUsersFromFirestore = async () => {
   try {
      const users = await dbAdmin.collection('users');
      const querySnapshot = await users.get();
      const batch = dbAdmin.batch();
      querySnapshot.forEach((doc: any) => {
         batch.delete(doc.ref);
      });
      await batch.commit();
      return {
         error: null,
      };
   } catch (e) {
      console.log({ e });
      return {
         error: {
            code: 500,
            message: 'Internal Server Error',
         },
      };
   }
};

export const deleteUsers = async () => {
   // Vaciar base de datos de Firebase Auth
   const { error } = await deleteAllUsersFromFirebaseAuth();
   if (error) {
      return { error };
   }
   // Vaciar base de datos de Firebase Storage
   const { error: errorStorage } = await deleteAllUsersFromFirestore();
   if (errorStorage) {
      return {
         error: errorStorage,
      };
   }

   return {
      error: null,
   };
};

async function createUsersInFirebaseAuth(
   handles: { uid: string; handle: string }[]
) {
   const users = handles.map(({ handle, uid }) => ({
      email: `${handle.split(' ').join('').toLowerCase()}@gmail.com`,
      password: process.env.PASSWORD_SECRET || '',
      uid,
   }));
   try {
      const promises: Promise<UserRecord>[] = users.map((user) =>
         authAdmin.createUser(user)
      );

      return {
         data: await Promise.all(promises),
         error: null,
      };
   } catch (e) {
      console.log({ e });
      return {
         data: null,
         error: {
            code: 500,
            message: 'Internal Server Error',
         },
      };
   }
}

export async function createPlants(
   items: Array<{
      sys: { id: string; firstPublishedAt?: any };
      author: {
         sys: { id: string };
      };
   }>
) {
   try {
      const plants = dbAdmin.collection('entries');
      const batch = dbAdmin.batch();
      items.forEach((item) => {
         const plant = plants.doc(item.sys.id);
         batch.set(plant, {
            publishedAt: item.sys.firstPublishedAt,
            author: dbAdmin.doc(`users/${item.author.sys.id}`),
            uid: item.sys.id,
         });

         const userRef = dbAdmin.collection('users').doc(item.author.sys.id);
         batch.update(userRef, {
            entries: arrayUnion(plant),
         });
      });
      await batch.commit();

      return {
         error: null,
      };
   } catch (e) {
      console.log({ e });
      return {
         error: {
            code: 500,
            message: 'Internal Server Error',
         },
      };
   }
}

async function createUsersInFirestore(data: UserRecord[]) {
   try {
      const promises: Promise<void>[] = data.map((user) =>
         dbAdmin
            .collection('users')
            .doc(user.uid)
            .set({
               email: user.email,
               username: user.email?.split('@')[0],
               role: 'client',
               uid: user.uid,
            })
      );

      await Promise.all(promises);

      return {
         error: null,
      };
   } catch (e) {
      console.log({ e });
      return {
         error: {
            code: 500,
            message: 'Internal Server Error',
         },
      };
   }
}

export const createUsers = async (
   handles: { uid: string; handle: string }[]
) => {
   // Crear usuarios en Firebase Auth
   const { error, data } = await createUsersInFirebaseAuth(handles);
   if (error) {
      return {
         error,
      };
   }
   // Crear usuarios en Firebase Storage
   const { error: errorStorage } = await createUsersInFirestore(data);
   if (errorStorage) {
      return {
         error: errorStorage,
      };
   }
   return {
      error: null,
   };
};

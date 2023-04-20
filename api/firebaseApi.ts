import axios from 'axios';
import { ISignInResponse, ISignUpResponse } from '@/model/firebase.model';
import { db } from '@/firebase';
import {
   collection,
   doc,
   getDoc,
   getDocs,
   limit,
   setDoc,
   where,
   query,
} from 'firebase/firestore';

function getMessageErrorSignUp(message: string) {
   switch (message) {
      case 'EMAIL_EXISTS':
         return 'El correo ya está en uso';
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
         return 'Demasiados intentos, intente más tarde';
      default:
         return 'Error al crear la cuenta, contacte al administrador';
   }
}

export const signUp: (
   email: string,
   password: string,
   name: string
) => Promise<{
   data: UserModel | null;
   error: { code: number; message: string } | null;
}> = async (email: string, password: string, name: string) => {
   const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`;

   try {
      // Validar que el name no este en uso
      const { data: user } = await getUserByName(name);
      if (user) {
         return {
            data: null,
            error: {
               code: 409,
               message: 'El nombre de usuario ya esta en uso',
            },
         };
      }

      const { data } = await axios.post<ISignUpResponse>(url, {
         email,
         password,
         returnSecureToken: true,
      });

      return await addUser(
         {
            name,
            email,
            role: 'client',
         },
         data.localId
      );
   } catch (e) {
      if (axios.isAxiosError(e)) {
         return {
            data: null,
            error: {
               code: e.response?.data.error.code,
               message: getMessageErrorSignUp(e.response?.data.error.message),
            },
         };
      }
      return {
         data: null,
         error: {
            code: 500,
            message: 'Error interno del servidor',
         },
      };
   }
};

export const oauthSignUp: (
   email: string,
   name: string
) => Promise<{
   data: UserModel | null;
   error: { code: number; message: string } | null;
}> = async (email: string, name: string) => {
   //Encontrar usuario por email
   const { data: user } = await getUserByEmail(email);
   if (user) {
      return { data: user, error: null };
   }

   //Si no existe, crearlo
   return await signUp(email, '$$$$$$$', name);
};

export const signIn: (
   email: string,
   password: string
) => Promise<{
   data: UserModel | null;
   error: { code: number; message: string } | null;
}> = async (email: string, password: string) => {
   let url: string;
   url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`;

   try {
      const { data } = await axios.post<ISignInResponse>(url, {
         email,
         password,
         returnSecureToken: true,
      });

      return await getUser(data.localId);
   } catch (e) {
      if (axios.isAxiosError(e)) {
         return {
            data: null,
            error: {
               code: e.response?.data.error.code,
               message: e.response?.data.error.message,
            },
         };
      }
      return {
         data: null,
         error: {
            code: 500,
            message: 'Internal Server Error',
         },
      };
   }
};

export const addUser = async (user: UserCreateModel, id: string) => {
   try {
      // Create user with id
      const docRef = doc(collection(db, 'users'), id);
      await setDoc(docRef, user);
      return await getUser(id);
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
};

export const getUser = async (id: string, removeEntries: boolean = true) => {
   try {
      const docRef = await getDoc(doc(db, 'users', id));

      if (!docRef.exists()) {
         return {
            data: null,
            error: {
               code: 404,
               message: 'User not found',
            },
         };
      }

      const user = docRef.data() as UserModel;
      if (removeEntries) delete user.entries;
      return {
         data: user,
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
};

export const getUserByEmail = async (email: string) => {
   try {
      const q = query(
         collection(db, 'users'),
         where('email', '==', email),
         limit(1)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
         return {
            data: querySnapshot.docs[0].data() as UserModel,
            error: null,
         };
      } else {
         return {
            data: null,
            error: {
               code: 404,
               message: 'User not found',
            },
         };
      }
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
};

export const getUserByName = async (username: string) => {
   try {
      const q = query(
         collection(db, 'users'),
         where('username', '==', username),
         limit(1)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
         return {
            data: querySnapshot.docs[0].data() as UserModel,
            error: null,
         };
      } else {
         return {
            data: null,
            error: {
               code: 404,
               message: 'User not found',
            },
         };
      }
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
};

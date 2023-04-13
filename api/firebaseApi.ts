import axios from 'axios';
import { ISignInResponse, ISignUpResponse } from '@/model/firebase.model';
import { db } from '@/firebase';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';

export const signUp: (
   email: string,
   password: string,
   name: string
) => Promise<{
   data: ISignUpResponse | null;
   error: { code: number; message: string } | null;
}> = async (email: string, password: string, name: string) => {
   const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`;

   try {
      const { data } = await axios.post<ISignUpResponse>(url, {
         email,
         password,
         returnSecureToken: true,
      });

      const user = await addUser({
         name,
         email,
         id: data.localId,
      });

      console.log({ user });

      return {
         data: {
            ...data,
            userId: user.id,
         },
         error: null,
      };
   } catch (e) {
      console.log({ e });

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

export const signIn: (
   email: string,
   password: string
) => Promise<{
   data: ISignInResponse | null;
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

      const { data: user } = await getUser(data.localId);

      return {
         data: {
            ...data,
            userId: user?.id,
         },
         error: null,
      };
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

export const addUser = async (user: any) => {
   try {
      const docRef = await addDoc(collection(db, 'users'), user);
      return {
         id: docRef.id,
         error: null,
      };
   } catch (e) {
      return {
         id: null,
         error: {
            code: 500,
            message: 'Internal Server Error',
         },
      };
   }
};

export const getUser = async (id: string) => {
   try {
      const docRef = await getDoc(doc(db, 'users', id));
      console.log({ docRef });
      return {
         data: docRef,
         error: null,
      };
   } catch (e) {
      return {
         data: null,
         error: {
            code: 500,
            message: 'Internal Server Error',
         },
      };
   }
};

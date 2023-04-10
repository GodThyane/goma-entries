import axios from 'axios';
import { ISignInResponse, ISignUpResponse } from '@/model/firebase.model';

export const signUp: (
   email: string,
   password: string
) => Promise<{
   data: ISignUpResponse | null;
   error: { code: number; message: string } | null;
}> = async (email: string, password: string) => {
   const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`;

   try {
      const { data } = await axios.post<ISignUpResponse>(url, {
         email,
         password,
         returnSecureToken: true,
      });

      return {
         data,
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

      return {
         data,
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
import { createContext } from 'react';
import { ISignInResponse } from '@/model/firebase.model';

interface ContextProps {
   isLoggedIn: boolean;
   user?: any /*TODO*/;

   // Methods
   login: (
      email: string,
      password: string
   ) => Promise<{
      data: ISignInResponse | null;
      error: { code: number; message: string } | null;
   }>;
   logout: () => void;
   /*registerUser: (
      email: string,
      password: string,
      name: string
   ) => Promise<{ hasError: boolean; message?: string }>;*/
}

export const AuthContext = createContext({} as ContextProps);

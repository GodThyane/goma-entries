import { createContext } from 'react';

interface ContextProps {
   isLoggedIn: boolean;
   user?: UserModel;

   // Methods
   login: (
      email: string,
      password: string
   ) => Promise<{
      data: UserModel | null;
      error: { code: number; message: string } | null;
   }>;
   logout: () => void;
   register: (
      email: string,
      password: string,
      name: string
   ) => Promise<{
      data: UserModel | null;
      error: { code: number; message: string } | null;
   }>;
}

export const AuthContext = createContext({} as ContextProps);

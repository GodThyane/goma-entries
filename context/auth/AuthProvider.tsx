'use client';

import React, { useReducer, useMemo, useEffect } from 'react';
import { AuthContext, authReducer } from './';
import { useSession, signIn as signWithNext, signOut } from 'next-auth/react';
import { signIn } from '@/api/firebaseApi';

export interface AuthState {
   isLoggedIn: boolean;
   user?: any /*TODO*/;
}

const Auth_INITIAL_STATE: AuthState = {
   isLoggedIn: false,
   user: undefined,
};

interface Props {
   children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
   const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);
   const { data, status } = useSession();

   useEffect(() => {
      if (status === 'authenticated') {
         dispatch({ type: 'Auth - Login', payload: data?.user });
      }
   }, [data, status]);

   const login = async (email: string, password: string) => {
      const data = await signIn(email, password);
      if (!data.error) {
         await signWithNext('credentials', {
            email,
            password,
         });
         dispatch({ type: 'Auth - Login', payload: data.data });
      }
      return data;
   };

   const logout = async () => {
      await signOut();
      dispatch({ type: 'Auth - Logout' });
   };

   const AuthMemo = useMemo(
      () => ({
         ...state,

         // Methods
         login,
         logout,
      }),
      [state]
   );

   return (
      <AuthContext.Provider value={AuthMemo}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
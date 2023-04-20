import React from 'react';
import { getProviders } from 'next-auth/react';
import Login from '@/app/auth/login/Login';

const LoginPage = async () => {
   const providers = await getProviders();

   return <Login providers={providers} />;
};

export default LoginPage;

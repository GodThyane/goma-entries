'use client';

import React from 'react';
import { signUp } from '@/api/firebaseApi';

const Login = () => {
   const handleRegister = async () => {
      await signUp('josedaza99@gmail.com', '12345678', 'José Daza');
   };
   return (
      <div>
         <button onClick={handleRegister}>Registrar</button>
      </div>
   );
};

export default Login;

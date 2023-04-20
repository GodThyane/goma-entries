import React from 'react';

interface Props {
   children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
   return (
      <main
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 200px)',
         }}
      >
         {children}
      </main>
   );
};

export default AuthLayout;

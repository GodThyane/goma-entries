import './globals.css';
import React from 'react';
import Providers from '@/app/providers';

export const metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
};

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="es">
         <body>
            <Providers>{children}</Providers>
         </body>
      </html>
   );
}

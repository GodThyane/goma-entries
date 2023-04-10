import React from 'react';
import Navbar from '@/components/ui/Navbar';
import { Category } from '@/graphql/generated/schema';

interface Props {
   children: React.ReactNode;
   categories: Category[];
}

const MainLayout = ({ children, categories }: Props) => {
   return (
      <>
         <Navbar categories={categories} />
         {/*<SideMenu/>*/}
         <main
            style={{
               margin: '80px auto',
               maxWidth: '1440px',
               padding: '0 23px',
            }}
         >
            {children}
         </main>
         <footer>{/*TODO*/}</footer>
      </>
   );
};

export default MainLayout;

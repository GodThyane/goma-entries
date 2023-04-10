import React from 'react';
import { Skeleton } from '@mui/material';

interface Props {
   numberOfEntries?: number;
}

const AuthorEntriesSkeleton = ({ numberOfEntries = 50 }: Props) => {
   return (
      <>
         {Array.from({ length: numberOfEntries }, (_, i) => (
            <Skeleton
               key={i}
               variant="text"
               width={`${Math.random() * 60 + 40}%`}
               height={21}
            />
         ))}
      </>
   );
};

export default AuthorEntriesSkeleton;

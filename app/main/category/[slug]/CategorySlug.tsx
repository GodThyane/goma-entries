'use client';

import React from 'react';
import { Typography } from '@mui/material';
import PlantList from '@/components/plants/PlantList';
import Loading from '@/components/ui/Loading';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { usePlantsByCategoryInfinite } from '@/hooks/usePlants';
import PlantListSkeleton from '@/components/skeleton/plant/PlantList';

interface Props {
   slug: string;
   description: string;
   title: string;
}

const CategorySlug = ({ slug, description, title }: Props) => {
   const {
      plants,
      size,
      setSize,
      isLoadingMore,
      isReachingEnd,
      isLoadingInitialData,
   } = usePlantsByCategoryInfinite(slug);

   useInfiniteScroll(isLoadingMore, isReachingEnd, setSize, size);

   return (
      <>
         <Typography variant="h1">{title}'s Entries</Typography>
         <Typography variant="h2" sx={{ mb: 2 }}>
            {description}
         </Typography>
         {isLoadingInitialData ? (
            <PlantListSkeleton />
         ) : (
            <>
               <PlantList plants={plants} />
               {isLoadingMore && <Loading />}
               {isReachingEnd && !isLoadingInitialData && (
                  <p>You have reached the end of the list</p>
               )}
            </>
         )}
      </>
   );
};

export default CategorySlug;

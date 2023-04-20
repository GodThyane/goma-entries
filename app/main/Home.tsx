'use client';
import React from 'react';
import Loading from '@/components/ui/Loading';
import { usePlantsInfinite } from '@/hooks/usePlants';
import { Typography } from '@mui/material';
import PlantList from '@/components/plants/PlantList';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import PlantListSkeleton from '@/components/skeleton/plant/PlantList';

const Home = () => {
   const {
      plants,
      size,
      setSize,
      isLoadingMore,
      isReachingEnd,
      isLoadingInitialData,
   } = usePlantsInfinite();

   useInfiniteScroll(isLoadingMore, isReachingEnd, setSize, size);

   return (
      <>
         <Typography variant="h1">Entries of Plants</Typography>
         <Typography variant="h2" sx={{ mb: 2 }}>
            Become a gardening expert and share your tips with the community of
            plant lovers through our plant post application.
         </Typography>
         {isLoadingInitialData ? (
            <PlantListSkeleton />
         ) : (
            <>
               <PlantList plants={plants} />
               {isLoadingMore && <Loading />}
               {isReachingEnd && <p>You have reached the end of the list</p>}
            </>
         )}
      </>
   );
};

export default Home;

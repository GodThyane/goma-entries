'use client';
import React, { useContext } from 'react';
import Loading from '@/components/ui/Loading';
import { usePlantsInfinite } from '@/hooks/usePlants';
import { Button } from '@mui/material';
import PlantList from '@/components/plants/PlantList';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import PlantListSkeleton from '@/components/skeleton/plant/PlantList';
import CustomTab, { CustomTabPanelProps } from '@/components/ui/CustomTab';
import { Plant } from '@/graphql/generated/schema';
import SpaIcon from '@mui/icons-material/Spa';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEntriesLiked } from '@/hooks/useEntriesLiked';
import AddIcon from '@mui/icons-material/Add';
import { AuthContext } from '@/context/auth';

const PlantListOne = (
   isLoadingInitialData: boolean,
   plants: Plant[],
   isLoadingMore: boolean | undefined,
   isReachingEnd: boolean | undefined
) => {
   return (
      <>
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

const PlantListLiked = (isLoading: boolean, plants: Plant[]) => {
   return (
      <>
         {isLoading ? (
            <PlantListSkeleton />
         ) : (
            <>
               {plants.length === 0 ? (
                  <p>You have not liked any entries yet 🙁</p>
               ) : (
                  <PlantList plants={plants} />
               )}
            </>
         )}
      </>
   );
};

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

   const { user } = useContext(AuthContext);

   const { plants: plantsLiked, isLoading: isLoadingLiked } = useEntriesLiked(
      user?.uid
   );

   let panels: CustomTabPanelProps[];

   if (user) {
      panels = [
         {
            children: PlantListOne(
               isLoadingInitialData,
               plants,
               isLoadingMore,
               isReachingEnd
            ),
            icon: <SpaIcon color="warning" />,
            label: 'ENTRIES',
         },
         {
            children: PlantListLiked(isLoadingLiked, plantsLiked),
            icon: <FavoriteIcon color="error" />,
            label: 'FAVORITES',
         },
      ];
   } else {
      panels = [
         {
            children: PlantListOne(
               isLoadingInitialData,
               plants,
               isLoadingMore,
               isReachingEnd
            ),
            icon: <SpaIcon color="warning" />,
            label: 'ENTRIES',
         },
      ];
   }

   return (
      <>
         <CustomTab
            panels={panels}
            variant="fullWidth"
            ariaLabel="Entries of plants"
         >
            <Button
               color="primary"
               size="large"
               variant="outlined"
               startIcon={<AddIcon />}
               sx={{ mt: 2 }}
            >
               Crear entrada
            </Button>
         </CustomTab>
      </>
      /*<>
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
      </>*/
   );
};

export default Home;

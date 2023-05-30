'use client';
import React, { useContext } from 'react';
import Loading from '@/components/ui/Loading';
import { usePlantsInfinite } from '@/hooks/usePlants';
import { Box, Button, Modal } from '@mui/material';
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
import CreateEntry from '@/components/plants/CreateEntry/CreateEntry';

const style = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 600,
   bgcolor: 'background.paper',
   boxShadow: 24,
   p: 4,
   outline: 0,
};

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
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

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
               onClick={handleOpen}
            >
               Crear entrada
            </Button>
         </CustomTab>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>{<CreateEntry />}</Box>
         </Modal>
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

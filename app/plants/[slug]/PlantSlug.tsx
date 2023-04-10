'use client';

import React from 'react';
import { Plant } from '@/graphql/generated/schema';
import {
   Box,
   Card,
   CardActionArea,
   CardMedia,
   Chip,
   Grid,
   Typography,
} from '@mui/material';
import { Excerpt } from '@/components/ui/Excerpt';
import Link from 'next/link';

const PlantSlug = ({ plant }: { plant: Plant }) => {
   return (
      <Grid container spacing={3}>
         <Grid item xs={12} sm={7}>
            <Card>
               <CardActionArea>
                  <CardMedia
                     component="img"
                     className="fadeIn"
                     image={plant.image?.url!}
                     alt={plant.image?.title!}
                     style={{
                        width: '100%',
                        height: 'auto',
                     }}
                     // Same size as the image
                     /*onLoad={() => setIsImageLoaded(true)}*/
                  />
               </CardActionArea>
            </Card>
         </Grid>
         <Grid item xs={12} sm={5}>
            <Box display="flex" flexDirection="column">
               {/*Títulos*/}
               <Typography variant="h1" component="h1">
                  {plant.plantName}
               </Typography>

               <Box
                  sx={{ mt: 2, display: 'flex' }}
                  justifyContent="space-between"
               >
                  <Chip
                     sx={{
                        backgroundColor: plant.category?.color,
                        color: plant.category?.slug?.includes('indoor')
                           ? '#fff'
                           : '#000',
                     }}
                     label={plant.category?.title}
                     size="small"
                  />
                  <Box>
                     <Link
                        href={`/authors/${plant.author?.sys?.id}`}
                        style={{
                           color: 'inherit',
                        }}
                     >
                        <Typography
                           variant="subtitle2"
                           component="h2"
                           fontStyle="italic"
                        >
                           {plant.author?.fullName}
                        </Typography>
                     </Link>
                  </Box>
               </Box>

               {/*Cantidad*/}
               <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle2">Description</Typography>
                  <Excerpt richText={plant.description?.json} limit={700} />
               </Box>
            </Box>
         </Grid>
      </Grid>
   );
};

export default PlantSlug;

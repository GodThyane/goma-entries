'use client';

import React, { useState } from 'react';
import {
   Box,
   Card,
   CardActionArea,
   CardMedia,
   Chip,
   Grid,
   Typography,
} from '@mui/material';
import Link from 'next/link';
import { Plant } from '@/graphql/generated/schema';

interface Props {
   plant: Plant;
}

const PlantCard = ({ plant }: Props) => {
   const [isImageLoaded, setIsImageLoaded] = useState(false);

   return (
      //xs: 12, sm: 6, md: 4, lg: 3
      <Grid item xs={12} sm={6} md={4} lg={3}>
         <Card>
            <Link href={`/plants/${plant.slug}`} passHref prefetch={false}>
               <CardActionArea>
                  <CardMedia
                     component="img"
                     className="fadeIn"
                     image={plant.image?.url!}
                     alt={plant.image?.title!}
                     onLoad={() => setIsImageLoaded(true)}
                  />
               </CardActionArea>
            </Link>
         </Card>

         <Box
            sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }}
            className="fadeIn"
         >
            <Typography fontWeight={700}>{plant.plantName}</Typography>
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
         </Box>
      </Grid>
   );
};

export default PlantCard;

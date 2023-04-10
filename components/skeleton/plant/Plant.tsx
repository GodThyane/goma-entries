'use client';
import React from 'react';
import { Grid, Skeleton } from '@mui/material';

const randomWidth = () => {
   return `${Math.random() * 60 + 40}%`;
};

const PlantSkeleton = () => {
   return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
         <Skeleton variant="rounded" width="100%" height={215} />
         <Skeleton variant="text" width={randomWidth()} height={30} />
         <Skeleton
            variant="rectangular"
            width={60}
            height={24}
            sx={{
               borderRadius: '16px',
            }}
         />
      </Grid>
   );
};

export default PlantSkeleton;

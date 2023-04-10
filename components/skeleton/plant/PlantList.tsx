'use client';

import React from 'react';
import { Grid } from '@mui/material';
import PlantSkeleton from '@/components/skeleton/plant/Plant';

interface Props {
   numberOfEntries?: number;
}

const randomKeyByIndex = (index: number) => {
   return Math.random() * index;
};

const PlantListSkeleton = ({ numberOfEntries = 16 }: Props) => {
   return (
      <Grid container spacing={4}>
         {Array.from({ length: numberOfEntries }).map((_, index) => (
            <PlantSkeleton key={randomKeyByIndex(index)} />
         ))}
      </Grid>
   );
};

export default PlantListSkeleton;

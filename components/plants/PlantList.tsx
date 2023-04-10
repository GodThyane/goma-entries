'use client';

import React from 'react';
import { Grid } from '@mui/material';
import PlantCard from '@/components/plants/PlantCard';
import { Plant } from '@/graphql/generated/schema';

interface Props {
   plants: Plant[];
}

const PlantList = ({ plants }: Props) => {
   return (
      <Grid container spacing={4}>
         {plants.map((plant) => (
            <PlantCard plant={plant} key={plant.slug} />
         ))}
      </Grid>
   );
};

export default PlantList;

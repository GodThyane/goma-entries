import React from 'react';
import {
   getPlantBySlug,
   getPlantSlugs,
} from '@/app/plants/services/plants.service';
import { redirect } from 'next/navigation';
import PlantSlug from '@/app/plants/[slug]/PlantSlug';
import { Plant } from '@/graphql/generated/schema';

interface Props {
   slug: string;
}

const PlantSlugPage = async ({ params: { slug } }: { params: Props }) => {
   const { data } = await getPlantBySlug({
      context: {
         fetchOptions: {
            next: { revalidate: 43200 },
         },
      },
      variables: {
         slug,
      },
   });

   const count = data?.plantCollection?.items.length ?? 0;

   if (count === 0) {
      redirect('/');
   }

   const plant = data?.plantCollection?.items[0] as Plant;

   return <PlantSlug plant={plant} />;
};

export default PlantSlugPage;

export async function generateStaticParams() {
   const plants = await getPlantSlugs({
      context: {
         fetchOptions: {
            next: { revalidate: 86400 },
         },
      },
   });

   const slugs = plants?.data?.plantCollection?.items.map(
      (plant) => plant?.slug
   ) as string[];

   return slugs.map((slug) => ({ slug }));
}

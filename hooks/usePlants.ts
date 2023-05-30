import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import {
   GET_PLANTS,
   GET_PLANTS_BY_CATEGORY_INFINITE,
   GET_PLANTS_INFINITE,
} from '@/graphql/queries/plants';
import {
   GetPlantsByCategoryInfiniteQuery,
   GetPlantsInfiniteQuery,
   Plant,
} from '@/graphql/generated/schema';

const PAGE_SIZE = 16;

export const usePlants = () => {
   const { data, error, isLoading } = useSWR(GET_PLANTS);

   return {
      plants: (data?.plantCollection?.items as Plant[]) || ([] as Plant[]),
      isLoading: isLoading,
      isError: error,
   };
};

type Variables = { limit: number; skip: number };
export const usePlantsInfinite = () => {
   const { data, error, size, setSize } =
      useSWRInfinite<GetPlantsInfiniteQuery>(
         (pageIndex, previousPageData: GetPlantsInfiniteQuery) =>
            getKey(pageIndex, previousPageData),
         { initialSize: 1 }
      );

   const isLoadingInitialData = !data && !error;
   const isLoadingMore =
      isLoadingInitialData ||
      (size > 0 && data && typeof data[size - 1] === 'undefined');

   const plants = data
      ?.flat()
      .map((page) => page.plantCollection?.items)
      .flat() as Plant[];

   const isReachingEnd =
      data && data[data.length - 1]?.plantCollection?.total === plants.length;

   return {
      plants,
      error,
      size,
      setSize,
      isLoadingMore,
      isReachingEnd,
      isLoadingInitialData,
   };
};

export const useEntriesLiked = () => {
   // Obtener las entradas que le gustan al usuario.
};

export const usePlantsByCategoryInfinite = (category: string) => {
   const { data, error, size, setSize } =
      useSWRInfinite<GetPlantsByCategoryInfiniteQuery>(
         (pageIndex, previousPageData: GetPlantsByCategoryInfiniteQuery) =>
            getKeyByCategory(pageIndex, previousPageData, category),
         { initialSize: 1 }
      );

   const isLoadingInitialData = !data && !error;
   const isLoadingMore =
      isLoadingInitialData ||
      (size > 0 && data && typeof data[size - 1] === 'undefined');

   const plants = data
      ?.flat()
      .map((page) => page.plantCollection?.items)
      .flat() as Plant[];

   const isReachingEnd =
      data && data[data.length - 1]?.plantCollection?.total === plants.length;

   return {
      plants,
      error,
      size,
      setSize,
      isLoadingMore,
      isReachingEnd,
      isLoadingInitialData,
   };
};

const getKey = (
   pageIndex: number,
   previousPageData: GetPlantsInfiniteQuery
) => {
   if (previousPageData && !previousPageData.plantCollection?.items.length) {
      return null;
   }
   return {
      query: GET_PLANTS_INFINITE,
      variables: {
         limit: PAGE_SIZE,
         skip: pageIndex * PAGE_SIZE,
      },
   };
};

const getKeyByCategory = (
   pageIndex: number,
   previousPageData: GetPlantsByCategoryInfiniteQuery,
   category: string
) => {
   if (previousPageData && !previousPageData.plantCollection?.items.length) {
      return null;
   }
   return {
      query: GET_PLANTS_BY_CATEGORY_INFINITE,
      variables: {
         limit: PAGE_SIZE,
         skip: pageIndex * PAGE_SIZE,
         category,
      },
   };
};

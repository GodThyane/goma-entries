import { useEffect, useState } from 'react';
import { db } from '@/firebase';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { getPlantsByIds } from '@/app/services/general.service';
import { Plant } from '@/graphql/generated/schema';
import useSWR from 'swr';

export const useEntriesLiked = (userId: string | null = null) => {
   const { data, error, isLoading } = useSWR(userId, fetchEntriesFromFirebase);

   const entries = data
      ?.flat()
      .map((entry) => entry)
      .flat() as string[];

   const [plants, setPlants] = useState<Plant[]>([]);

   useEffect(() => {
      const fetchPlants = async () => {
         if (!entries || entries.length === 0) return;
         const plants = await fetchEntriesFromContentFul(entries);
         setPlants(plants);
      };
      fetchPlants();
   }, [entries]);

   return {
      plants,
      isLoading,
      isError: error,
   };
};

/*export const useEntriesLiked = (userId: string | null = null) => {
   const pageSize = 15;

   const getKey = (pageIndex: number, previousPageData: any) => {
      console.log({ pageIndex, previousPageData });
      if (previousPageData && !previousPageData.length) {
         return null;
      }

      if (pageIndex === 0) {
         return {
            userId,
            pageSize,
            lastEntry: null,
         };
      }

      const lastEntry = previousPageData[previousPageData.length - 1];
      return {
         userId,
         pageSize,
         lastEntry,
      };
   };

   const { data, error, size, setSize } = useSWRInfinite(
      getKey,
      fetchEntriesFromFirebase
   );

   const isLoadingInitialData = !data && !error;
   const isLoadingMore =
      isLoadingInitialData ||
      (size > 0 && data && typeof data[size - 1] === 'undefined');

   const entries = data
      ?.flat()
      .map((entry) => entry.posts)
      .flat() as string[];

   const total = data?.flat().map((entry) => entry.totalCount)[0] as number;
   console.log({ total });

   const [plants, setPlants] = useState<Plant[]>([]);

   useEffect(() => {
      const fetchPlants = async () => {
         if (!entries || entries.length === 0) return;
         const plants = await fetchEntriesFromContentFul(entries);
         setPlants(plants);
      };
      fetchPlants();
   }, [entries]);

   const isReachingEnd = data && total === entries?.length;

   return {
      plants,
      error,
      size,
      setSize,
      isLoadingMore,
      isReachingEnd,
      isLoadingInitialData,
   };
};*/

const fetchEntriesFromFirebase = async (userId: string | null) => {
   let likesRef = query(
      collection(db, 'likes'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
   );

   const snapshot = await getDocs(likesRef);
   return snapshot.docs.map((doc) => doc.data().postId) as string[];
};

/*const fetchEntriesFromFirebase = async (resKey: {
   userId: string | null;
   pageSize: number;
   lastEntry: any;
}) => {
   const { userId, pageSize, lastEntry } = resKey;

   const querySnapshot = await getDocs(
      query(collection(db, 'likes'), where('userId', '==', userId))
   );

   const totalCount = querySnapshot.size;

   let likesRef = query(
      collection(db, 'likes'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc'),
      limit(pageSize)
   );

   if (lastEntry) {
      const lastEntryDoc = await getDoc(doc(db, 'likes', lastEntry.id));
      const lastEntryData = lastEntryDoc.data()!;
      likesRef = query(
         collection(db, 'likes'),
         where('userId', '==', userId),
         orderBy('createdAt', 'desc'),
         startAfter(lastEntryData.createdAt),
         limit(pageSize)
      );
   }

   const snapshot = await getDocs(likesRef);
   const posts = snapshot.docs.map((doc) => doc.data().postId) as string[];
   return {
      posts,
      totalCount,
   };
};*/

const fetchEntriesFromContentFul = async (entries: string[]) => {
   const { data } = await getPlantsByIds({
      variables: {
         ids: entries,
      },
   });

   return data?.plantCollection?.items as Plant[];
};

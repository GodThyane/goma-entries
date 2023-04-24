import { useEffect, useState } from 'react';
import { db } from '@/firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

export const useLikes = (postId: string, userId: string | null = null) => {
   const [likes, setLikes] = useState(0);
   const [likedByUser, setLikedByUser] = useState(false);

   useEffect(() => {
      const likesRef = query(
         collection(db, 'likes'),
         where('postId', '==', postId)
      );

      const handleSnapshot = (snapshot: any) => {
         setLikes(snapshot.size);
         if (userId) {
            const userLiked = snapshot.docs.find(
               (doc: any) => doc.data().userId === userId
            );
            setLikedByUser(!!userLiked);
         }
      };

      const unsubscribe = onSnapshot(likesRef, handleSnapshot);

      return () => unsubscribe();
   }, [postId, userId]);

   return { likes, likedByUser };
};

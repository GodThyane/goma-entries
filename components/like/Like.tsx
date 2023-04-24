'use client';

import styles from './Like.module.css';
import React, { useEffect, useState } from 'react';
import './like.css';
import { Box, IconButton, Typography } from '@mui/material';
import {
   addDoc,
   collection,
   deleteDoc,
   doc,
   getDocs,
   limit,
   query,
   where,
} from 'firebase/firestore';
import { db } from '@/firebase';
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';
import { useLikes } from '@/hooks/useLikes';
import { usePathname, useRouter } from 'next/navigation';

interface Props {
   postId: string;
   userId: string | null;
   color?: string;
}

const Like = ({ postId, userId, color = 'red' }: Props) => {
   const { likes, likedByUser } = useLikes(postId, userId);
   const [clientLikes, setClientLikes] = useState(0);
   const [clientLikedByUser, setClientLikedByUser] = useState(false);
   const [previousLikes, setPreviousLikes] = useState(0);
   const router = useRouter();
   const path = usePathname();
   const [slideDirection, setSlideDirection] = useState('');

   useEffect(() => {
      setClientLikes(likes);
      setClientLikedByUser(likedByUser);
   }, [likes, likedByUser]);

   useEffect(() => {
      const handleIncrement = () => {
         setSlideDirection('slide-up');
         setTimeout(() => {
            setSlideDirection('slide-normal-up');
            setPreviousLikes(clientLikes);
            setTimeout(() => {
               setSlideDirection('');
            }, 10);
         }, 100);
      };

      const handleDecrement = () => {
         setSlideDirection('slide-down');
         setTimeout(() => {
            setSlideDirection('slide-normal-down');
            setPreviousLikes(clientLikes);
            setTimeout(() => {
               setSlideDirection('');
            }, 10);
         }, 100);
      };

      if (clientLikes > previousLikes) {
         handleIncrement();
      } else if (clientLikes < previousLikes) {
         handleDecrement();
      }
   }, [clientLikes, previousLikes]);

   // Manejar la acción de dar like
   const handleLike = async () => {
      if (!userId) {
         router.push('/auth/login?p=' + path);
         return;
      }
      setClientLikedByUser(!clientLikedByUser);
      setClientLikes(clientLikedByUser ? clientLikes - 1 : clientLikes + 1);
      try {
         const q = query(
            collection(db, 'likes'),
            where('postId', '==', postId),
            where('userId', '==', userId),
            limit(1)
         );

         const querySnapshot = await getDocs(q);

         if (querySnapshot.empty) {
            // Si el usuario no ha dado like, agregar un nuevo like
            await addDoc(collection(db, 'likes'), {
               postId,
               userId,
               createdAt: new Date(),
            });
         } else {
            // Si el usuario ya dio like, eliminar el like existente
            const likeId = querySnapshot.docs[0].id;
            await deleteDoc(doc(db, 'likes', likeId));
         }
      } catch (error) {
         console.error('Error al manejar like:', error);
      }
   };

   return (
      <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            ':hover': {
               '.MuiTypography-root': {
                  color: color,
                  transition: 'color 0.2s ease-in-out',
               },
               '.MuiSvgIcon-root': {
                  color: color,
                  transition: 'color 0.2s ease-in-out',
               },
               cursor: 'pointer',
            },
         }}
         onClick={handleLike}
      >
         <IconButton>
            {clientLikedByUser ? (
               <Favorite
                  sx={{
                     color: color,
                  }}
               />
            ) : (
               <FavoriteBorderOutlined
                  sx={{
                     color: 'text.secondary',
                  }}
               />
            )}
         </IconButton>
         <Box className={`${styles.count} ${styles[slideDirection]}`}>
            <Typography
               variant="body2"
               color={clientLikedByUser ? color : 'text.secondary'}
            >
               {previousLikes}
            </Typography>
         </Box>
      </Box>
   );
};
export default Like;

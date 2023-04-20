'use client';

import React, { useState } from 'react';
import {
   Box,
   Card,
   CardActionArea,
   CardMedia,
   Grid,
   Skeleton,
   Typography,
} from '@mui/material';
import {
   Author,
   useGetAuthorImageByIdQuery,
   useGetPlantsByAuthorQuery,
} from '@/graphql/generated/schema';
import CustomScrollbar from '@/components/ui/CustomScrollBar';
import Link from 'next/link';
import AuthorEntriesSkeleton from '@/components/skeleton/author/Entries';

const AuthorComponent = ({ author }: { author: Author }) => {
   const [heightImageComponent, setHeightImageComponent] = useState('700px');

   const { data, loading } = useGetPlantsByAuthorQuery({
      variables: {
         id: author.sys.id,
      },
   });

   const { data: authorImage, loading: loadingImage } =
      useGetAuthorImageByIdQuery({
         variables: {
            id: author.sys.id,
         },
      });

   const onLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setHeightImageComponent(event.currentTarget.clientHeight + 'px');
   };

   return (
      <Grid container spacing={3}>
         <Grid item xs={12} sm={7}>
            {loadingImage ? (
               <Skeleton
                  variant="rounded"
                  width="100%"
                  height={heightImageComponent}
               />
            ) : (
               <Card>
                  <CardActionArea>
                     <CardMedia
                        component="img"
                        className="fadeIn"
                        image={authorImage?.author?.photo?.url!}
                        alt={authorImage?.author?.photo?.title!}
                        onLoad={(event) => onLoad(event)}
                        style={{
                           width: '100%',
                           height: 'auto',
                        }}
                     />
                  </CardActionArea>
               </Card>
            )}
         </Grid>
         <Grid item xs={12} sm={5}>
            <Box
               display="flex"
               flexDirection="column"
               height={heightImageComponent}
            >
               {/*Títulos*/}
               <Typography variant="h1" component="h1">
                  {author.fullName}
               </Typography>

               <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle2">Biography</Typography>
                  <Typography variant="body2">{author.biography}</Typography>
               </Box>

               <Box
                  sx={{
                     mt: 3,
                     flexGrow: 1,
                     overflowY: 'hidden',
                  }}
               >
                  <Typography variant="subtitle2">Entries</Typography>

                  {loading ? (
                     <AuthorEntriesSkeleton />
                  ) : (
                     <CustomScrollbar>
                        {data?.plantCollection?.items?.map((plant) => (
                           <Link
                              href={`/main/plants/${plant?.slug}`}
                              key={plant?.sys.id}
                              style={{
                                 color: 'inherit',
                              }}
                           >
                              <Typography
                                 variant="body2"
                                 sx={{
                                    ':hover': {
                                       fontWeight: 'bold',
                                    },
                                    marginTop: 0.7,
                                 }}
                              >
                                 {plant?.plantName}
                              </Typography>
                           </Link>
                        ))}
                     </CustomScrollbar>
                  )}
               </Box>
            </Box>
         </Grid>
      </Grid>
   );
};

export default AuthorComponent;

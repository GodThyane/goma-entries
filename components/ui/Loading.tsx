'use client';

import React from 'react';
import { Box, CircularProgress } from '@mui/material';

interface Props {
   fullScreen?: boolean;
}

const Loading = ({ fullScreen = false }: Props) => {
   return (
      <Box
         display="flex"
         flexDirection="column"
         justifyContent="center"
         alignItems="center"
         height={fullScreen ? 'calc(100vh - 200px)' : 'auto'}
      >
         <CircularProgress thickness={2} />
      </Box>
   );
};

export default Loading;

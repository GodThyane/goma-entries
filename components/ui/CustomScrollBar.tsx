import React, { FC } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { styled } from '@mui/material/styles';

interface CustomScrollbarProps {
   children: React.ReactNode;
}

const StyledScrollbar = styled(PerfectScrollbar)(({ theme }) => ({
   '& .ps__rail-x, & .ps__rail-y': {
      borderRadius: '4px',
   },
   '& .ps__thumb-x, & .ps__thumb-y': {
      borderRadius: '4px',
      backgroundColor: theme.palette.grey[400],
      transition: 'background-color 0.2s ease-in-out',
      '&:hover': {
         backgroundColor: theme.palette.grey[500],
      },
   },
}));

const CustomScrollbar: FC<CustomScrollbarProps> = ({ children }) => {
   return <StyledScrollbar>{children}</StyledScrollbar>;
};

export default CustomScrollbar;

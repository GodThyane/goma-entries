'use client';

import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';

interface CustomTabProps {
   children?: React.ReactNode;
   panels: CustomTabPanelProps[];
   ariaLabel?: string;
   variant?: 'fullWidth' | 'scrollable' | 'standard';
}

export interface CustomTabPanelProps {
   children?: React.ReactNode;
   label: string;
   icon: React.ReactElement;
}

interface TabPanelProps {
   children?: React.ReactNode;
   dir?: string;
   index: number;
   value: number;
}

function TabPanel(props: TabPanelProps) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`full-width-tabpanel-${index}`}
         aria-labelledby={`full-width-tab-${index}`}
         {...other}
      >
         {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
   );
}

const CustomTab = ({
   panels,
   ariaLabel,
   variant = 'standard',
   children,
}: CustomTabProps) => {
   const [value, setValue] = React.useState(0);

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };

   return (
      <>
         <Tabs
            value={value}
            onChange={handleChange}
            aria-label={ariaLabel}
            variant={variant}
            textColor="inherit"
         >
            {panels.map(({ icon, label }) => (
               <Tab icon={icon} label={label} key={`${label}-tab`} />
            ))}
         </Tabs>
         {children}
         {panels.map(({ children, label }, index) => (
            <TabPanel value={value} index={index} key={`${label}-panel`}>
               {children}
            </TabPanel>
         ))}
      </>
   );
};

export default CustomTab;

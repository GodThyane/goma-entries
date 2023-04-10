'use client';

import React, { useContext } from 'react';
import {
   AppBar,
   Box,
   Button,
   IconButton,
   Input,
   InputAdornment,
   Toolbar,
   Typography,
} from '@mui/material';
import Link from 'next/link';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ClearOutlined } from '@mui/icons-material';
import NavbarButtonCategory from '@/components/ui/NavbarButtonCategory';
import { useRouter } from 'next/navigation';
import { UIContext } from '@/context/ui';
import { Category } from '@/graphql/generated/schema';

interface Props {
   categories: Category[];
}

const Navbar = ({ categories }: Props) => {
   const {
      toggleSideMenu,
      search,
      changeSearchTerm,
      isVisibleSearch,
      toggleSearch,
   } = useContext(UIContext);

   const router = useRouter();

   const navigateTo = (url: string) => {
      router.push(url);
   };

   const onSearchTerm = () => {
      if (search.trim().length === 0) return;
      navigateTo(`/search/${search}`);
   };

   const onChangeSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
      changeSearchTerm(e.target.value);
   };

   const onKeyPressSearchTerm = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') onSearchTerm();
   };

   const onToggleSearch = () => {
      toggleSearch();
   };

   return (
      <AppBar>
         <Toolbar>
            <Link
               href="/"
               passHref
               style={{
                  color: 'black',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
               }}
            >
               <Typography variant="h6">Goma |</Typography>
               <Typography sx={{ ml: 0.5 }}>Entries</Typography>
            </Link>
            <Box flex={1} />
            <Box
               sx={{
                  display: isVisibleSearch
                     ? 'none'
                     : { sm: 'none', xs: 'none', md: 'block' },
               }}
            >
               {categories.map((category) => (
                  <NavbarButtonCategory
                     key={category.slug}
                     url={`/category/${category.slug}`}
                     text={category.title!}
                  />
               ))}
            </Box>
            <Box flex={1} />

            {/*Pantallas grandes*/}
            {isVisibleSearch ? (
               <Input
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                  className="fadeIn"
                  autoFocus
                  value={search}
                  onChange={onChangeSearchTerm}
                  onKeyPress={onKeyPressSearchTerm}
                  type="text"
                  placeholder="Buscar..."
                  endAdornment={
                     <InputAdornment position="end">
                        <IconButton onClick={onToggleSearch}>
                           <ClearOutlined />
                        </IconButton>
                     </InputAdornment>
                  }
               />
            ) : (
               <IconButton
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                  className="fadeIn"
                  onClick={onToggleSearch}
               >
                  <SearchOutlinedIcon />
               </IconButton>
            )}

            {/*Pantallas pequeñas*/}
            <IconButton
               sx={{ display: { xs: 'flex', sm: 'none' } }}
               onClick={toggleSideMenu}
            >
               <SearchOutlinedIcon />
            </IconButton>

            {/*<Link href="/cart" passHref>
                    <IconButton>
                        <Badge
                            badgeContent={numberOfItems > 9 ? '+9' : numberOfItems}
                            color="secondary"
                        >
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </Link>*/}
            <Button onClick={toggleSideMenu}>Menú</Button>
         </Toolbar>
      </AppBar>
   );
};

export default Navbar;

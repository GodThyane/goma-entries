'use client';

import React, { useContext, useMemo } from 'react';
import {
   Box,
   Drawer,
   List,
   ListItem,
   Input,
   InputAdornment,
   IconButton,
   ListItemIcon,
   ListItemText,
   ListItemButton,
   Divider,
   ListSubheader,
} from '@mui/material';
import {
   AccountCircleOutlined,
   AdminPanelSettings,
   CategoryOutlined,
   ConfirmationNumberOutlined,
   DashboardOutlined,
   LocalFloristOutlined,
   LoginOutlined,
   VpnKeyOutlined,
   AppRegistrationOutlined,
} from '@mui/icons-material';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { usePathname, useRouter } from 'next/navigation';
import { UIContext } from '@/context/ui';
import { Category } from '@/graphql/generated/schema';
import { AuthContext } from '@/context/auth';

interface Props {
   categories: Category[];
}

const SideMenu = ({ categories }: Props) => {
   const { isLoggedIn, user, logout } = useContext(AuthContext);

   const pathName = usePathname();

   const { isMenuOpen, toggleSideMenu, search, changeSearchTerm } =
      useContext(UIContext);

   const router = useRouter();

   const navigateTo = (url: string) => {
      toggleSideMenu();
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

   const notShowWhenNotLoggedIn = useMemo(
      () => ({
         display: isLoggedIn ? '' : 'none',
      }),
      [isLoggedIn]
   );

   const notShowWhenNotAdmin = useMemo(
      () => ({
         display: isLoggedIn && user?.role === 'admin' ? '' : 'none',
      }),
      [isLoggedIn, user]
   );

   const logoutUser = () => {
      logout();
      toggleSideMenu();
   };

   return (
      <Drawer
         open={isMenuOpen}
         anchor="right"
         sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
         onClose={toggleSideMenu}
      >
         <Box sx={{ width: 250, paddingTop: 5 }}>
            <List>
               <ListItem>
                  <Input
                     autoFocus
                     value={search}
                     onChange={onChangeSearchTerm}
                     onKeyPress={onKeyPressSearchTerm}
                     type="text"
                     placeholder="Buscar..."
                     endAdornment={
                        <InputAdornment position="end">
                           <IconButton onClick={onSearchTerm}>
                              <SearchOutlined />
                           </IconButton>
                        </InputAdornment>
                     }
                  />
               </ListItem>

               <Box sx={notShowWhenNotLoggedIn}>
                  <ListItemButton>
                     <ListItemIcon>
                        <AccountCircleOutlined />
                     </ListItemIcon>
                     <ListItemText primary={'Perfil'} />
                  </ListItemButton>

                  <ListItemButton onClick={() => navigateTo('/orders/history')}>
                     <ListItemIcon>
                        <ConfirmationNumberOutlined />
                     </ListItemIcon>
                     <ListItemText primary={'Mis Ordenes'} />
                  </ListItemButton>
               </Box>

               <Box sx={{ display: { xs: '', sm: '', md: 'none' } }}>
                  {categories.map((category) => (
                     <ListItemButton
                        key={category.slug}
                        onClick={() =>
                           navigateTo(`/main/category/${category.slug}`)
                        }
                     >
                        <ListItemIcon>
                           <LocalFloristOutlined />
                        </ListItemIcon>
                        <ListItemText primary={category.title} />
                     </ListItemButton>
                  ))}
               </Box>

               {!isLoggedIn ? (
                  <>
                     <ListItemButton
                        onClick={() => navigateTo(`/auth/login?p=${pathName}`)}
                     >
                        <ListItemIcon>
                           <VpnKeyOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Ingresar'} />
                     </ListItemButton>
                     <ListItemButton
                        onClick={() =>
                           navigateTo(`/auth/register?p=${pathName}`)
                        }
                     >
                        <ListItemIcon>
                           <AppRegistrationOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Registrarse'} />
                     </ListItemButton>
                  </>
               ) : (
                  <ListItemButton onClick={logoutUser}>
                     <ListItemIcon>
                        <LoginOutlined />
                     </ListItemIcon>
                     <ListItemText primary={'Salir'} />
                  </ListItemButton>
               )}

               {/* Admin */}

               <Box sx={notShowWhenNotAdmin}>
                  <Divider />
                  <ListSubheader>Admin Panel</ListSubheader>

                  <ListItemButton
                     onClick={() => navigateTo('/admin/dashboard')}
                  >
                     <ListItemIcon>
                        <DashboardOutlined />
                     </ListItemIcon>
                     <ListItemText primary={'Dashboard'} />
                  </ListItemButton>

                  <ListItemButton onClick={() => navigateTo('/admin/products')}>
                     <ListItemIcon>
                        <CategoryOutlined />
                     </ListItemIcon>
                     <ListItemText primary={'Productos'} />
                  </ListItemButton>
                  <ListItemButton onClick={() => navigateTo('/admin/orders')}>
                     <ListItemIcon>
                        <ConfirmationNumberOutlined />
                     </ListItemIcon>
                     <ListItemText primary={'Ordenes'} />
                  </ListItemButton>

                  <ListItemButton onClick={() => navigateTo('/admin/users')}>
                     <ListItemIcon>
                        <AdminPanelSettings />
                     </ListItemIcon>
                     <ListItemText primary={'Usuarios'} />
                  </ListItemButton>
               </Box>
            </List>
         </Box>
      </Drawer>
   );
};

export default SideMenu;

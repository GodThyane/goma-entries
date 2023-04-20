'use client';

import React, { useContext, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
   Box,
   Button,
   Chip,
   CircularProgress,
   Grid,
   TextField,
   Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { ErrorOutline } from '@mui/icons-material';
import Link from 'next/link';
import { AuthContext } from '@/context/auth';

type FormData = {
   name: string;
   email: string;
   password: string;
};

const Register = () => {
   const searchParams = useSearchParams();
   const { register: registerC } = useContext(AuthContext);

   const [showError, setShowError] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');
   const [loading, setLoading] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormData>();

   const onRegister = async ({ name, email, password }: FormData) => {
      setLoading(true);
      const { error } = await registerC(email, password, name);
      setLoading(false);
      if (error) {
         setShowError(true);
         setErrorMessage(error.message);
         setTimeout(() => {
            setShowError(false);
         }, 3000);
      }
   };

   return (
      <form onSubmit={handleSubmit(onRegister)} noValidate>
         <Box sx={{ width: 350, padding: '10px 20px' }}>
            <Grid container spacing={2}>
               <Grid item xs={12}>
                  <Typography variant="h1" component="h1">
                     Crear cuenta
                  </Typography>
                  <Chip
                     label={errorMessage}
                     color="error"
                     icon={<ErrorOutline />}
                     className="fadeIn"
                     sx={{ display: showError ? 'flex' : 'none', marginTop: 1 }}
                  />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     label="Nombre de usuario"
                     variant="filled"
                     fullWidth
                     {...register('name', {
                        required: 'El nombre de usuario es requerido',
                        minLength: {
                           value: 3,
                           message:
                              'El nombre de usuario debe tener al menos 3 caracteres',
                        },
                        pattern: {
                           // No puede contener espacios, ni caracteres especiales, pero si guiones, tildes y ñ
                           value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ_-]*$/,
                           message:
                              'El nombre de usuario no puede contener espacios, ni caracteres especiales.',
                        },
                     })}
                     error={!!errors.name}
                     helperText={errors.name?.message}
                  ></TextField>
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     type="email"
                     label="Correo electrónico"
                     variant="filled"
                     fullWidth
                     {...register('email', {
                        required: 'El correo es requerido',
                        pattern: {
                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                           message: 'El correo no es válido',
                        },
                     })}
                     error={!!errors.email}
                     helperText={errors.email?.message}
                  ></TextField>
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     label="Contraseña"
                     type="password"
                     variant="filled"
                     fullWidth
                     {...register('password', {
                        required: 'La contraseña es requerida',
                        minLength: {
                           value: 6,
                           message:
                              'La contraseña debe tener al menos 6 caracteres',
                        },
                     })}
                     error={!!errors.password}
                     helperText={errors.password?.message}
                  ></TextField>
               </Grid>

               <Grid item xs={12}>
                  <Button
                     type="submit"
                     color="secondary"
                     className="circular-btn"
                     size="large"
                     fullWidth
                     disabled={loading || showError}
                  >
                     {loading ? (
                        <CircularProgress thickness={1} size={25} />
                     ) : (
                        'Registrarse'
                     )}
                  </Button>
               </Grid>
               <Grid item xs={12} display="flex" justifyContent="end">
                  <Link
                     href={
                        searchParams
                           ? searchParams.get('p')
                              ? `/auth/login?p=${searchParams.get('p')}`
                              : '/auth/login'
                           : '/auth/login'
                     }
                     passHref
                     style={{ color: 'black' }}
                  >
                     ¿Ya tienes una cuenta?
                  </Link>
               </Grid>
            </Grid>
         </Box>
      </form>
   );
};

export default Register;

'use client';

import React, { useRef, useState } from 'react';
import {
   Box,
   Button,
   Card,
   CardActionArea,
   CardMedia,
   Chip,
   CircularProgress,
   FormLabel,
   Grid,
   IconButton,
   TextField,
   Typography,
} from '@mui/material';
import './CreateEntry.css';
import { convertToRaw, EditorState } from 'draft-js';
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useForm } from 'react-hook-form';
import { UploadOutlined } from '@mui/icons-material';
import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon';

type FormData = {
   plantName: string;
   description: string;
   category: string;
   cover: File | undefined;
};

const Editor = dynamic(
   () => import('react-draft-wysiwyg').then((module) => module.Editor),
   { ssr: false } // Este módulo se cargará solo en el lado del cliente
);

const CreateEntry = () => {
   const fileInputRef = useRef<HTMLInputElement>(null);

   const [editorState, setEditorState] = useState(EditorState.createEmpty());
   const [loading, setLoading] = useState(false);
   const {
      register,
      handleSubmit,
      formState: { errors },
      getValues,
      setValue,
      watch,
   } = useForm<FormData>();
   const onSubmit = (data: any) => {
      const rawContentState = convertToRaw(editorState.getCurrentContent());
      const stringifyContent = JSON.stringify(rawContentState);
      console.log({ data });
   };

   const onFileSelected = async ({
      target,
   }: React.ChangeEvent<HTMLInputElement>) => {
      if (!target.files || target.files.length === 0) return;

      try {
         const files = Array.from(target.files);
         const file = files[0];
         const formData = new FormData();
         formData.append('file', file);
         setValue('cover', file, {
            shouldValidate: true,
         });
      } catch (e) {
         console.log({ e });
      }
   };

   const handleRemoveCover = () => {
      setValue('cover', undefined, {
         shouldValidate: true,
      });
   };

   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Box
               sx={{
                  padding: '10px 20px',
               }}
            >
               <Grid container spacing={2}>
                  <Grid item xs={12}>
                     <Typography variant="h1" component="h1">
                        Creación de entrada
                     </Typography>
                     {/*<Chip
                        label="No reconocemos ese usuario / contraseña"
                        color="error"
                        icon={<ErrorOutline />}
                        className="fadeIn"
                        sx={{ display: showError ? 'flex' : 'none', marginTop: 1 }}
                     />*/}
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        type="text"
                        label="Título"
                        variant="filled"
                        fullWidth
                        {...register('plantName', {
                           required: 'El título es requerido',
                        })}
                        error={!!errors.plantName}
                        helperText={errors.plantName?.message}
                        autoFocus
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <Box className="myEditor">
                        <Editor
                           editorState={editorState}
                           onEditorStateChange={setEditorState}
                           // Modificar el line-height
                           toolbar={{
                              options: ['inline', 'blockType', 'list', 'link'],
                              inline: {
                                 options: ['bold', 'italic', 'underline'],
                              },
                              blockType: {
                                 options: ['Blockquote'],
                              },
                              list: {
                                 options: ['unordered', 'ordered'],
                              },
                           }}
                        />
                     </Box>
                  </Grid>
                  <Grid item xs={12}>
                     <Box display="flex" flexDirection="column">
                        <FormLabel sx={{ mb: 1 }}>Portada</FormLabel>
                        <Button
                           color="secondary"
                           fullWidth
                           startIcon={<UploadOutlined />}
                           sx={{ mb: 3 }}
                           onClick={() => fileInputRef.current?.click()}
                        >
                           Cargar imagen
                        </Button>
                        <input
                           ref={fileInputRef}
                           type="file"
                           multiple
                           accept="image/png, image/jpeg, image/gif"
                           style={{ display: 'none' }}
                           onChange={onFileSelected}
                        />

                        <Chip
                           label="Es necesario cargar la imagen"
                           color="error"
                           variant="outlined"
                           className="fadeIn"
                           sx={{
                              display:
                                 getValues('cover') == null ? 'flex' : 'none',
                           }}
                        />

                        {getValues('cover') && (
                           /*Centrar card con un width del 50%*/
                           <Card
                              sx={{
                                 width: '90%',
                                 margin: 'auto',
                                 position: 'relative',
                              }}
                           >
                              <CardMedia
                                 component="img"
                                 className="fadeIn"
                                 image={URL.createObjectURL(
                                    getValues('cover') as File
                                 )}
                                 alt="cover"
                                 style={{
                                    width: '100%',
                                    height: 'auto',
                                 }}
                              />
                              <IconButton
                                 onClick={handleRemoveCover}
                                 sx={{ position: 'absolute', top: 0, right: 0 }}
                              >
                                 <CloseIcon />
                              </IconButton>
                           </Card>
                        )}
                     </Box>
                  </Grid>
                  <Grid item xs={12}>
                     <Button
                        type="submit"
                        color="primary"
                        className="circular-btn"
                        size="large"
                        fullWidth
                        /*disabled={loading || showError}*/
                     >
                        {loading ? (
                           <CircularProgress thickness={1} size={25} />
                        ) : (
                           'Crear entrada'
                        )}
                     </Button>
                  </Grid>
               </Grid>
            </Box>
         </form>
      </>
   );
};

export default CreateEntry;

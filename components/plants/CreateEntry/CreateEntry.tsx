'use client';

import React, { useState } from 'react';
import {
   Box,
   Button,
   CircularProgress,
   Grid,
   TextField,
   Typography,
} from '@mui/material';
import './CreateEntry.css';
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useForm } from 'react-hook-form';

type FormData = {
   plantName: string;
   description: string;
   category: string;
};
const CreateEntry = () => {
   const [editorState, setEditorState] = useState(EditorState.createEmpty());
   const [loading, setLoading] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormData>();
   const onSubmit = (data: any) => {
      const rawContentState = convertToRaw(editorState.getCurrentContent());
      const stringifiedContent = JSON.stringify(rawContentState);
      console.log(stringifiedContent);
      // Aquí tendrías el estado del editor como `data.description`.
      // Puedes convertirlo al formato que necesites para tu backend.
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

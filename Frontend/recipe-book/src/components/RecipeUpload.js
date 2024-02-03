import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function UploadRecipeImage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await fetch('YOUR_BACKEND_UPLOAD_URL', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Image upload successful');
      } else {
        console.error('Image upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Upload Image
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <input
              accept="image/*"
              id="contained-button-file"
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                component="span"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
              >
                Choose File
              </Button>
            </label>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Upload
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
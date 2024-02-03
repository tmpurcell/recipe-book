import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function UploadRecipeImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showMessage, setShowMessage] = useState(false); // State to manage message box visibility

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file)); // Create a preview URL for the selected image
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    try {
      setShowMessage(true); // Show the message box when uploading starts

      const formData = new FormData();
      formData.append('filename', selectedFile.name); // Only append the file name to the FormData

      const response = await fetch('http://127.0.0.1:8000/image_upload', {
        method: 'POST',
        body: formData,
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        },
      });

      if (response.ok) {
        console.log('Image upload successful');
      } else {
        console.error('Image upload failed');
      }

      setShowMessage(false); // Hide the message box when upload is complete
    } catch (error) {
      console.error('Error uploading image:', error);
      setShowMessage(false); // Hide the message box if there's an error
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
          {previewUrl && ( // Show the preview if the previewUrl is available
            <Box sx={{ mt: 2 }}>
              <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
          )}
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
          {uploadProgress > 0 && (
            <Box sx={{ width: '100%', mt: 2 }}>
              <LinearProgress variant="determinate" value={uploadProgress} />
            </Box>
          )}
          {showMessage && ( // Show the message box if showMessage is true
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '20px',
                borderRadius: '5px',
              }}
            >
              <Typography variant="body1" align="center">
                Gathering Information...
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
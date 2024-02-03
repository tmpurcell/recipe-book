import * as React from 'react';
import { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';

const UploadRecipe = () => { // Change function name to start with capital letter
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Implement your upload logic here using the selectedFile
      console.log('File selected:', selectedFile);
      // You can send the file to your server for processing here
    } else {
      console.error('No file selected');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Upload a Picture
      </Typography>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={handleUpload}>
        Upload
      </Button>
    </Container>
  );
};

export default UploadRecipe;
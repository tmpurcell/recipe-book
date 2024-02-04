import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RecipeModel from '../models/RecipeModel';
import { useRecipeContext } from '../recipeContext';
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, TextField, Paper, styled } from '@mui/material';

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  variant: 'outlined',
  margin: '11px',
  backgroundColor: '#fff0e0',
  color: '#004921'
});
const defaultTheme = createTheme();

export default function UploadRecipeImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showMessage, setShowMessage] = useState(false); // State to manage message box visibility
  const [showConfirmation, setShowConfirmation] = useState(false); // State to manage confirmation dialog visibility
  const { addRecipe } = useRecipeContext();
  const navigate = useNavigate()
  const [title, setRecipeTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file)); // Create a preview URL for the selected image
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const recipeInstance = new RecipeModel(title, ingredients.split(','), steps.split(','));
    
    addRecipe(recipeInstance);

    setRecipeTitle('');
    setIngredients('');
    setSteps('');

    console.log({ title, ingredients, steps });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    try {
      setShowMessage(true); // Show the message box when uploading starts

      const dataToSend = {
        filename: selectedFile.name, // Create an object with the file name
      };

      const response = await fetch('http://127.0.0.1:8000/image_upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Corrected content type
        },
        body: JSON.stringify(dataToSend),
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        },
      });

      if (response.ok) {
        console.log('Image upload successful');
        setShowConfirmation(true); // Show confirmation dialog
      } else {
        console.error('Image upload failed');
      }
      const responseBody = await response.json();

      const recipeInstance = new RecipeModel(
        responseBody.title,
        responseBody.ingredients,
        responseBody.steps
      );

      addRecipe(recipeInstance);
      console.log('Recipe Model Instance:', recipeInstance);

      setShowMessage(false); // Hide the message box when upload is complete
    } catch (error) {
      console.error('Error uploading image:', error);
      setShowMessage(false); // Hide the message box if there's an error
    }
  };

  const handleViewRecipe = () => {
    navigate('/viewRecipes')
  };

  const handleAddAnotherRecipe = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setShowConfirmation(false); // Close the confirmation dialog
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="strech">
      {/* First Card */}
      <Grid item xs={12} sm={6}>
        <StyledCard>
          <CardContent>
          <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs" sx={{ height: '100%' }}>
          <Paper elevation={3} style={{ padding: 20, marginTop: 20, backgroundColor:'#fff0e0' }}>
        <CssBaseline />
        <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center', // Center horizontally
              height: '100%', // Make sure the Box takes full height
            }}
        >
          <Typography component="h1" variant="h5">
            Upload an image of your recipe to add it to your recipies book!
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
              <Button variant="contained" component="span" fullWidth sx={{ mt: 3, mb: 2, backgroundColor: '#004921','&:hover':{backgroundColor: '#004921'} }}>
                Choose File
              </Button>
            </label>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2, backgroundColor: '#004921','&:hover':{backgroundColor: '#004921'} }}>
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
          {showConfirmation && (
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                padding: '20px',
                borderRadius: '5px',
                border: '2px solid #000', // Add a border with 2px width and black color
                zIndex: 9999,
              }}
            >
              <Typography variant="body1" align="center">
                Recipe added!
              </Typography>
              <br />
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button onClick={handleViewRecipe} variant="outlined" sx={{ mr: 2 }}>
                  View recipies
                </Button>
                <Button onClick={handleAddAnotherRecipe} variant="outlined">
                  Close
                </Button>
              </Box>
            </Box>
          )}
        </Box>
        </Paper>
      </Container>
    </ThemeProvider>
          </CardContent>
        </StyledCard>
      </Grid>
            {/* Second Card */}
            <Grid item xs={12} sm={6}>
        <StyledCard>
          <CardContent style={{ height:'100%' }}>
          <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: 20, marginTop: 20, backgroundColor:'#fff0e0' }}>
        <Typography variant="h4" gutterBottom>
          Add a New Recipe
        </Typography>
        <form style={{backgroundColor: '#fff0e0', color: '#004921'}} onSubmit={handleSubmitForm}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Recipe Title"
                variant="outlined"
                value={title}
                onChange={(e) => setRecipeTitle(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Ingredients"
                variant="outlined"
                multiline
                rows={4}
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Steps"
                variant="outlined"
                multiline
                rows={6}
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" sx={{backgroundColor: '#004921','&:hover':{backgroundColor: '#004921'}}}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
          </CardContent>
        </StyledCard>
      </Grid>
    </Grid>
  );
}
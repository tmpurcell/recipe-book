import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function AIKitchen() {
    return (
        <div className='meal-ai-container'>
            <div class='AI-container'>
                <Box sx={{ width: 'auto', p: 4 }}>
                    <Button
                        component={Link}
                        to="/mealprep"
                        variant="contained"
                        sx={{
                            backgroundColor: '#fff0e0',
                            color: '#004921', '&:hover': {backgroundColor: '#004921'},
                            px: 4, // horizontal padding
                            py: 2, // vertical padding
                            mr: 2, // right margin
                        }}
                    >
                        Meal Prep
                    </Button>
                    <Button
                        component={Link}
                        to="/budgetplan"
                        variant="contained"
                        sx={{
                            backgroundColor: '#fff0e0',
                            color: '#004921', '&:hover': {backgroundColor: '#004921'},
                            px: 4, // horizontal padding
                            py: 2, // vertical padding
                            mr: 2, // right margin
                        }}
                    >
                        Budget Plan
                    </Button>
                    <Button
                        component={Link}
                        to="/mealsuggestion"
                        variant="contained"
                        sx={{
                            backgroundColor: '#fff0e0',
                            color: '#004921', '&:hover': {backgroundColor: '#004921'},
                            px: 4, // horizontal padding
                            py: 2, // vertical padding
                            mr: 2, // right margin
                        }}
                    >
                        Meal Suggestion
                    </Button>
                    <Button
                        component={Link}
                        to="/availableitems"
                        variant="contained"
                        sx={{
                            backgroundColor: '#fff0e0',
                            color: '#004921', '&:hover': {backgroundColor: '#004921'},
                            px: 4, // horizontal padding
                            py: 2, // vertical padding
                            mr: 2, // right margin
                        }}
                    >
                        What I Have Available
                    </Button>
                    <Typography component='h1' style={{ color: 'transparent' }}> filler </Typography>
                    <Typography variant='h3' component='h1' style={{color: '#004921'}}>
                        Welcome to the AI Kitchen!
                    </Typography>
                    <Typography component='h1' style={{ color: 'transparent' }}> filler </Typography>
                </Box>
            </div>
        </div>
    );
}
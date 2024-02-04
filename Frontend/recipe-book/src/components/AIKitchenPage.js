import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function AIKitchen() {
    return (
        <Box sx ={{ width: 'auto', bgcolor: 'gray', p: 4}}>
            <Button component={Link} to="/mealprep" variant="contained" sx={{ backgroundColor: 'black', color: 'white' }}>
                Meal Prep
            </Button>
            <Button component={Link} to="/budgetplan" variant="contained" sx={{ backgroundColor: 'black', color: 'white' }}>
                Budget Plan
            </Button>
            <Button component={Link} to="/mealsuggestion" variant="contained" sx={{ backgroundColor: 'black', color: 'white' }}>
                Meal Suggestion
            </Button>
            <Button component={Link} to="/availableitems" variant="contained" sx={{ backgroundColor: 'black', color: 'white' }}>
                What I Have Available
            </Button>
            <Typography component = 'h1' style={{ color: 'transparent'}}> filler </Typography>
                <Typography variant='h3' component='h1'>
                    Welcome to the AI Kitchen!
                </Typography>
                <Typography component = 'h1' style={{ color: 'transparent'}}> filler </Typography>
        </Box>
    );
}

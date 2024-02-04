import * as React from 'react';
import AIKitchen from '../components/AIKitchenPage';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';


function MealAI() {
  return (
    <div>
        <AIKitchen />
        <Box sx ={{ width: 'auto', bgcolor: 'gray', p: 4}}>
          <Typography variant = 'h4' component='h1'>
                    Please use the buttons to select a tool to use! 
          </Typography>
        </Box>
    </div>
  );
}

export default MealAI;
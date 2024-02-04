import * as React from 'react';
import AIKitchen from '../components/AIKitchenPage';
import '../App.css'

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';


function MealAI() {
  return (
      <div className='AI-container-2'>
        <AIKitchen />
        <Box sx={{ width: 'auto', p: 4 }}>
          <Typography variant='h4' component='h1' style={{color: '#004921'}}>
            Please use the buttons to select a tool to use!
          </Typography>
        </Box>
      </div>
  );
}

export default MealAI;
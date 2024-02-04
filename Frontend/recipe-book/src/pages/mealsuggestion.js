import React, { useState } from 'react';
import AIKitchen from '../components/AIKitchenPage';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function MealSuggestion() {
    const [foodType, setFoodType] = useState('');

    const dataToSend = {
        prompt: foodType, 
      }; 

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Send the form data to the backend
        try {
            const response = await fetch('http://127.0.0.1:8000/meal_suggestions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            });

            if (response.ok) {
                // Handle success, maybe show a success message
                console.log('Form submitted successfully');
            } else {
                // Handle error, maybe show an error message
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <AIKitchen />
            <form onSubmit={handleFormSubmit}>
                <TextField
                    label="What are you in the mood for?"
                    variant="outlined"
                    value={foodType}
                    onChange={(event) => setFoodType(event.target.value)}
                    fullWidth
                    margin="normal"
                    sx={{ backgroundColor: 'white', '& input': { color: 'black' } }}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ backgroundColor: 'black', color: 'white' }}>
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default MealSuggestion;
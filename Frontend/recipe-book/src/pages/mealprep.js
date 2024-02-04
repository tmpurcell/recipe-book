import React, { useState } from 'react';
import AIKitchen from '../components/AIKitchenPage';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function MealPrep() {
    const [foodType, setFoodType] = useState('');
    const [prepDuration, setprepDuration] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Send the form data to the backend
        try {
            const response = await fetch('http://127.0.0.1:8000/meal_prep', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ foodType, prepDuration })
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
                    label="What are you trying to meal prep?"
                    variant="outlined"
                    value={foodType}
                    onChange={(event) => setFoodType(event.target.value)}
                    fullWidth
                    margin="normal"
                    sx={{ backgroundColor: 'white', '& input': { color: 'black' } }}
                />
                <TextField
                    label="How many days are you meal prepping for?"
                    variant="outlined"
                    value={prepDuration}
                    onChange={(event) => setprepDuration(event.target.value)}
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

export default MealPrep;
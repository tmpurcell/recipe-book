import React, { useState } from 'react';
import AIKitchen from '../components/AIKitchenPage';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function AvailableItems() {
    const [ingredients, setIngredients] = useState('');
    const [loading, setLoading] = useState(false);
    const [responseText, setResponseText] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const dataToSend = {
            prompt: ingredients,
        };

        setLoading(true);

        try {
            const response = await fetch('http://127.0.0.1:8000/available_items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            });

            if (response.ok) {
                const responseData = await response.json();
                setResponseText(responseData.content); // Assuming the response contains a "text" field
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <AIKitchen />
            <form onSubmit={handleFormSubmit}>
                <TextField
                    label="Enter available ingredients (separated by commas)"
                    variant="outlined"
                    value={ingredients}
                    onChange={(event) => setIngredients(event.target.value)}
                    fullWidth
                    margin="normal"
                    sx={{ backgroundColor: 'white', '& input': { color: 'black' } }}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ backgroundColor: 'black', color: 'white' }}>
                    Submit
                </Button>
            </form>
                <div style={{ marginTop: '20px' }}> {/* Add margin to create space */}
                    {loading && <CircularProgress />} {/* Show loading icon if loading state is true */}
                </div>
                <div>
                    <FormattedText text={responseText} />
                </div>
            </div>
    );
}

function FormattedText({ text }) {
    // Check if text is empty or undefined
    if (!text) return null;

    // Split the text into sections
    const sections = text.split(/Sure!|Ingredients|Instructions/);

    // Organize the text into structured recipe
    const structuredRecipe = {
        mealItem: sections[1]?.trim(),
        ingredients: sections[2]?.trim(),
        steps: sections[3]?.trim(),
    };

    // Display the formatted recipe
    return (
        <div>
            <h2>{structuredRecipe.mealItem}</h2>
            <h2>Ingredients</h2>
            <p>{structuredRecipe.ingredients}</p>
            <h2>Steps</h2>
            <p>{structuredRecipe.steps}</p>
            
        </div>
    );
}
export default AvailableItems;
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAIRecipeContext } from '../aiRecipeContext';
import RecipeModel from '../models/RecipeModel';
import { useNavigate } from 'react-router-dom';

const AddRecipeButton = ({ recipeName, ingredients, steps }) => {
    const [open, setOpen] = useState(false);
    const { addAIRecipe } = useAIRecipeContext();
    const navigate = useNavigate();

    const handleAddToMyRecipes = () => {
        const recipeInstance = new RecipeModel(
            recipeName,
            ingredients,
            steps
        );
        addAIRecipe(recipeInstance);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleTakeMeThere = () => {
        navigate('/viewRecipes'); 
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" style={{ color: '#004921', backgroundColor: '#fff0e0' }} onClick={handleAddToMyRecipes}>
                Add to My Recipes
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{backgroundColor: '#fff0e0'}}>{"Recipe Added!"} </DialogTitle>
                <DialogContent sx={{backgroundColor: '#fff0e0'}}>
                    <DialogContentText id="alert-dialog-description" style={{color: '#004921'}}>
                        This recipe has been added to your recipes.
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{justifyContent: 'center', backgroundColor: '#fff0e0'}}>
                    <Button onClick={handleClose} style={{color: '#004921', backgroundColor: '#fff0e0'}}>
                        Close
                    </Button>
                    <Button onClick={handleTakeMeThere} style={{color: '#004921', backgroundColor: '#fff0e0'}}>
                        Take me there!
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default AddRecipeButton;
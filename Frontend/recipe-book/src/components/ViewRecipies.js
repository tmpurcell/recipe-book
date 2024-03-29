import React from 'react';
import { Grid, Card, CardContent, styled } from '@mui/material';
import { useRecipeContext } from '../recipeContext';
import { useAIRecipeContext } from '../aiRecipeContext';

const StyledCard = styled(Card)({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    variant: 'outlined',
    margin: '11px',
    backgroundColor: '#fff0e0',
    color: '#004921'
  });

const ViewRecipes = () => {
    const { recipeList } = useRecipeContext();
    const { aiRecipeList } = useAIRecipeContext();
  return (
    <Grid container spacing={1}>
      {recipeList.map((recipe) => (
        <Grid key={recipe.id} item xs={12} sm={6} >
           <StyledCard>
             <CardContent>
             <div>
           <h3 style={{color: '#004921'}}>{recipe.title}</h3>
           <div>
             <strong>Ingredients:</strong>
             <br></br>
             {recipe.ingredients.map((ingredient, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />} {/* Add a newline after the first ingredient */}
                {ingredient}
              </React.Fragment>
            ))}
          </div>
          <div>
            <br></br>
            <strong>Steps:</strong>
            <br></br>
            {recipe.steps}
          </div>
        </div>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
        {aiRecipeList.map((recipe) => (
        <Grid key={recipe.id} item xs={12} sm={6}>
          <StyledCard>
            <CardContent>
              <div>
              <h3 style={{color:'#004921'}}>{recipe.title}</h3>
           <div>
             <strong>Ingredients:</strong>
             <br></br>
             {recipe.ingredients}
          </div>
          <div>
            <br></br>
            <strong>Steps:</strong>
            <br></br>
            {recipe.steps}
          </div>
              </div>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default ViewRecipes;

import React from 'react';
import { Grid, Card, CardContent, styled } from '@mui/material';
import { useRecipeContext } from '../recipeContext';

const StyledCard = styled(Card)({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    variant: 'outlined',
    margin: '11px',
  });

const ViewRecipes = () => {
    const { recipeList } = useRecipeContext();
  return (
    <Grid container spacing={1}>
      {recipeList.map((recipe) => (
        <Grid key={recipe.id} item xs={12} sm={6} >
           <StyledCard>
             <CardContent>
             <div>
           <h3>{recipe.title}</h3>
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
    </Grid>
  );
};

export default ViewRecipes;

import React from 'react'
import { RecipeCard, RecipeHeader, Button, RecipeImage } from './HomeStyles';
import defaultImage from "../../assets/default-image.jpg"
import { useNavigate } from 'react-router-dom';

const Cards = ({recipe}) => {

  let navigate = useNavigate();

  const handleMoreInfo = () => {
      navigate ("/details", {state: {recipe}} )
  }

  return (
      <RecipeCard>
        <RecipeHeader>{recipe.label} </RecipeHeader>
        <RecipeImage src={recipe?.image || defaultImage} />
        <Button onClick={handleMoreInfo}>View More</Button>
      </RecipeCard>
  
  )
}

export default Cards
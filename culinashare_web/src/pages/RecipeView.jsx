import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeView = () => {
  const {recipeId} = useParams();
  const backendUrl = process.env.REACT_APP_BASE_API_URL;
  const [recipe , setRecipe] = useState({});
  const[ingredients , setIngredients] = useState([]);

  const fetchRecipe = async() =>{
    const response = await fetch(`${backendUrl}/food/recipies/recipe=${recipeId}`);
    const responseData = await response.json();
    setRecipe(responseData)
    
  }
  const fetchIngredients = async() =>{
    const allIngredients = await fetch(`${backendUrl}/food/ingredients/recipe=${recipeId}`);
    const ingredientData = await allIngredients.json();
    setIngredients(ingredientData);
  
  }

  useEffect(() =>{
    fetchRecipe();
    fetchIngredients();
  },[])


  return (
    <div className='mt-16 p-8 h-[70vh] flex justify-center bg-[#F0F8FF] gap-4'>
      <div className='bg-white/80 h-full w-[70%] backdrop-blur-md shadow-md rounded-lg p-8'>
        <p className='text-4xl font-bold text-orange-600'>{recipe.title}</p>
          <p>{recipe.description}</p>

      </div>
      <div className='bg-white/80 h-full w-[25%] backdrop-blur-md shadow-md rounded-lg p-8'>
        
          
      </div>
    </div>
  )
}

export default RecipeView
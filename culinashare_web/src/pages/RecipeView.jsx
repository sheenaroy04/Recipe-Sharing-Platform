import React from 'react'
import { useParams } from 'react-router-dom'

const RecipeView = () => {
  const {recipeId} = useParams();
  return (
    <div className='w-[100vw] min-h-[60vh] flex items-center justify-center'>
      RecipeView {recipeId}
    </div>
  )
}

export default RecipeView
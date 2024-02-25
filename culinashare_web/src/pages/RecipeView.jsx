import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Procedure from '../components/RecipeViewComponent/Procedure';

const RecipeView = () => {
  const {recipeId} = useParams();
  const backendUrl = process.env.REACT_APP_BASE_API_URL;
  const [recipe , setRecipe] = useState({});
  const[ingredients , setIngredients] = useState([]);
  const[procedure , setProcedure] = useState([])
  const[comments,setComments] = useState([]);
  

  const fetchRecipe = async() =>{
    const response = await fetch(`${backendUrl}/food/recipies/recipe=${recipeId}`);
    const responseData = await response.json();
    setProcedure(responseData.procedure.split('.'))
    setRecipe(responseData)
    
  }
  const fetchIngredients = async() =>{
    const allIngredients = await fetch(`${backendUrl}/food/ingredients/recipe=${recipeId}`);
    const ingredientData = await allIngredients.json();
    // console.log(ingredientData);
    setIngredients(ingredientData);
  
  }

  const fetchComments = async() =>{
    const response = await fetch(`${backendUrl}/food/ratings/${recipeId}`);
    const responseData = await response.json();
    setComments(responseData.data);
  }

  useEffect(() =>{
    fetchRecipe();
    fetchIngredients();
    fetchComments();
  },[])


  return (
    <>
    <div className='mt-16 p-8 min-h-[70vh] grid w-[100vw] lg:grid-cols-[70%_25%] grid-cols-1 bg-[#F0F8FF]  place-items-center gap-8'>
      
      <div className='bg-white/80 h-full w-full  backdrop-blur-md shadow-md rounded-lg p-8  '>
        <Procedure recipe={recipe} procedure={procedure} />
      </div>
      <div className='bg-white/80 h-full  backdrop-blur-md shadow-md rounded-lg p-8 w-full'>
      <p className='text-4xl font-bold text-orange-600'>Ingredients</p>
        <table className='w-full table border'>
          <tr className='text-left bg-slate-600 text-white'>
            <th className='py-2 px-4'>
              Name
            </th>
            <th className='py-2 px-4'>
              Quantity
            </th>
          </tr>
          {ingredients.map((ingredient) => (
            <tr key={ingredient.id}>
              <td className='py-2 px-4'>{ingredient.ingredient_name}</td>
              <td className='py-2 px-4'>{ingredient.quantity}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
    
    <div className='flex items-center justify-center w-[100vw] my-4'>
      <div className='bg-white/80 h-full  backdrop-blur-md shadow-md rounded-lg p-8 w-[90%]'>
        <p className='text-4xl font-bold text-orange-600'>Comments</p>
        {comments.map((comment , index) =>(
          <div key={index} className='my-2 flex flex-col border-b gap-2'>
            <p className='text-slate-600 text-sm'>@{comment.username}</p>
            <p className='text-l font-poppins'>{comment.comments}</p>
          </div>
          
        ))}
        
      </div>
    </div>
    

    </>
  )
}

export default RecipeView
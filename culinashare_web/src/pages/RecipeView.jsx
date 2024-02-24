import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeView = () => {
  const {recipeId} = useParams();
  const backendUrl = process.env.REACT_APP_BASE_API_URL;
  const [recipe , setRecipe] = useState({});
  const[ingredients , setIngredients] = useState([]);
  const[procedure , setProcedure] = useState([])

  

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

  useEffect(() =>{
    fetchRecipe();
    fetchIngredients();
  },[])


  return (
    <div className='mt-16 p-8 min-h-[70vh] grid w-[100vw] lg:grid-cols-[70%_25%] grid-cols-1 bg-[#F0F8FF]  place-items-center gap-8'>
      {/* <div className='bg-white/80 h-full  backdrop-blur-md shadow-md rounded-lg p-8  w-full'>

      </div> */}
      <div className='bg-white/80 h-full w-full  backdrop-blur-md shadow-md rounded-lg p-8  '>

        <p className='text-4xl font-bold text-orange-600 my-2'>{recipe.title}</p>
        <p>{recipe.description}</p>
        <p className='text-4xl font-bold text-orange-600 my-2'>Procedure</p>
        
        <ol className='ml-4'>
        {procedure.map((step,index)=>(
          <li key={index} className='list-decimal my-1'> {step} </li>
        ))}
        </ol>
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
  )
}

export default RecipeView
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import bg from '../images/welcome.jpeg'
import '../index.css'

const Home = () => {

  const[recipies , setRecipies] = useState([]);

  const recipeList =async () =>{
    const fetchRecipe = await fetch('http://127.0.0.1:8000/api/v1/food/recipies/');
    const fetchRecipeResponse = await fetchRecipe.json();
    console.log(fetchRecipeResponse);
    setRecipies(fetchRecipeResponse);
  }

  useEffect(() => {
    recipeList()
  },[])
    

  return (
    <div>
        <NavBar/>

        <div className='welcome flex flex-col items-center justify-center'>
          <div className='bg-slate-800/60 py-8  w-full flex items-center justify-center flex-col gap-6 text-white'>
            <p className='text-5xl text-center font-bold'>Where every bite unfolds a story, In every dish, a journey discovered.</p>
            <button className='px-6 py-2 bg-orange-500 text-xl font-semibold'>
              Begin Your Culinary Journey
            </button>
          </div>
          
        </div>

        <p className='text-center text-4xl my-6 font-bold'>Featured Recipes</p>

        <div className='flex w-full items-center justify-center'>
          <input className='w-[60%] bg-orange-600/80 px-4 py-2 text-white placeholder-white rounded-full text-lg' type="text" placeholder='Search with name...' />
          
        </div>

        <div className='w-[100vw] flex items-center justify-center my-10'>
          <div className='w-[80%] grid grid-cols-3 gap-4'>
            {recipies.map((recipe , index) =>(
              <div key={index} className='min min-h-[300px] bg-white shadow-lg  rounded-lg'>
                <div className='w-full h-10 bg-slate-800 rounded-t-lg text-white flex items-center px-4'>@{recipe.author}</div>
                <div className='h-[50%]  w-full'>
                  <img src={`http://127.0.0.1:8000/${recipe.image}`} alt={recipe.title} className='w-full h-full' />
                </div>
                {recipe.title}
              </div>
            ))}
          </div>
        </div>
        
    </div>
  )
}

export default Home
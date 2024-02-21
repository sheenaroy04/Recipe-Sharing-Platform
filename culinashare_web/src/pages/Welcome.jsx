import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import '../index.css'

const Home = () => {
  const backendUrl = process.env.REACT_APP_BASE_API_URL;
  const[recipies , setRecipies] = useState([]);
  const[categories , setCategories] = useState([]);
  const[activeCategory , setActiveCategory] = useState('');

  const recipeList =async () =>{
    
    const fetchRecipe = await fetch(`${backendUrl}/food/recipies/${activeCategory}`);
    const fetchRecipeResponse = await fetchRecipe.json();   
    setRecipies(fetchRecipeResponse);
  }

  const categoryList = async() =>{
    const fetchCategories = await fetch(`${backendUrl}/food/categories/`);
    const fetchCategoriesResponse = await fetchCategories.json();
    setCategories(fetchCategoriesResponse);
    console.log(fetchCategoriesResponse)
  }



  const setCategoryFilter = (index) =>{
    setActiveCategory(index);
  }

  const RecipeCard = () =>{
    return(
      <div className='w-[100vw] flex items-center justify-center my-10'>
          <div className='w-[85%] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
            {recipies.map((recipe , index) =>(
              <div key={index} className='h-[50vh] bg-white shadow-5xl  rounded-lg drop-shadow-2xl '>
                {/* <div className='w-full h-10 bg-slate-800 rounded-t-lg text-white flex items-center px-4'>@{recipe.author}</div> */}
                <div className='h-[50%]  w-full'>
                  <img src={`http://127.0.0.1:8000/${recipe.image}`} alt={recipe.title} className='w-full h-full rounded-t-lg' />
                </div>
                
                <div className='p-2 text-black'>
                  <div className='flex w-full items-center justify-between'>
                    <p className='text-xl font-semibold'>{recipe.title}</p>
                    {categories.map((item,index) =>(item.id === recipe.categories&&
                      (<p key={index}>
                        item.name
                      </p>)
                  
                    )
                      
                    )}
                    
                  </div>
                  
                  <p className='text-lg '>{recipe.description}</p>
                  <div className='grid grid-cols-3 my-2 '>
                    <div className='flex flex-col items-center justify-center border-r border-r-slate-800'>
                      <p className="font-semibold">Preparation</p>
                      <p className='text-sm'>{recipe.preparation_time } mins</p>
                    </div>
                    <div className='flex flex-col items-center justify-center border-r border-r-slate-800'>
                      <p className="font-semibold">Cooking</p>
                      <p className='text-sm'>{recipe.cooking_time } mins</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <p className="font-semibold">Total</p>
                      <p className='text-sm'>{recipe.total_time } mins</p>
                    </div>
                  </div>
                  
                </div>
                <div className='w-full h-10 bg-slate-800 absolute rounded-b-lg bottom-0  text-white flex items-center px-4'>@{recipe.author}</div>
              </div>
            ))}
          </div>
        </div>
    )
  }

  useEffect(() => {
    categoryList();
  },[])
  useEffect(() =>{
    recipeList();
  },[activeCategory])
    

  return (
    <div>
        <NavBar/>

        <div className='welcome flex flex-col items-center justify-center'>
          <div className='bg-slate-800/60 py-12  w-full flex items-center justify-center flex-col gap-6 text-white'>
            <div className='text-7xl text-center font-bold'>
              <p className='text-orange-600'>Where every bite unfolds a story.</p>
              <p >In every dish, a journey discovered.</p> 
            </div>
            
            <button className='px-6 font-poppins py-2 bg-orange-500 text-xl text-[#F0F8FF]  shadow-md shadow-black'>
              Begin Your Culinary Journey
            </button>
          </div>
          
        </div>

        <div id='featured' className='flex flex-col items-center w-[100vw] py-4 bg-gradient-to-r from-orange-700 to-orange-500 text-white'>
        <p className='text-center text-6xl my-6  font-culina-share'>Featured Recipes</p>

        <div className='flex w-full flex-col items-center justify-center gap-6'>
          <input className='w-[60%] bg-gray-800/80 px-4 py-2 text-white placeholder-white rounded-full text-lg' type="text" placeholder='Search with name...' />
          <div className='flex flex-row items-center gap-5 w-[60%] text-lg font-semibold'>
              <button  onClick={()=> setCategoryFilter('')} className={`px-4 py-1  border-2  rounded-full ${activeCategory === '' ? 'bg-gray-800 text-white border-transparent':' border-gray-800'}`} >
                All
              </button>
            {categories.map((category , index) => (
              <button key={index} onClick={()=> setCategoryFilter(category.id)} className={`px-4 py-1  border-2  rounded-full ${activeCategory === category.id ? 'bg-gray-800 text-white border-transparent':' border-gray-800'}`} >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <RecipeCard/>
        
        </div>
    </div>
  )
}

export default Home
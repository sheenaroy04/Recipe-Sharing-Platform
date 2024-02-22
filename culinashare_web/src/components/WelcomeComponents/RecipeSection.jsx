import React from 'react'
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";

const RecipeCard = ({currentItems , categories}) =>{
    const imageAPIUrl = process.env.REACT_APP_IMAGE_URL;
    return(
      <div className='w-[100vw] flex items-center justify-center my-10 '>
          <div className='w-[70%]  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
            {currentItems.map((recipe , index) =>(
              <div key={index} className='h-[50vh] w-full bg-white shadow-5xl  rounded-lg drop-shadow-2xl '>
                {/* <div className='w-full h-10 bg-slate-800 rounded-t-lg text-white flex items-center px-4'>@{recipe.author}</div> */}
                <div className='h-[50%]  w-full overflow-hidden relative'>
                  <img src={`${imageAPIUrl}/${recipe.image}`} alt={recipe.title} className='cursor-pointer w-full h-full rounded-t-lg transition-transform ease-in-out  duration-300 hover:scale-110' />
                  <OutlineHeart  className="absolute right-2 top-2 h-6 w-6 text-black pointer" />

                </div>
                
                <div className='p-2 text-black flex flex-col  items-stretch'>
                  <div className='flex w-full items-center justify-between'>
                    <p className='text-xl font-semibold'>{recipe.title}</p>

                    {categories
                      .filter(item => item.id === parseInt(recipe.categories))
                      .map(filteredItem => (
                        <p className='bg-slate-600/20 rounded-full py-1 px-2 text-xs font-poppins' key={filteredItem.id}>
                            {filteredItem.name}
                        </p>
                        ))
                    }
                    
                  </div>
                  
                  <p className='text-l line-clamp-1 '>{recipe.description}</p>
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
export default RecipeCard
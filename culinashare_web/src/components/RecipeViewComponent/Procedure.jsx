import React, { useState } from 'react'
import { StarIcon } from "@heroicons/react/20/solid";
import { useSelector } from 'react-redux';
import { BookmarkIcon as OutlineBookMark } from "@heroicons/react/24/outline";
import { BookmarkIcon as SolidBookMark } from "@heroicons/react/20/solid";

const Procedure = ({recipe , procedure}) => {
  const user = useSelector(state=>state.user);
  const backendUrl = process.env.REACT_APP_BASE_API_URL;
  const [isBookMarked , setIsBookMarked] = useState(recipe.isBookMarked);

  const updateBookMark = async() =>{
    const response =  await fetch(`${backendUrl}/food/bookmarks/`,{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({
        user : user.userId,
        recipe : recipe.recipe_id
      })
    });
    
    const responseData = await response.json();
    console.log(responseData)
  }

  return (
    <>
    {user &&
            <div className='w-full flex flex-row items-end justify-end mb-6'>
              <button onClick={updateBookMark}>
              {isBookMarked ?
              <SolidBookMark className='h-7 w-7 text-yellow-500'/>:
              <OutlineBookMark className='h-7 w-7 text-yellow-500'/>  
            }
            </button>
              </div>
      
          }
    <div className='flex flex-row items-start justify-between'>
    
            <p className='text-2xl md:text-4xl font-bold text-orange-600 my-2'>{recipe.title}</p>
            <div className='flex flex-col items-center'>
              <div className='flex flex-row items-center justify-center'>
                {Array.from({length : 5}).map((_,index)=>(
                  <StarIcon key={index} className={`h-6 w-6 ${Math.floor(recipe.average_score)>index ? 'text-yellow-400' : 'text-gray-300'}`} />
                ))}
                <p>{recipe.average_score}</p>
                
              </div>
              
              <p>{recipe.number_of_ratings} people rated</p>
            </div>
            
        </div>
        
        <p>{recipe.description}</p>
        <p className='text-2xl md:text-4xl font-bold text-orange-600 my-2'>Procedure</p>
        
        <ol className='ml-4'>
        {procedure.map((step,index)=>(
          <li key={index} className='list-decimal my-1'> {step} </li>
        ))}
        </ol>
    </>
  )
}

export default Procedure
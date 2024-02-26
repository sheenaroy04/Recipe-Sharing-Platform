import React,{useState} from 'react'
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import { ClockIcon  ,ShareIcon} from "@heroicons/react/24/outline";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import { StarIcon } from "@heroicons/react/20/solid";
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';
import nofood from '../../images/nofood.webp';


const RecipeCard = ({currentItems , categories , users}) =>{
  const[isLoading , setIsLoading] = useState(false);

  const navigate = useNavigate();
  const navigateTo = (loc) => {
    setIsLoading(true);
    setTimeout(() =>{
      setIsLoading(false);
      navigate(loc);
    },4000)

  }
  

    const imageAPIUrl = process.env.REACT_APP_IMAGE_URL;
    return(
      <div className='w-[100vw] flex items-center justify-center my-10 '>
        <Loading showLoading={isLoading} />
          <div className='w-[80%]  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ' >
            {currentItems.length > 0 &&<>
            {currentItems.map((recipe , index) =>(

              <div  key={index} className='h-[45h] bg-black/30 backdrop-blur-md shadow-md   rounded-lg drop-shadow-2xl flex flex-col cursor-pointer'>
                <div className='w-full h-2/4 flex overflow-hidden'>
                  <img src={`${imageAPIUrl}/${recipe.image}`} alt="" className='w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out' />
                </div>

                <div className='w-full h-2/4 flex flex-col justify-around p-2'>

                  <div className="flex flex-row items-start justify-between">
                    <div className='flex flex-col leading-tight'>
                      <p className='text-xl font-semibold'>{recipe.title}</p>
                      {
                        users.filter((user) => user.id === recipe.author).map((userData) => (
                          <p className='font-poppins font-regular  text-xs font-semibold text-orange-500' key={userData.id}>
                            @{userData.username}
                          </p>
                        ))
                      }
                    </div>
                    
                    <div className='flex flex-col leading-tight items-center justify-between gap-1'>
                    {categories
                      .filter(item => item.id === parseInt(recipe.categories))
                      .map(filteredItem => (
                        <p className={`${recipe.is_vegetarian ? 'bg-green-700' : 'bg-red-700'} text-white rounded-full py-1 px-2 text-xs font-poppins `} key={filteredItem.id}>
                            {filteredItem.name}
                        </p>
                        ))
                    }
                    <p className='flex flex-row'>{recipe.average_score ? recipe.average_score : 0}<StarIcon className="h-4 w-4 text-yellow-400" /> ({recipe.number_of_ratings})</p>
                    </div>
                  </div>
                  
                  {/* <Link key={index} className='' to={`recipe/${recipe.recipe_id}`}> */}
                    <button onClick={() => navigateTo(`recipe/${recipe.recipe_id}`)} className='w-full p-1 rounded-full flex items-center justify-center bg-slate-800 text-xl font-dancing-script gap-2'>
                    
                    View Recipe
                    <ArrowRightCircleIcon className="h-5 w-5 text-[#F0F8FF]" />
                    </button>
                  {/* </Link> */}
                  <div className="flex flex-row items-center justify-around">
                    <div className='flex  leading-tight items-center justify-center gap-1'>
                      <ClockIcon className="h-5 w-5 text-white" />
                      {recipe.preparation_time} mins
                    </div>
                    <div className='flex  leading-tight items-center justify-center gap-1'>
                      <ShareIcon className="h-4 w-4 text-white" />
                      {recipe.servings} servings
                    </div>
                  </div>

                  
                </div>
              </div>
             
              
            ))} </>
            
            
          }
          </div>
          {currentItems.length === 0 &&
            <div className='w-full flex items-center justify-start'>
              <img src={nofood} alt="" className='h-48'  />
            </div>
          }
          
        </div>
    )
  }
export default RecipeCard
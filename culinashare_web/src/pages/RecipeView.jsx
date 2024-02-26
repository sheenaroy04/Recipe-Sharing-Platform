import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StarIcon } from "@heroicons/react/20/solid";
import Procedure from '../components/RecipeViewComponent/Procedure';
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useSelector } from 'react-redux';
import Modal from '../components/Modal';
import sad from '../images/sad.svg';

const RecipeView = () => {
  const {recipeId} = useParams();
  const user = useSelector(state => state.user);
  const backendUrl = process.env.REACT_APP_BASE_API_URL;
  const [recipe , setRecipe] = useState({});
  const[ingredients , setIngredients] = useState([]);
  const[procedure , setProcedure] = useState([])
  const[comments,setComments] = useState([]);
  const[isOpen , setIsOpen] = useState(false)
  const[rating , setRating] = useState(0);
  const[comment,setComment] = useState('');

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
  },[]);

  const handleSetRating = (rate) =>{
    if(user){
      setRating(rate);
    }
    else{
      setIsOpen(true)
    }
  }

  const postComment = async() =>{
    if(comment === ''){
      alert('Enter comment')
    }
    else{
      const data = {
        recipe : recipeId,
        user : user.userId,
        score : rating,
        comments : comment
      };
      try {
        const postCommentRequest = await fetch(`${backendUrl}/food/ratings/`,{
          method:'POST',
          headers:{
            'Content-Type' : 'application/json'
          },
          body:JSON.stringify(data)
        });
        const response = await postCommentRequest.json()
        console.log(response);
  
      } catch (error) {
        
      }

    }
    
  }


  return (
    <>
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}  />
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
    
    <div className='flex flex-col items-center justify-center w-[100vw] my-4'>
      <div className='flex flex-col w-1/2 items-center justify-center mb-2 gap-3'>
        <p className='text-4xl font-bold text-orange-600'>Rate this recipe</p>
        <div className='flex flex-row items-center justify-center'>
        {Array.from({length:5}).map((_,index)=>(
          <StarIcon onClick={()=>handleSetRating(index+1)}  key={index} className={`h-6 w-6 text-gray-600  hover:text-yellow-500 ${rating > index && 'text-yellow-500'} `}/>
        ))}
        </div>
        {rating>0 &&
        <div className='md:w-2/3 w-[80vw] p-2 backdrop-blur-md shadow-md rounded-lg flex flex-row text-lg font-poppins  bg-slate-600'>
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Leave us a comment...' className='bg-transparent flex-1 border-0  focus:border-none outline-none text-white'  />
        <PaperAirplaneIcon onClick={postComment} className="h-10 w-10 rounded-full p-2 text-white hover:scale-120 hover:bg-orange-600" />
      </div>
        }
        
        
      </div>
      <div className='bg-white/80 h-full  backdrop-blur-md shadow-md rounded-lg p-8 w-[90%]'>

        {comments.length > 0 ?
        <>
        <p className='text-4xl font-bold text-orange-600'>Comments</p>

        
        {comments.map((comment , index) =>(
          <div key={index} className='my-2 flex flex-col border-b gap-2'>
            <p className='text-slate-600 text-sm'>@{comment.username}</p>
            <p className='text-l font-poppins flex flex-row items-center'>{comment.comments} .  {comment.score} <StarIcon className='h-4 w-4 text-yellow-500'/></p>
          </div>
  
        ))}
        </>:
        
        <div className='w-full flex flex-col items-center justify-center'>
          <img className='h-48' src={sad} alt="" />
        <p className='text-3xl  text-center font-bold text-orange-600'>No comments received yet</p>
          
        </div>
          
        
        
      }
      </div>
    </div>
    

    </>
  )
}

export default RecipeView
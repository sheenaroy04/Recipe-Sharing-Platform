import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StarIcon } from "@heroicons/react/20/solid";
import Procedure from '../components/RecipeViewComponent/Procedure';
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useSelector } from 'react-redux';
import Modal from '../components/Modal';
import sad from '../images/sad.svg';
import Ingredients from '../components/RecipeViewComponent/Ingredients';
import { ChevronLeftIcon , ChevronRightIcon } from "@heroicons/react/24/outline";
import Loading from '../components/Loading';

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
  const[isIngredientsVisible , setIsIngredientsVisible] = useState(true);
  const[showIngredientBar , setShowIngredientBar] = useState(false);
  const[showLoading , setShowLoading] = useState(false);
  const[message , setMessage] = useState('');

  const[openPage , setOpenPage] = useState('');

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
      setIsOpen(true);
      setOpenPage('login');
    }
  }

  const postComment = async() =>{
    if(comment === ''){
      alert('Send us rating with your feedback comment...')
    }
    else{
      setShowLoading(true);
      setMessage('Posting your feedback...')
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
        // console.log(response);
        setMessage(response.message);
        setTimeout(() =>{
          setShowLoading(false);
          setMessage('');
          window.location.reload();
        },2000);
        
  
      } catch (error) {
        
      }

    }
    
  }
  useEffect(()=>{
    const  handleWidthResize = () => {
      if(window.innerWidth  < 1024){
        setIsIngredientsVisible(false)
      }
      else{
        setIsIngredientsVisible(true)
      }
    }
    
    window.addEventListener('resize' , handleWidthResize);
    handleWidthResize();
    return () => window.removeEventListener('resize',handleWidthResize)
  })


  return (
    <div onClick={()=>showIngredientBar && setShowIngredientBar(!showIngredientBar)}>
      <Loading showLoading={showLoading} message={message} />
    <Modal isOpen={isOpen} openPage={openPage} setOpenPage={setOpenPage} onClose={() => setIsOpen(false)}  />
    <div className='mt-16 p-4 md:p-8 min-h-[70vh] grid w-[100vw] lg:grid-cols-[65%_30%] grid-cols-1 bg-[#F0F8FF]  place-items-center gap-2 md:gap-8'>
      
      <div className='bg-white/80 h-full w-full  backdrop-blur-md shadow-md rounded-lg p-4 md:p-8 mt-32 md:mt-0 '>
        <Procedure recipe={recipe} procedure={procedure} />
      </div>
      {isIngredientsVisible ?
      <div className='bg-white/80 h-full   backdrop-blur-md shadow-md rounded-lg p-8 w-full'>
        <Ingredients ingredients={ingredients}/>
        </div>:
        <>
        <button onClick={()=>setShowIngredientBar(true)} className=' flex flex-row items-center fixed top-20 right-0 z-20 bg-gradient-to-br from-orange-600/90 to-orange-500/80 px-4 py-2 text-lg font-bold text-white rounded-l-full'>
          <ChevronLeftIcon className="h-6 w-6 " />
            View Ingredients
          </button>
          <div className={`fixed top-0 right-0 z-20  w-5/6 h-full mt-20 p-4 bg-[#F0F8FF] shadow-lg  backdrop-blur-md transform transition-transform duration-300
          ease-in-out ${showIngredientBar ? 'translate-x-0' : 'translate-x-full'}`}>
            
            <button onClick={()=>setShowIngredientBar(false)} className='flex flex-row  w-full  items-center justify-center p-2  my-4  font-bold text-lg'> &#10060; Close
            </button>
            <Ingredients ingredients={ingredients}/>
          </div>
        </>
        
      }
    </div>
    
    <div className='flex flex-col items-center justify-center w-[100vw] my-4'>
      <div className='flex flex-col w-1/2 items-center justify-center mb-2 gap-3'>
        <p className='text-2xl md:text-4xl font-bold text-orange-600 text-center'>Rate this recipe</p>
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
        <p className='text-2xl md:text-4xl font-bold text-orange-600'>Comments</p>

        
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
    

    </div>
  )
}

export default RecipeView
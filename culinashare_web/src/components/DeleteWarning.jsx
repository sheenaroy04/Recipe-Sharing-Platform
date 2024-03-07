import React from 'react';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

const DeleteWarning = ({showWarning,setShowWarning,recipe_id,name}) => {
    const navigate = useNavigate();
    if (!showWarning) return null
    const backendUrl = process.env.REACT_APP_BASE_API_URL;

    const  deleteRecipe = async() =>{

      try {
        const deleteRecipe = await fetch(`${backendUrl}/food/recipies/recipe=${recipe_id}`,{
          method:'DELETE'
        })
        if(deleteRecipe.ok){
          alert('Post deleted successfully!');
          setShowWarning(false);
          window.location.reload();

        }
      } catch (error) {
        
      }
    }

  return (
    <div  className="fixed inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center font-poppins z-30">
        
        <div className="backdrop-blur-md shadow-md bg-[#F0F8FF]/50 p-5 rounded-lg lg:w-[30vw] md:w-[60vw] sm:w-[70vw] w-[95vw]  min-h-[20vh] flex flex-col justify-center gap-6">
          <p>Are you sure to delete {name} ?</p>
          <div className='w-full flex flex-col md:flex-row items-center justify-center gap-6'>
            <button onClick={deleteRecipe} className='w-2/3  md:w-1/3 bg-red-600 text-white p-1 rounded-md'>Delete</button>
            <button onClick={()=>setShowWarning(false)} className='w-2/3  md:w-1/3 bg-white  p-1 rounded-md'>Cancel</button>
          </div>
          
        </div>
        
        
    </div>
  )
}

export default DeleteWarning
import React, { useEffect, useState } from 'react';
import { PlusCircleIcon ,MinusCircleIcon } from "@heroicons/react/20/solid";

const PostRecipe = () => {
  const[currentPage , setCurrentPage] = useState(1);
  const[title,setTitle] = useState('');
  const[description , setDescription] = useState('');
  const[procedure , setProcedure] = useState('');
  const[categoryId , setCategoryId] = useState(null);
  const[isVegetarian , setIsVegetarian] = useState(false);
  const[preparationTime , setPreparationTime] = useState(null);
  const[servings , setServings] = useState(0);
  const[ingredients , setIngredients] = useState([]);

  const[categories , setCategories] = useState([]);
  const backendUrl = process.env.REACT_APP_BASE_API_URL;

  const fetchCategories = async() =>{
    try {
      const response = await fetch(`${backendUrl}/food/categories/`);
      const responseData = await response.json();
      setCategories(responseData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  },[])

  const StepOne = () =>{
    return(
    <div className='mt-20 p-8 bg-white/80 grid grid-cols-2  backdrop-blur-md shadow-md h-[80%] w-[80%] rounded-lg '>
        <div className='flex flex-col items-center justify-center'>
          <input type="file" alt='Img' hidden id='image' />
          <div onClick={()=>{
              document.getElementById('image').click();
            }} className='h-1/3 w-1/2 border-2 flex items-center justify-center border-orange-500 border-dashed'>
            <button>Select your recipe image</button>
          </div>
        </div>

        <div className='p-2 gap-4 flex flex-col font-poppins '>
          <input type="text" placeholder='Recipe Name' 
                            className='bg-[#F0F8FF] p-2 w-full outline-none 
                            backdrop-blur-md shadow-md  placeholder:text-black' 
                            value={title} onChange={(e) => setTitle(e.target.value)} />

          <select name="Category" value={categoryId} onChange={(e)=> setCategoryId(e.target.value)}
                  className='outline-none bg-[#F0F8FF] p-2 backdrop-blur-md shadow-md'
                              >
            <option value="" disabled={categoryId!==null}>-- Select a category --</option>
            {categories.map((item,index) => (
              <option  value={item.id}>
                {item.name}
                </option>
            ))}
          </select>

          <textarea rows={5}  type="text" placeholder='Description' 
                            className='bg-[#F0F8FF] p-2 w-full outline-none overflow-hidden 
                            backdrop-blur-md shadow-md  placeholder:text-black' 
                            value={description} onChange={(e) => setDescription(e.target.value)} />
          
          
          <p>Dietary</p>
          <div className='flex flex-row gap-2'>
            <input type="radio" className='' name='isVeg' value={isVegetarian} onChange={()=>setIsVegetarian(true)} />
            <p>Vegetarian</p>
            <input type="radio" className='' name='isVeg' value={isVegetarian} onChange={()=>setIsVegetarian(false)} />
            <p>Non - Vegetarian</p>
          </div>

          <div className='flex flex-row items-center gap-4 justify-around'>
              <div className='flex flex-col gap-2 items-center justify-center'>
                <p>Preparation Time</p>
                <div className='flex flex-row items-center gap-2'>
                  <input type="number" value={preparationTime} onChange={(e) => setPreparationTime(e.target.value)}  className='bg-[#F0F8FF] p-2 backdrop-blur-md shadow-md outline-none w-20' />
                  <p>mins</p>
                </div>
              </div>

              <div className='flex flex-col gap-2 items-center justify-center'>
                <p>Servings</p>
                <div className='flex flex-row items-center gap-2'>
                  <MinusCircleIcon onClick={()=>servings !==0 && setServings(servings-1)} className="h-6 w-6 text-slate-600" />
                  <input type="number" value={servings}  className='bg-[#F0F8FF] p-2 text-center backdrop-blur-md shadow-md outline-none w-20' />
                  <PlusCircleIcon onClick={() => setServings(servings+1)} className="h-6 w-6 text-slate-600" />
                </div>
              </div>
              
          </div>

          <button onClick={()=>setCurrentPage(2)} className='w-full p-2 text-white text-lg bg-slate-600 my-4'>Next</button>
        </div>
      </div>
      )
  }

  const StepTwo = () =>{
    return(
    <div className='mt-20 p-8 bg-white/80 grid grid-cols-2  backdrop-blur-md shadow-md h-[80%] w-[80%] rounded-lg '>
        <div className='flex flex-col items-center '>
          <textarea rows={10}  type="text" placeholder='Describe the procedure for the recipe...' 
                            className='bg-[#F0F8FF] p-2 w-[90%] outline-none overflow-hidden 
                            backdrop-blur-md shadow-md  placeholder:text-black' 
                            value={procedure} onChange={(e) => setProcedure(e.target.value)} />
        </div>

        <div className='p-2 gap-4 flex flex-col font-poppins '>
          <p>Ingredients</p>
          <div className='w-full'>
            <div className='flex flex-row w-full gap-5 items-center'>
              <input type="text" placeholder='Ingredient' className='bg-[#F0F8FF] p-2 w-[60%] outline-none overflow-hidden  backdrop-blur-md shadow-md'  />
              <input type="text" placeholder='Quantity' className='bg-[#F0F8FF] p-2 w-[20%] outline-none overflow-hidden  backdrop-blur-md shadow-md'  />
              <PlusCircleIcon  className="h-6 w-6 text-slate-600" />
            </div>
          </div>
          <button onClick={()=>setCurrentPage(1)} className='w-full p-2 text-white text-lg bg-slate-600 my-4'>Back</button>
        </div>
      </div>
      )
  }

  return (
    <div className='h-[100vh] w-[100vw] flex flex-col items-center  justify-center p-8'>
      <div className='flex flex-row items-center justify-center gap-6 mt-10'>
        <button className={`px-4 py-1 rounded-lg text-xl font-poppins   ${currentPage>0 &&'bg-orange-600 text-white'}  `}>1</button>
        <button className={`px-4 py-1 rounded-lg text-xl font-poppins   ${currentPage>1 &&'bg-orange-600 text-white' }`}>2</button>
      </div>
      {currentPage === 1 ?
        <StepOne/>:
        <StepTwo/>
    }
      
    </div>
  )
}

export default PostRecipe
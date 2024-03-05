import React, { useEffect, useState } from 'react';
import { PlusCircleIcon ,MinusCircleIcon } from "@heroicons/react/20/solid";

const PostRecipe = () => {
  const[title,setTitle] = useState('');
  const[description , setDescription] = useState('');
  const[procedure , setProcedure] = useState('');
  const[categories , setCategories] = useState([]);
  const[categoryId , setCategoryId] = useState(null);
  const[isVegetarian , setIsVegetarian] = useState(false);
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
          <div className='h-1/3 w-1/2 border-2 flex items-center justify-center border-orange-500 border-dashed'>
            <button onClick={()=>{
              document.getElementById('image').click();
            }}>Select your recipe image</button>
          </div>
        </div>

        <div className='p-2 gap-4 flex flex-col font-poppins'>
          <input type="text" placeholder='Recipe Name' 
                            className='bg-[#F0F8FF] p-2 w-full outline-none 
                            backdrop-blur-md shadow-md  placeholder:text-black' 
                            value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea rows={5}  type="text" placeholder='Description' 
                            className='bg-[#F0F8FF] p-2 w-full outline-none overflow-hidden 
                            backdrop-blur-md shadow-md  placeholder:text-black' 
                            value={description} onChange={(e) => setDescription(e.target.value)} />
          <select name="Category" value={categoryId} onChange={(e)=> setCategoryId(e.target.value)}
                  className='outline-none bg-[#F0F8FF] p-2 backdrop-blur-md shadow-md'
                              >
            <option value="" disabled>-- Select a category --</option>
            {categories.map((item,index) => (
              <option  value={item.id}>
                {item.name}
                </option>
            ))}
          </select>
          
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
                  <input type="number"  className='bg-[#F0F8FF] p-2 backdrop-blur-md shadow-md outline-none w-20' />
                  <p>mins</p>
                </div>
              </div>

              <div className='flex flex-col gap-2 items-center justify-center'>
                <p>Servings</p>
                <div className='flex flex-row items-center gap-2'>
                  <MinusCircleIcon className="h-6 w-6 text-slate-600" />
                  <input type="number"  className='bg-[#F0F8FF] p-2 backdrop-blur-md shadow-md outline-none w-20' />
                  <PlusCircleIcon className="h-6 w-6 text-slate-600" />
                </div>
              </div>
              
          </div>
        </div>
      </div>
      )
  }

  return (
    <div className='h-[100vh] w-[100vw] flex  justify-center'>
      <StepOne/>
    </div>
  )
}

export default PostRecipe
import React, { useEffect, useState } from 'react';
import { PlusCircleIcon ,MinusCircleIcon } from "@heroicons/react/20/solid";
import IngredientSttore from '../components/PostRecipeComponents/IngredientSttore';
import { useSelector } from 'react-redux';
import StepOne from '../components/PostRecipeComponents/StepOne';
import StepTwo from '../components/PostRecipeComponents/StepTwo';

const PostRecipe = () => {
  const user = useSelector(state => state.user)
  const[currentPage , setCurrentPage] = useState(1);
  const[title,setTitle] = useState('');
  const[image,setImage] = useState(null);
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

  const postNewRecipe = async() => {
    // const formData = new FormData();
    // formData.append('title' , title);
    // formData.append('description' , description);
    // formData.append('procedure',procedure);
    // formData.append('is_vegetarian',isVegetarian);
    // formData.append('preparation_time' , preparationTime);
    // formData.append('servings', servings);
    // formData.append('image',image);
    // formData.append('author',user.userId);
    try {
      console.log(title,categoryId,procedure,description,isVegetarian,servings,image)
      
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchCategories();
  },[])

  // const StepOne = () =>{
  //   return(
  //   <div className='p-2 flex flex-col gap-4 md:p-4 bg-white/80 md:grid md:grid-cols-2  backdrop-blur-md shadow-md w-[95%]  rounded-lg '>
  //       <div className='flex flex-col items-center justify-center m-4'>
  //         {image ? <>
  //           <img className='h-[70vh] w-full' src={image && URL.createObjectURL(image)} alt="" />
  //         </>:
  //         <>
  //         <input type="file" alt='Img' hidden onChange={(e) => setImage(e.target.files[0])} id='image' />
  //         <div onClick={()=>{
  //             document.getElementById('image').click();
  //           }} className='h-1/3 w-1/2 border-2 flex items-center justify-center border-orange-500 border-dashed'>
  //           <button className='p-4'>Select your recipe image</button>
  //         </div>
  //         </>
          

  //       }
  //       </div>

  //       <div className='p-2 gap-4 flex flex-col font-poppins '>
  //         <input type="text" placeholder='Recipe Name' 
  //                           className='bg-[#F0F8FF] p-2 w-full outline-none 
  //                           backdrop-blur-md shadow-md  placeholder:text-black' 
  //                           value={title} onChange={(e) => setTitle(e.target.value)} />

  //         <select name="Category" value={categoryId} onChange={(e)=> setCategoryId(e.target.value)}
  //                 className='outline-none bg-[#F0F8FF] p-2 backdrop-blur-md shadow-md'
  //                             >
  //           <option value="" disabled={categoryId!==null}>-- Select a category --</option>
  //           {categories.map((item,index) => (
  //             <option  value={item.id}>
  //               {item.name}
  //               </option>
  //           ))}
  //         </select>

  //         <textarea rows={5}  type="text" placeholder='Description' 
  //                           className='bg-[#F0F8FF] p-2 w-full outline-none overflow-hidden 
  //                           backdrop-blur-md shadow-md  placeholder:text-black' 
  //                           value={description} onChange={(e) => setDescription(e.target.value)} />
          
          
  //         <p>Dietary</p>
  //         <div className='flex flex-row gap-2'>
  //           <input type="radio" className='' checked={isVegetarian === true} name='isVeg' value={isVegetarian} onChange={()=>setIsVegetarian(true)} />
  //           <p>Vegetarian</p>
  //           <input type="radio" className='' checked={isVegetarian === false}  name='isVeg' value={isVegetarian} onChange={()=>setIsVegetarian(false)} />
  //           <p>Non - Vegetarian</p>
  //         </div>

  //         <div className='flex flex-row items-center gap-4 justify-around'>
  //             <div className='flex flex-col gap-2 items-center justify-center'>
  //               <p>Preparation Time</p>
  //               <div className='flex flex-row items-center gap-2'>
  //                 <input type="number" value={preparationTime} onChange={(e) => setPreparationTime(e.target.value)}  className='bg-[#F0F8FF] p-2 backdrop-blur-md shadow-md outline-none w-20' />
  //                 <p>mins</p>
  //               </div>
  //             </div>

  //             <div className='flex flex-col gap-2 items-center justify-center'>
  //               <p>Servings</p>
  //               <div className='flex flex-row items-center gap-2'>
  //                 <MinusCircleIcon onClick={()=>servings !==0 && setServings(servings-1)} className="h-6 w-6 text-slate-600" />
  //                 <input type="number" value={servings}  className='bg-[#F0F8FF] p-2 text-center backdrop-blur-md shadow-md outline-none w-20' />
  //                 <PlusCircleIcon onClick={() => setServings(servings+1)} className="h-6 w-6 text-slate-600" />
  //               </div>
  //             </div>
              
  //         </div>

  //         <button onClick={()=>setCurrentPage(2)} className='w-full p-2 text-white text-lg bg-slate-600 my-4'>Next</button>
  //       </div>
  //     </div>
  //     )
  // }

  

  return (
    <div className=' w-[100vw] flex flex-col items-center  justify-center p-2 mt-16 md:p-8'>
      <div className='flex flex-row items-center justify-center gap-6 my-6'>
        <button className={`px-4 py-1 rounded-lg text-xl font-poppins   ${currentPage>0 &&'bg-orange-600 text-white'}  `}>1</button>
        <button className={`px-4 py-1 rounded-lg text-xl font-poppins   ${currentPage>1 &&'bg-orange-600 text-white' }`}>2</button>
      </div>
      {currentPage === 1 ?

        <StepOne title={title} setTitle={setTitle} categories={categories} categoryId={categories} description={description}
           setDescription={setDescription} servings={servings} setServings={setServings} image={image} setImage={setImage}
           currentPage={currentPage} setCurrentPage={setCurrentPage} />:
        <StepTwo procedure={procedure} setProcedure={setProcedure} ingredients={ingredients}
          setIngredients={setIngredients} currentPage={currentPage} setCurrentPage={setCurrentPage}
          postNewRecipe={postNewRecipe}
          />
    }
      
    </div>
  )
}

export default PostRecipe
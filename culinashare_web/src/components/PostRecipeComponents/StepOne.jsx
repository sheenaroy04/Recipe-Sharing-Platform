import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/20/solid";


const StepOne = ({title,image,categoryId,description,isVegetarian,preparationTime,servings, categories,currentPage,
                  setTitle,setImage  ,setCategoryId,setDescription,setIsVegetarian,setPreparationTime,setServings  ,setCurrentPage                              }) =>{
    return(
    <div className='p-2 flex flex-col gap-4 md:p-4 bg-white/80 md:grid md:grid-cols-2  backdrop-blur-md shadow-md w-[95%]  rounded-lg '>
        <div className='flex flex-col items-center justify-center m-4'>
          {image ? <>
            <img className='h-[30vh]  w-full lg:w-[70%]' src={image && URL.createObjectURL(image)} alt="" />
          </>:
          <>
          <input type="file" alt='Img' hidden onChange={(e) => setImage(e.target.files[0])} id='image' />
          <div onClick={()=>{
              document.getElementById('image').click();
            }} className='h-1/3 w-1/2 border-2 flex items-center justify-center border-orange-500 border-dashed'>
            <button className='p-4'>Select your recipe image</button>
          </div>
          </>
          

        }
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
              <option key={index}  value={item.id}>
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
            <input type="radio" className='' checked={isVegetarian === true} name='isVeg' value={isVegetarian} onChange={()=>setIsVegetarian(true)} />
            <p>Vegetarian</p>
            <input type="radio" className='' checked={isVegetarian === false}  name='isVeg' value={isVegetarian} onChange={()=>setIsVegetarian(false)} />
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

export default StepOne
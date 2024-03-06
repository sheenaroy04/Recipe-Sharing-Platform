import IngredientSttore from "./IngredientSttore"


const StepTwo = ({procedure,setProcedure , ingredients , setIngredients , currentPage,setCurrentPage , postNewRecipe}) =>{
    return(
    <div className='  p-2 md:p-8 bg-white/80 md:grid md:grid-cols-2   backdrop-blur-md shadow-md w-[95%]  rounded-lg '>
        <div className='flex flex-col items-center '>
          <textarea rows={10}  type="text" placeholder='Describe the procedure for the recipe...' 
                            className='bg-[#F0F8FF] p-2 w-[90%] outline-none overflow-hidden 
                            backdrop-blur-md shadow-md  placeholder:text-black' 
                            value={procedure} onChange={(e) => setProcedure(e.target.value)} />
        </div>

        <div className='p-2 gap-4 flex flex-col font-poppins  w-full  justify-between'>
          <div className='flex flex-col gap-2'>
          <p>{ingredients.length} Ingredients</p>

          <IngredientSttore ingredients={ingredients} setIngredients={setIngredients}/>
          </div>
          
          
          <div className='flex flex-row items-center justify-around'>
            <button onClick={()=>setCurrentPage(1)} className='w-1/3 p-2 text-white text-lg bg-slate-600 my-4'>Back</button>
            <button onClick={postNewRecipe} className='w-1/3 p-2 text-white text-lg bg-orange-600 my-4'>Submit</button>
          </div>
          
        </div>
      </div>
      )
  }

export default StepTwo
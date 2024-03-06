import { PlusCircleIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react';
import { MinusIcon } from "@heroicons/react/24/outline";

const IngredientSttore = ({ingredients,setIngredients}) => {
    const[ingredientName , setIngredientName] = useState('');
    const[quantity , setQuantity] = useState('');
    const[error,setError] = useState('');

    const addIngredient = () =>{
        if(ingredientName === ''){
            setError("Don't leave ingredient name empty!");
            setTimeout(()=>{
                setError('');
            },3000)
        }
        else if(quantity === ''){
            setError("Don't leave quantity empty!");
            setTimeout(()=>{
                setError('');
            },3000)
        }
        else{
            const newIngredient = {
                "ingredient_name" : ingredientName,
                "quantity" : quantity
            }
            setIngredients([  newIngredient , ...ingredients])
        }
        
    }
    const removeIngredient = (index) =>{
        const updatedAfterDelete = ingredients.filter((item , id) => id !== index);
        setIngredients(updatedAfterDelete)
    }

  return (
    <div className='w-full flex flex-col gap-2'>
        <div className='h-[30vh] flex flex-col gap-2 overflow-y-auto py-2'>
        {ingredients.map((ingredient , index) => (
            <div key={index}  className='flex flex-row w-full gap-5 items-center'>
                <p className='bg-[#F0F8FF] p-1 w-[60%] outline-none overflow-hidden  backdrop-blur-md shadow-md'>{index+1}) {ingredient.ingredient_name}</p>
                <p className='bg-[#F0F8FF] p-1 w-[20%] outline-none overflow-hidden  backdrop-blur-md shadow-md'>{ingredient.quantity}</p>
                <MinusIcon onClick={()=>removeIngredient(index)} className="h-6 w-4 font-semibold text-gray-500 cursor-pointer" />
            </div>
            
        ))}
        </div>
        <div className='flex flex-row w-full gap-5 items-center'>
            <input type="text" placeholder='Add Ingredient' value={ingredientName} onChange={(e)=>setIngredientName(e.target.value)}
                className='bg-[#F0F8FF] p-2 w-[60%] outline-none overflow-hidden  backdrop-blur-md shadow-md'  />
            
            <input type="text" placeholder='Quantity' value={quantity} onChange={(e)=> setQuantity(e.target.value)}
                className='bg-[#F0F8FF] p-2 w-[20%] outline-none overflow-hidden  backdrop-blur-md shadow-md'  />
            <PlusCircleIcon onClick={addIngredient}  className="h-6 w-6 text-slate-600" />
        </div>
        <p className='text-red-500 text-lg'>{error}</p>
    </div>
  )
}

export default IngredientSttore
import React from 'react'

const Ingredients = ({ingredients}) => {
  return (
    <>
      <p className='text-2xl md:text-4xl font-bold text-orange-600'>Ingredients</p>
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
        </>
  )
}

export default Ingredients
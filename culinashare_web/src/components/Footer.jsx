import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-br from-slate-900 to-slate-700 text-white flex flex-row  justify-center w-[100vw] min-h-[40vh] p-6'>
      <div className='w-[80%] h-full grid grid-cols-2 gap-4'>
        <div>
          
        </div>
        <div className='p-6 flex flex-col gap-4'>
          <p className='text-4xl font-bold text-orange-600'>Credits</p>
          <div>
            <p>UI/UX Designer</p>
            <a className='underline hover:text-orange-600' href="mailto:ashwinsanjay35@gmail.com">ashwinsanjay35@gmail.com</a>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Footer
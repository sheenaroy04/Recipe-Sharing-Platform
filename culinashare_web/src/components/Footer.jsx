import React from 'react'
import logo from '../images/culinashare_logo.png';

const Footer = () => {
  return (
    <div className='bg-gradient-to-br font-poppins from-slate-900 to-slate-700 text-white flex flex-row  justify-center w-[100vw] min-h-[40vh] p-6'>
      <div className='w-[80%] h-full grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex flex-col lg:p-6 lg:gap-4 items-center justify-center gap-1'>
          <img src={logo} alt="" className='h-full w-full lg:h-[70%] lg:w-[80%]' />
        </div>
        <div className='p-6 flex flex-col gap-4'>
          <p className='text-2xl font-semibold text-orange-600'>Credits</p>
          <div className='flex flex-col'>
            <p className='text-xl'>Project done by</p>
            <a className='underline hover:text-orange-600 text-md' href="mailto:sheenaroy282@gmail.com">sheenaroy282@gmail.com</a>
            {/* <a className='underline hover:text-orange-600 text-md' href="mailto:joysan936@gmail.com">joysan936@gmail.com</a> */}
          </div>
          {/* <div className='flex flex-col'>
            <p className='text-xl'>Logo Designer</p>
            <a className='underline hover:text-orange-600 text-md' href="mailto:ashwinsanjay35@gmail.com">ashwinsanjay35@gmail.com</a>
          </div> */}
          
        </div>
      </div>

    </div>
  )
}

export default Footer
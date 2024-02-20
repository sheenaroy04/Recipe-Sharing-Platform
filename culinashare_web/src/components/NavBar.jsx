import React from 'react'

const NavBar = () => {
  return (
    <div className='h-14 bg-slate-800 flex items-center justify-between px-10 fixed top-0 w-[100vw]'>
        <div className='text-white text-2xl font-bold'>
            CulinaShare
        </div>
        <div className='text-white flex items-center justify-center gap-4'>
            
                {/* <a  href="#home">Home</a>
                <a  href="#featured">Featured</a> */}
                <button className='border border-orange-600 px-4 py-1 text-lg rounded-md font-semibold'>Register</button>
                <button className='bg-orange-600 px-4 py-1 text-lg rounded-md font-semibold'>Login</button>
                            
        </div>
    </div>
  )
}

export default NavBar